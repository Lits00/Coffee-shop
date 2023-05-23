
const generateContactPage = () => {
    const content = document.getElementById('content');

    // create container
    const contactPage = document.createElement('div');
    contactPage.classList.add('display', 'custom');

    // header
    const header = document.createElement('h1');
    header.textContent = `CONTACT US`;

    // contact container
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    // contact info
    const number = document.createElement('p');
    number.classList.add('info');
    number.textContent = `000-000-0000`;
    const email = document.createElement('p');
    email.classList.add('info');
    email.textContent = `businessEmail@email.com`;

    contactInfo.append(number, email);
    contactPage.append(header, contactInfo);
    content.appendChild(contactPage);
};

export default generateContactPage;