import loadNavbar from './navbar';
import loadHomePage from './home';
import loadFooter from './footer';

const initialPage = () => {
    loadNavbar();
    loadHomePage();
    loadFooter();
};

export default initialPage;