const API_URL = 'http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com';

async function addProduct(formDataString) {
    // errorAlert.style.display = 'none';
    // successAlert.style.display = 'none';
    const responseObject = await fetch(API_URL + '/api/products', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 90|ecftCCQweFkefNC6vczyl2oZpU2XWifwYpQLcIJi',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                price: '5',
                thumbnail: 'string',
                name: 'bandymas10'
            })
        })
        // if (responseObject.ok) {
        //     successAlert.style.display = 'block';
        // } else {
        //     errorAlert.style.display = 'block';
        // }
};

addProduct()

async function getProducts() {
    // errorAlert.style.display = 'none';
    // successAlert.style.display = 'none';
    const responseObject = await fetch(API_URL + '/api/products', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 90|ecftCCQweFkefNC6vczyl2oZpU2XWifwYpQLcIJi',
                'Content-type': 'application/json'
            },
            // body: JSON.stringify({
            //     price: '5',
            //     thumbnail: 'string',
            //     name: 'bandymas5'
            // })
        })
        // if (responseObject.ok) {
        //     successAlert.style.display = 'block';
        // } else {
        //     errorAlert.style.display = 'block';
        // }

    const atsakymas = await responseObject.json()
    atsakymas.forEach(createProduct)

};
getProducts()


function createProduct(obj) {
    const productDiv = document.createElement('p')
    const productName = document.createElement('p')
    productName.innerHTML = obj.name
    console.log(productName)
}

// ///////// is chat
// getElement('http://ru.stackoverflow.com', '#nav-questions', function(element) {
//     console.log(element);
// });

// getElement('http://ru.stackoverflow.com', '.question-hyperlink', function(element) {
//     console.log(element.innerHTML);
// });

// function getElement(url, selector, c) {
//     request(new XMLHttpRequest());

//     function request(xhr) {
//         xhr.open('GET', 'https://crossorigin.me/' + url, true);
//         xhr.send();
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     html = document.createElement('div');
//                     html.innerHTML = xhr.responseText;
//                     c(html.querySelector(selector));
//                 }
//             }
//         }
//     }
// }