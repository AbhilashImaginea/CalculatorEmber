/*
 * Number Button Model
 * Stores items related to Number buttons
 */
MyApp.NumberBtn = DS.Model.extend({
    value: DS.attr('string'),
    type: DS.attr('string')
});

MyApp.NumberBtn.FIXTURES = [{
    id: 1,
    value: '1',
    type: 'number'
}, {
    id: 2,
    value: '2',
    type: 'number'
}, {
    id: 3,
    value: '3',
    type: 'number'
}, {
    id: 4,
    value: '4',
    type: 'number'
}, {
    id: 5,
    value: '5',
    type: 'number'
}, {
    id: 6,
    value: '6',
    type: 'number'
}, {
    id: 7,
    value: '7',
    type: 'number'
}, {
    id: 8,
    value: '8',
    type: 'number'
}, {
    id: 9,
    value: '9',
    type: 'number'
}, {
    id: 10,
    value: '0',
    type: 'number'
}];