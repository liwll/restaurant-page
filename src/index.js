import clearContent from './display/clearContent'
import renderHeader from './display/renderHeader'
import renderFooter from './display/renderFooter'
import renderHome from './pages/renderHome'
import renderAbout from './pages/renderAbout'
import renderMenu from './pages/renderMenu'

renderHeader();
renderHome();
renderFooter();

const homeTab = document.querySelector('#home');
const aboutTab = document.querySelector('#about');
const menuTab = document.querySelector('#menu');

homeTab.addEventListener('click', () => {
    clearContent();
    renderHome();
    renderFooter();
});

aboutTab.addEventListener('click', () => {
    clearContent();
    renderAbout();
    renderFooter();
})

menuTab.addEventListener('click', () => {
    clearContent();
    renderMenu();
    renderFooter();
})
