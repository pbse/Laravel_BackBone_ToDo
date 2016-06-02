/*
Global Model. There is just 1 table
*/
App.Models.Tasks = Backbone.Model.extend({
    validate: function(attrs) {
        if (!attrs.tasks) {
            return "Please Enter the Task";
        }
    }
});