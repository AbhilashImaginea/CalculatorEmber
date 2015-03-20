//Extends the OperatorBtnsView to add he click event  
MyApp.OperatorBtnsView = Ember.View.extend({
    click: function (evt) {
        this.get('controller').send('onOperatorClick', evt.target.textContent);
    }
});