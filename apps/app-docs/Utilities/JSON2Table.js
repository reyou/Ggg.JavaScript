class JsonToTable {
    constructor(id, properties) {
        this.id = id;
        this.html = "";
        this.tableClass = "table";
        this.properties = properties;
    }
    printObjectProps(data, objProps) {
        this.html += "<tr>";
        for (var i = 0; i < objProps.length; i++) {
            var itemObj = objProps[i];
            if (this.properties) {
                if (this.properties.indexOf(itemObj) === -1) {
                    continue;
                }
            }
            this.html += "<th>";
            this.html += itemObj;
            this.html += "</th>";
        }
        this.html += "</tr>";
        // values
        this.html += "<tr>";
        for (var j = 0; j < objProps.length; j++) {
            var item = objProps[j];
            if (this.properties) {
                if (this.properties.indexOf(item) === -1) {
                    continue;
                }
            }
            this.html += "<td>";
            var dataItem = data[item];
            if (Array.isArray(dataItem)) {
                if (dataItem.length > 0) {
                    this.printObject(dataItem);
                }
            }
            else if (typeof dataItem == "object") {
                this.printObject(dataItem);
            }
            else {
                this.html += dataItem;
            }
            this.html += "</td>";
        }
        this.html += "</tr>";
    }
    printObject(data) {
        if (!data) {
            return;
        }
        var objProps = Object.getOwnPropertyNames(data);
        this.html += `<table class='${this.tableClass}'>`;
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                objProps = Object.getOwnPropertyNames(item);
                this.printObjectProps(item, objProps);
            }
        } else {
            this.printObjectProps(data, objProps);
        }
        this.html += "</table>";
    }
}


function JSON2Table(id, data, properties) {
    var jsonToTable = new JsonToTable(id, properties);
    jsonToTable.printObject(data);
    $("#" + id).html(jsonToTable.html);
}

