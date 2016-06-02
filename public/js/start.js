/*
Event to start the app
*/
(function() {

    App.tasks = new App.Collections.Tasks;
    App.tasks.fetch().then(function() {
        new App.Views.App({
            collection: App.tasks
        });
    })
})();