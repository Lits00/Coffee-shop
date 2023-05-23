import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const generateNavbar = () => {
    const content = document.getElementById('content');

    // create container
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    
    // add buttons
    const ul = document.createElement('ul');

    // home btn
    const home = document.createElement('li');
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home')
    homeBtn.textContent = 'Home';

    // menu btn
    const menu = document.createElement('li');
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu');
    menuBtn.textContent = 'Menu';

    // contact btn
    const contact = document.createElement('li');
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact');
    contactBtn.textContent = 'Contact';

    nav.appendChild(ul);
    ul.append(home, menu, contact);
    home.appendChild(homeBtn);
    menu.appendChild(menuBtn);
    contact.appendChild(contactBtn)
    content.appendChild(nav);

    homeBtn.addEventListener('click', () => {
        homeBtn.style.color = "var(--brown)";
        menuBtn.style.color = "var(--default)";
        contactBtn.style.color = "var(--default)";
        clearDisplay();
        loadHomePage();
    })

    menuBtn.addEventListener('click', () => {
        menuBtn.style.color = "var(--brown)";
        homeBtn.style.color = "var(--default)";
        contactBtn.style.color = "var(--default)";
        clearDisplay();
        loadMenuPage();
    })

    contactBtn.addEventListener('click', () => {
        contactBtn.style.color = "var(--brown)";
        homeBtn.style.color = "var(--default)";
        menuBtn.style.color = "var(--default)";
        clearDisplay();
        loadContactPage();
    })
};

function clearDisplay(){
    const content = document.getElementById('content');
    const display = document.querySelector('.display');
    if(display){
        content.removeChild(display);
    };
};

export default generateNavbar;