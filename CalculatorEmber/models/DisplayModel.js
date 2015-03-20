/*
 * Display Model
 * Stores items related to display
 */
MyApp.Display = DS.Model.extend({
    resultText: DS.attr('string'),
    inputText: DS.attr('string')
});

MyApp.Display.FIXTURES = [{
    id: 1,
    resultText: '0',
    inputText: ''
}]