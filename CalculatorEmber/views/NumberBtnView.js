//Extends the NumberBtnsView to add he click event  
MyApp.NumberBtnsView = Ember.View.extend({
    click: function (evt) {
        this.get('controller').send('onNumberClick', evt.target.textContent);
    }
});
    