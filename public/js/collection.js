/*
Global Collection
*/
App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Tasks,
    url: '/todo'
});