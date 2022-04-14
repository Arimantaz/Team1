const API_URL = 'http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com';

const form = document.querySelector('form');

const inputName = document.querySelector('input[name="name"]');
const inputPassword = document.querySelector('input[name="pass"]');

const errorAlert = document.querySelector('.promt--error');
const successAlert = document.querySelector('.promt--success');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = createInputObject();
    const formDataString = JSON.stringify(formData);
    login(formDataString);
});

function createInputObject() {
    const formData = {
        name: inputName.value,
        password: inputPassword.value
    };
    return formData;
};

async function login(formDataString) {
    errorAlert.style.display = 'none';
    successAlert.style.display = 'none';
    const responseObject = await fetch(API_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: formDataString
    })
    if (responseObject.ok) {
        successAlert.style.display = 'block';
    } else {
        errorAlert.style.display = 'block';
    }
};

async function addProduct(formDataString) {
    errorAlert.style.display = 'none';
    successAlert.style.display = 'none';
    const responseObject = await fetch(API_URL + '/api/products', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 90|ecftCCQweFkefNC6vczyl2oZpU2XWifwYpQLcIJi',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            price: '5',
            thumbnail: 'string',
            name: 'bandymas'
        })
    })
    if (responseObject.ok) {
        successAlert.style.display = 'block';
    } else {
        errorAlert.style.display = 'block';
    }
};