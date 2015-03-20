//Create Ember application
var MyApp = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//Set the model adapters to use local memory
MyApp.ApplicationAdapter = DS.FixtureAdapter.extend();

//Define the models and assign it to respective contollers
MyApp.IndexRoute = Ember.Route.extend({
    model: function () {
        return {
            numberBtn: this.store.findAll('NumberBtn'),
            operatorBtn: this.store.findAll('OperatorBtn'),
            display: this.store.findAll('Display'),
        };
    },
    setupController: function (controller, model) {
        controller.set('model', model);
        this.controllerFor('NumberBtns').set('model', model.numberBtn);
        this.controllerFor('OperatorBtns').set('model', model.operatorBtn);
        this.controllerFor('Display').set('model', model.display);
    }
});