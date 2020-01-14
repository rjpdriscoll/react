'use strict';

console.log('Toggle app!');

var app = {
    title: 'Visibility App',
    subtitle: ''
};

var string = void 0;
var buttonText = 'Show Details';

var showString = function showString() {
    string = 'Apple is best, yo.';
    buttonText = 'Hide Details';
    render();
};

var hideString = function hideString() {
    string = '';
    buttonText = 'Show Details';
    render();
};

var showHide = function showHide() {
    if (buttonText === 'Show Details') {
        showString();
    } else {
        hideString();
    }
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { id: 'show', onClick: showHide },
            buttonText
        ),
        React.createElement(
            'p',
            null,
            string
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
