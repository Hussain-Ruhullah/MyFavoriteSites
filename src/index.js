/* eslint-disable no-console */
import Form from './components/register/form.js';
import SiteList from './components/directory/listcontainer';
import SERVER_URL from './constants/server-url';
import './webstyles.scss'

const init = async () => {

    await chayns.ready;
    console.info('ServerUrl for current environment:', SERVER_URL);

    // get formcontainer from index-html

    const myForm = new Form('.formContainer');
    
    // Form

    // const listContainer = document.querySelector('.listDirectory');
    // const myList = new SiteList(listContainer);
    const myList = new SiteList('.listDirectory');

};

init();
