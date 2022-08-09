function createContacts() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'Contacts'

    const footer = document.createElement('footer')
    footer.classList.add('footer')
        const logo = document.createElement('img')
        logo.classList.add('logo')
        logo.src = './images/github.png'

        const footerText = document.createElement('a')
        footerText.classList.add('footer-text')
        footerText.textContent = 'pequito193'
        footerText.href = 'https://github.com/pequito193'
        footerText.target = '_blank'

    
    footer.append(logo, footerText)



    container.append(header, footer)
}

export {createContacts}