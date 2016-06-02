/*
Backbone Router. Not much of use though.
*/
App.Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        console.log("index callded");
    }
});

new App.Router;
Backbone.history.start();