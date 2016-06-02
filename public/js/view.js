/*
Global App View
*/
App.Views.App = Backbone.View.extend({
    
    initialize: function() {
        var addTaskView = new App.Views.AddTask({
            collection: App.tasks
        });
        var allTaskView = new App.Views.Tasks({
            collection: App.tasks
        }).render();
        $('#allTasks').append(allTaskView.el);
    }
});

/*
Add a Task. 
Allows adding the task via keypress as well as submit button
*/

App.Views.AddTask = Backbone.View.extend({

    el: '#add_task',

    events: {
        'submit': 'addTask',
        'keypress #task': 'addTaskOnKey',
    },

    initialize: function() {
        this.tasks = $('#task');
    },

    addTask: function(e) {
        e.preventDefault();
        this.collection.create({
            tasks: this.tasks.val()
        }, {
            wait: true
        });
        this.clearForm();
    },

    addTaskOnKey: function(e) {
        if (e.which === 13) {
            this.addTask(e);
        }
    },

    clearForm: function() {
        this.tasks.val('');
    }
});

/*
Collection of Tasks
It calls a Single Task Model Internally
*/

App.Views.Tasks = Backbone.View.extend({
    
    tagName: 'tbody',

    initialize: function() {
        //debugger;
        this.collection.on('add', this.addOne, this);
    },

    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },

    addOne: function(task) {
        //console.log(task);
        var taskView = new App.Views.Task({
            model: task
        });
        this.$el.append(taskView.render().el);
    }
});

/*
Single Task View.
Holds Function for Updating as well as destroying the model.
Allows inline updation and deletion.
Also, keeps track of the events (mouse and keyboard)
*/

App.Views.Task = Backbone.View.extend({

    tagName: 'tr',

    template: template('allTaskView'),

    initialize: function() {
        this.model.on('destroy', this.unrender, this);
        this.model.on('change', this.render, this);
    },

    events: {
        'click a.delete': 'deleteTask',
        'click a.editButton': 'editTask',
        'keypress .edit': 'updateOnEnter',
        'keydown .edit': 'revertOnEscape',
        'blur .edit': 'close'
    },

    editTask: function() {
        this.$el.addClass('editing');
        this.$(".edit").focus();
    },

    deleteTask: function() {
        this.model.destroy();
    },

    close: function() {
        //debugger;
        var value = this.$(".edit").val().trim();
        if (!this.$el.hasClass('editing')) {
            return;
        }
        if (value && value != this.model.get('tasks')) {
            this.model.save({
                tasks: value
            });
        }

        this.$el.removeClass('editing');
    },

    updateOnEnter: function(e) {
        if (e.which === 13) {
            this.close();
        }
    },

    revertOnEscape: function(e) {
        if (e.which === 27) {
            this.$el.removeClass('editing');
            this.$(".edit").val(this.model.get('tasks'));
        }
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    unrender: function() {
        this.remove();
    }
});