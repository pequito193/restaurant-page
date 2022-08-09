function createMenu() {

    const container = document.querySelector('#content')
    container.innerHTML = ''

    const header = document.createElement('h1')
    header.textContent = 'Menu'

    const mainDishes = document.createElement('p')
    mainDishes.classList.add('main-dishes')
    mainDishes.textContent = 'Main Course (Meat)'

    const menuGrid = document.createElement('div')
    menuGrid.classList.add('menu-grid')
        const food1 = document.createElement('div')
        food1.classList.add('food')
            const food1Picture = document.createElement('img')
            const food1Price = document.createElement('p')
            food1Picture.classList.add('food-image')
            food1Picture.src = './../dist/images/steak.webp'
            food1Price.textContent = 'Outstanding roasted beef, 8.00$'

        const food2 = document.createElement('div')
        food2.classList.add('food')
            const food2Picture = document.createElement('img')
            const food2Price = document.createElement('p')
            food2Picture.classList.add('food-image')
            food2Picture.src = './../dist/images/pork.webp'
            food2Price.textContent = 'Delicious cooked pork, 7.00$'

        const food3 = document.createElement('div')
        food3.classList.add('food')
            const food3Picture = document.createElement('img')
            const food3Price = document.createElement('p')
            food3Picture.classList.add('food-image')
            food3Picture.src = './../dist/images/chicken.webp'
            food3Price.textContent = 'Spicy chicken curry, 6.00$'

        const food4 = document.createElement('div')
        food4.classList.add('food')
            const food4Picture = document.createElement('img')
            const food4Price = document.createElement('p')
            food4Picture.classList.add('food-image')
            food4Picture.src = './../dist/images/lamb.webp'
            food4Price.textContent = 'Lamb (mutton) chops, 7.50$'

        const food5 = document.createElement('div')
        food5.classList.add('food')
            const food5Picture = document.createElement('img')
            const food5Price = document.createElement('p')
            food5Picture.classList.add('food-image')
            food5Picture.src = './../dist/images/rabbit.webp'
            food5Price.textContent = 'Spicy rabbit broth, 6.50$'

        
        food1.append(food1Picture, food1Price)
        food2.append(food2Picture, food2Price)
        food3.append(food3Picture, food3Price)
        food4.append(food4Picture, food4Price)
        food5.append(food5Picture, food5Price)

    const mainDishes2 = document.createElement('p')
    mainDishes2.classList.add('main-dishes')
    mainDishes2.textContent = 'Main Course (Fish)'

    const menuGrid2 = document.createElement('div')
    menuGrid2.classList.add('menu-grid2')
        const fish1 = document.createElement('div')
        fish1.classList.add('food')
            const fish1Picture = document.createElement('img')
            const fish1Price = document.createElement('p')
            fish1Picture.classList.add('food-image')
            fish1Picture.src = './../dist/images/salmon.webp'
            fish1Price.textContent = 'Delicious roasted salmon, 9.00$'

        const fish2 = document.createElement('div')
        fish2.classList.add('food')
            const fish2Picture = document.createElement('img')
            const fish2Price = document.createElement('p')
            fish2Picture.classList.add('food-image')
            fish2Picture.src = './../dist/images/pufferfish.webp'
            fish2Price.textContent = 'Pufferfish sashimi, 9.50$'

        const fish3 = document.createElement('div')
        fish3.classList.add('food')
            const fish3Picture = document.createElement('img')
            const fish3Price = document.createElement('p')
            fish3Picture.classList.add('food-image')
            fish3Picture.src = './../dist/images/cod.webp'
            fish3Price.textContent = 'Exquisite salted cod, 7.50$'


        fish1.append(fish1Picture, fish1Price)
        fish2.append(fish2Picture, fish2Price)
        fish3.append(fish3Picture, fish3Price)

    menuGrid.append(food1, food2, food3, food4, food5)
    menuGrid2.append(fish1, fish2, fish3)

    const footer = document.createElement('footer')
    footer.classList.add('footer')
        const logo = document.createElement('img')
        logo.classList.add('logo')
        logo.src = './../dist/images/github.png'

        const footerText = document.createElement('a')
        footerText.classList.add('footer-text')
        footerText.textContent = 'pequito193'
        footerText.href = 'https://github.com/pequito193'
        footerText.target = '_blank'

    
    footer.append(logo, footerText)



    container.append(header, mainDishes, menuGrid, mainDishes2, menuGrid2, footer)
}

export {createMenu}