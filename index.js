// Add your code here
function submitData(name, email) {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        })
    }
    return fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(body => addNewContact(body.id))
        .catch(message => document.querySelector('body').innerHTML = message)
}

function addNewContact(newId){
    document.getElementsByTagName('body')[0].innerHTML = newId
    document.body.append(message)
}