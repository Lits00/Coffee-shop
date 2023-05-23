
const genereateMenuPage = () => {
    const content = document.getElementById('content');

    // create container
    const menuPage = document.createElement('div');
    menuPage.classList.add('display', 'custom');

    // header
    const header = document.createElement('h1');
    header.textContent = `MENU`;

    // menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    // container for hot coffee
    const hot = document.createElement('div');
    hot.classList.add('menuItems');
    
    const hotTitle = document.createElement('h3');
    hotTitle.textContent = `Hot Coffee`;

    const hotItems = document.createElement('div');
    hotItems.classList.add('items');

    // coffee name
    const hotName = document.createElement('div');
    hotName.classList.add('name');
    const cappuccino = document.createElement('p');
    cappuccino.textContent = `Cappuccino`;
    const americano = document.createElement('p');
    americano.textContent = `Americano`;

    // coffee price
    const hotPrice = document.createElement('div');
    hotPrice.classList.add('price');
    const cappuccinoPrice = document.createElement('p');
    cappuccinoPrice.textContent = `₱ 100`;
    const americanoPrice = document.createElement('p');
    americanoPrice.textContent = `₱ 80`;

    hotName.append(cappuccino, americano);
    hotPrice.append(cappuccinoPrice, americanoPrice);
    hotItems.append(hotName, hotPrice);
    hot.append(hotTitle, hotItems);

    // container for iced coffee
    const iced = document.createElement('div');
    iced.classList.add('menuItems');

    const icedTitle = document.createElement('h3');
    icedTitle.textContent = `Iced Coffee`;

    const icedItems = document.createElement('div');
    icedItems.classList.add('items');

    // iced coffee name
    const icedName = document.createElement('div');
    icedName.classList.add('name');
    const icedCappuccino = document.createElement('p');
    icedCappuccino.textContent = `Cappuccino`;
    const icedAmericano = document.createElement('p');
    icedAmericano.textContent = `Americano`;

    // iced coffee price
    const icedPrice = document.createElement('div');
    icedPrice.classList.add('price');
    const icedCappuccinoPrice = document.createElement('p');
    icedCappuccinoPrice.textContent = `₱ 100`;
    const icedAmericanoPrice = document.createElement('p');
    icedAmericanoPrice.textContent = `₱ 80`;

    icedName.append(icedCappuccino, icedAmericano);
    icedPrice.append(icedCappuccinoPrice, icedAmericanoPrice);
    icedItems.append(icedName, icedPrice);
    iced.append(icedTitle, icedItems);

    // container for pastries
    const pastry = document.createElement('div');
    pastry.classList.add('menuItems', 'expandMenu');

    const pastryTitle = document.createElement('h3');
    pastryTitle.textContent = `Pastries`

    const pastryItems = document.createElement('div');
    pastryItems.classList.add('items');

    // pastry name
    const pastryName = document.createElement('div');
    pastryName.classList.add('name');
    const caramel = document.createElement('p');
    caramel.textContent = `Caramel Bars`;
    const brownies = document.createElement('p');
    brownies.textContent = `Fudge Brownies`;

    // pastry price
    const pastryPrice = document.createElement('div');
    pastryPrice.classList.add('price');
    const caramelPrice = document.createElement('p');
    caramelPrice.textContent = `₱ 50`;
    const browniesPrice = document.createElement('p');
    browniesPrice.textContent = `₱ 50`;

    pastryName.append(caramel, brownies);
    pastryPrice.append(caramelPrice, browniesPrice);
    pastryItems.append(pastryName, pastryPrice);
    pastry.append(pastryTitle, pastryItems);

    // append contents
    menuContainer.append(hot, iced, pastry);
    menuPage.append(header, menuContainer);
    content.appendChild(menuPage);
};

export default genereateMenuPage;