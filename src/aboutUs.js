function createAboutUs() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'About Us'

    const whoAreWe = document.createElement('div')
    whoAreWe.classList.add('description')
        const title = document.createElement('p')
        title.classList.add('title')
        title.textContent = 'Who are we?'

        const text = document.createElement('p')
        text.classList.add('text')
        text.textContent = 'We are a new, up-and-coming team of highly trained professionals, here to bring YOU the finest cuisine this city has to offer! Bring your family and friends, everyone is invited!'

    whoAreWe.append(title, text)

    const teamTitle = document.createElement('p')
    teamTitle.classList.add('team-title')
    teamTitle.textContent = 'Our Team'

    const team = document.createElement('div')
    team.classList.add('team')
        const manager = document.createElement('div')
        manager.classList.add('personnel')
            const managerPicture = document.createElement('img')
            const managerName = document.createElement('p')
            managerName.textContent = 'Our Manager, Albert'
            managerPicture.src = './images/manager.jpg'
            managerPicture.classList.add('staff')

        const chef = document.createElement('div')
        chef.classList.add('personnel')
            const chefPicture = document.createElement('img')
            const chefName = document.createElement('p')
            chefName.textContent = 'Our Chef, Fred'
            chefPicture.src = './images/chef.webp'
            chefPicture.classList.add('staff')

        const cook = document.createElement('div')
        cook.classList.add('personnel')
            const cookPicture = document.createElement('img')
            const cookName = document.createElement('p')
            cookName.textContent = 'Our Cook, Gregory'
            cookPicture.src = './images/cook.jpeg'
            cookPicture.classList.add('staff')


        manager.append(managerPicture, managerName)
        chef.append(chefPicture, chefName)
        cook.append(cookPicture, cookName)

    team.append(manager, chef, cook)

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


    
    container.append(header, whoAreWe, teamTitle, team, footer)
}

export {createAboutUs}