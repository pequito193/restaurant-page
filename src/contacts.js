function createContacts() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'Contacts'

    container.append(header)
}

export {createContacts}