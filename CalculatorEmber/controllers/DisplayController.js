/*
 * The Display Controller
 * Responds to changes from PCB controller and invokes changes on the Display model.
 */
MyApp.DisplayController = Ember.ArrayController.extend({
    actions: {
        setDisplay: function (inputText, resultText) {
            var model = this.get('model').objectAt(0);
            Ember.set(model, 'resultText', inputText);
            Ember.set(model, 'inputText', resultText);
        }
    }
});