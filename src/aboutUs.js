function createAboutUs() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'About Us'

    const teamTitle = document.createElement('p')
    teamTitle.textContent = 'Our Team'

    const team = document.createElement('div')
        const manager = document.createElement('div')
        manager.classList.add('personnel')
            const managerPicture = document.createElement('img')
            const managerName = document.createElement('p')
            managerName.textContent = 'Our Manager, Albert'
            managerPicture.src = './../dist/images/manager.jpg'
            managerPicture.classList.add('staff')

        const chef = document.createElement('div')
        chef.classList.add('personnel')
            const chefPicture = document.createElement('img')
            const chefName = document.createElement('p')
            chefName.textContent = 'Our Chef, Fred'
            chefPicture.src = './../dist/images/chef.webp'
            chefPicture.classList.add('staff')

        const cook = document.createElement('div')
        cook.classList.add('personnel')
            const cookPicture = document.createElement('img')
            const cookName = document.createElement('p')
            cook.textContent = 'Our Cook, Gregory'
            cookPicture.src = './../dist/images/cook.jpeg'
            cookPicture.classList.add('staff')

        manager.append(managerPicture, managerName)
        chef.append(chefPicture, chefName)
        cook.append(cookPicture, cookName)

    team.append(manager, chef, cook)
    container.append(header, teamTitle, team)
}

export {createAboutUs}