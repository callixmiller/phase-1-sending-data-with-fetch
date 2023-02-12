//New code to try and pass all tests.
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then(res => {
        document.body.innerHTML = `<p>${res.id}</p>`
    })
    .catch(error => {
        document.body.innerHTML = `<p>${error.message}</p>`
    })
}

//Below code not passing last POST test
//Uncaught TypeError [ERR_INVALID_ARG_TYPE]: still getting thrown when running tests
// function submitData(name, email) {
//     const configObj = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             'name': name,
//             'email': email,
//         })
//     }
//     return fetch('http://localhost:3000/users', configObj)
//         .then(res => res.json())
//         .then(body => addNewContact(body.id))
//         .catch(message => document.querySelector('body').innerHTML = message)
// }

// function addNewContact(newId){
//     document.getElementsByTagName('body')[0].innerHTML = newId
//     document.body.append(message)
// }