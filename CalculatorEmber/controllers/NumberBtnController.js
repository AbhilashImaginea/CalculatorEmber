/*
 * Number Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
MyApp.NumberBtnsController = Ember.ArrayController.extend({
    needs: ['PCB'],
    actions: {
        onNumberClick: function (btnValue) {
            this.get('controllers.PCB').send('onNumberClick', btnValue);
        }
    }
});