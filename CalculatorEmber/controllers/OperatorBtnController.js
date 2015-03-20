/*
 * Operator Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
MyApp.OperatorBtnsController = Ember.ArrayController.extend({
    needs: ['PCB'],
    actions: {
        onOperatorClick: function (btnValue) {
            this.get('controllers.PCB').send('onOperatorClick', btnValue);
        }
    }
});