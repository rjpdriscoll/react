console.log('Toggle app!');

const app = {
    title: 'Visibility App',
    subtitle: '',
}

let string;
let buttonText = 'Show Details';

const showString = () => {
    string = 'Apple is best, yo.'
    buttonText = 'Hide Details';
    render();
};

const hideString = () => {
    string = '';
    buttonText = 'Show Details';
    render();
};

const showHide = () => {
    if (buttonText === 'Show Details') {
        showString();
    } else {
        hideString();
    }
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button id="show" onClick={showHide}>{buttonText}</button>
            <p>{string}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();