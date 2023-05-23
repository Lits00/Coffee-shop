
const generateFooter = () => {
    const content = document.getElementById('content');

    // create container
    const footer = document.createElement('footer');

    // footer contents
    const profile = document.createElement('a');
    const year = document.createElement('p');

    profile.textContent = 'Lits';
    profile.href = '#';
    year.textContent = new Date().getFullYear();

    footer.append(profile, year);
    content.appendChild(footer);
};

export default generateFooter;