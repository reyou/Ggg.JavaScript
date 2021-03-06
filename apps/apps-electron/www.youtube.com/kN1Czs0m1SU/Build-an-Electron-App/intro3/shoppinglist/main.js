const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

// Listen for the be app to be ready
app.on("ready", function () {
    // Create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: "file:",
        slashes: true
    }));
    // Quit app when closed
    mainWindow.on("closed", function () {
        app.quit();
    });
    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
})




// Handle create add window
function createAddWindow() {
    // Create new window
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        },
        title: "Add Shopping List Item"
    });
    // Load html file into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "addWindow.html"),
        protocol: "file:",
        slashes: true
    }));
    // Garbage collection handle
    addWindow.on("close", function () {
        addWindow = null;
    })

}

// Catch item:add
ipcMain.on("item:add", function (e, item) {
    console.log(item);
    mainWindow.webContents.send("item:add", item);
    addWindow.close();
})


// Create menu template
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Add Item",
                click() {
                    createAddWindow();
                }
            },
            {
                label: "Clear Items",
            },
            {
                label: "Quit",
                accelerator: process.platform == 'darwin' ? "Command+Q" : "Ctrl+Q",
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// If MacOS, add empty object to menu
if (process.platform == "darwin") {
    mainMenuTemplate.unshift({ label: "" });
}

// Add developer tools item if not in prod
if (process.env.NODE_ENV != "production") {
    mainMenuTemplate.push({
        label: "Developer Tools",
        submenu: [
            {
                label: "Toggle DevTools",
                accelerator: process.platform == 'darwin' ? "Command+I" : "Ctrl+I",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: "reload"
            }
        ]
    });
}