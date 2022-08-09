function createMenu() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'Menu'

    container.append(header)
}

export {createMenu}