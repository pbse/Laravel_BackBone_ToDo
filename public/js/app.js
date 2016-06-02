/*
Global Definitions
*/
(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };

    window.template = function(id) {
        return _.template($("#" + id).html());
    };

})();