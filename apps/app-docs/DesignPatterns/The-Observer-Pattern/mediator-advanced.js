var PubSub = {};
(function (q) {
    var topics = {},
        subUid = -1;
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    q.publish = function (topic, args) {
        if (!topics[topic]) {
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    };
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    q.subscribe = function (topic, func) {
        console.log("subscribe:", topic);
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
}(PubSub));
var grid = {
    addEntry: function (data) {
        if (data !== 'undefined') {
            console.log('Entry:'
                + data.title
                + ' Changenet / %'
                + data.changenet
                + '/' + data.percentage + ' % added');
        }
    },
    updateCounter: function (timestamp) {
        console.log('grid last updated at: ' + timestamp);
    }
};
// a very basic mediator
// https://en.wikipedia.org/wiki/Mediator_pattern
var gridUpdate = function (topics, data) {
    grid.addEntry(data);
    grid.updateCounter(data.timestamp);
}
var gridSubscription = PubSub.subscribe('dataUpdated', gridUpdate);
PubSub.publish('dataUpdated', {
    title: "Microsoft shares",
    changenet: 4,
    percentage: 33,
    timestamp: '17:34:12'
});
PubSub.publish('dataUpdated', {
    title: "Dell shares",
    changenet: 10,
    percentage: 20,
    timestamp: '17:35:16'
});