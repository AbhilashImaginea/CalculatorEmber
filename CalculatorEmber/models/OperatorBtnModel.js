/*
 * Operator Button Model
 * Stores items related to Operator buttons
 */
MyApp.OperatorBtn = DS.Model.extend({
    value: DS.attr('string'),
    type: DS.attr('string')
});

MyApp.OperatorBtn.FIXTURES = [{
    id: 1,
    value: 'C',
    type: 'bOperator'
}, {
    id: 2,
    value: '=',
    type: 'bOperator'
}, {
    id: 3,
    value: '+',
    type: 'bOperator'
}, {
    id: 4,
    value: '-',
    type: 'bOperator'
}, {
    id: 5,
    value: '*',
    type: 'bOperator'
}, {
    id: 6,
    value: '/',
    type: 'bOperator'
}];
