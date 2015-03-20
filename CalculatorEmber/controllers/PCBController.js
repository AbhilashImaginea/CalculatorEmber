/*
 * PCB Controller
 * PCB Controller responds to user actions from button controller and passes changes based on computations to Display controller.
 */
MyApp.PCBController = Ember.ArrayController.extend({
    needs: ['Display'],
    inputText: '',
    resultText: 0,
    iFirstValue: 0,
    isFirstValueFinal: false,
    iSecondValue: 0,
    isPreviousTotal: false,
    oCurrentOperator: '',
    isValueCalculated: false,
    iCurrentNumber: '',
    sCurrentInput: '',
    actions: {
        onNumberClick: function (value) {
            var oClickedValue = value;
            if (this.get('isValueCalculated') === true) {
                if (this.get('oCurrentOperator') !== '') {
                    this.set('iFirstValue', this.get('iCurrentNumber'));
                    this.set('isFirstValueFinal', true);
                    this.set('isValueCalculated', false);
                    this.set('iCurrentNumber', oClickedValue);
                    this.set('iSecondValue', oClickedValue);
                } else {
                    this.send('clear', '');
                    this.set('iCurrentNumber', oClickedValue);
                    this.set('isValueCalculated', false);
                }
            } else if (this.get('oCurrentOperator') !== '' && !this.get('isFirstValueFinal')) {
                this.set('iFirstValue', this.get('iCurrentNumber'));
                this.set('isFirstValueFinal', true);
                this.set('iSecondValue', oClickedValue);
                this.set('iCurrentNumber', oClickedValue);
            } else if (this.get('oCurrentOperator') !== '' && this.get('isFirstValueFinal')) {
                this.set('iSecondValue', this.get('iCurrentNumber') + oClickedValue);
                this.set('iCurrentNumber', this.get('iSecondValue'));
            } else {
                this.set('iCurrentNumber', this.get('iCurrentNumber') + oClickedValue);
            }
            this.send('display');
        },
        onOperatorClick: function (value) {
            var oClickedValue = value;
            switch (oClickedValue) {
            case "/":
            case "+":
            case "*":
            case "-":
                if (this.get('iCurrentNumber') === '') {
                    this.set('oCurrentOperator', '');
                } else if (this.get('oCurrentOperator') !== '' && this.get('iSecondValue') !== 0) {
                    this.send('onEqualtoClick');
                    this.set('oCurrentOperator', oClickedValue);
                } else {
                    this.set('oCurrentOperator', oClickedValue);
                }
                break;
            case "=":
                this.send('onEqualtoClick');
                break;
            case "C":
                this.send('clear', '');
                break;
            }
            this.send('display');
        },
        onEqualtoClick: function () {
            var iFinalValue;
            if (!isNaN(parseInt(this.get('iFirstValue'), 0)) && parseInt(this.get('iSecondValue'), 0) !== 0) {
                switch (this.get('oCurrentOperator')) {
                case "/":
                    iFinalValue = parseInt(this.get('iFirstValue'), 0) / parseInt(this.get('iSecondValue'), 0);
                    break;
                case "+":
                    iFinalValue = parseInt(this.get('iFirstValue'), 0) + parseInt(this.get('iSecondValue'), 0);
                    break;
                case "*":
                    iFinalValue = parseInt(this.get('iFirstValue'), 0) * parseInt(this.get('iSecondValue'), 0);
                    break;
                case "-":
                    iFinalValue = parseInt(this.get('iFirstValue'), 0) - parseInt(this.get('iSecondValue'), 0);
                    break;
                }

                this.set('iCurrentNumber', parseInt(iFinalValue, 0));
                this.set('isValueCalculated', true);
                this.set('oCurrentOperator', '');
                this.set('iSecondValue', 0);
            }
        },
        display: function () {
            if (this.get('iFirstValue') !== 0) {
                if (this.get('isValueCalculated') === true) {
                    this.set('sCurrentInput', this.get('iCurrentNumber'));
                } else {
                    this.set('sCurrentInput', this.get('iFirstValue'));
                }
            } else {
                this.set('sCurrentInput', this.get('iCurrentNumber'));
            }
            if (this.get('oCurrentOperator') !== '' && this.get('isValueCalculated') === false) {
                this.set('sCurrentInput', this.get('sCurrentInput') + this.get('oCurrentOperator'));
                if (this.get('iSecondValue') !== 0) {
                    this.set('sCurrentInput', this.get('sCurrentInput') + this.get('iSecondValue'));
                }
            } else if (this.get('oCurrentOperator') !== '') {
                this.set('sCurrentInput', this.get('sCurrentInput') + this.get('oCurrentOperator'));
            }
            this.get('controllers.Display').send('setDisplay', this.get('iCurrentNumber'), this.get('sCurrentInput'));
        },
        clear: function (value) {
            this.set('iFirstValue', 0);
            this.set('isFirstValueFinal', false);
            this.set('iSecondValue', 0);
            this.set('isPreviousTotal', false);
            this.set('oCurrentOperator', '');
            this.set('isValueCalculated', false);
            this.set('iCurrentNumber', '');
            this.set('sCurrentInput', '');
        }
    }
});