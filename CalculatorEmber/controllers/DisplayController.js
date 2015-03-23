/*
 * The Display Controller
 * Responds to changes from PCB controller and invokes changes on the Display model.
 */
MyApp.DisplayController = Ember.ArrayController.extend({
    actions: {
        setDisplay: function (inputText, resultText) {
            var model, iIndex = 0,
                iLength = this.get('model.length');
            for (iIndex = 0; iIndex < iLength; iIndex++) {
                model = this.get('model').objectAt(iIndex);
                Ember.set(model, 'resultText', inputText);
                Ember.set(model, 'inputText', resultText);
            }
        }
    }
});