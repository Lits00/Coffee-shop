
const generateHomePage = () => {
    const content = document.getElementById('content');
    
    // create container
    const homePage = document.createElement('div');
    homePage.classList.add('display')

    // page logo
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = "../images/rnlogo.jpeg";

    // home page header
    const header = document.createElement('h1');
    header.textContent = `BAKE N' BREW`;

    // slogan
    const slogan = document.createElement('p');
    slogan.textContent = `A cup of Happiness.`;
    
    homePage.append(logo, header, slogan);
    content.appendChild(homePage);
};

export default generateHomePage;