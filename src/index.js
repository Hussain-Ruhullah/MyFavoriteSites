/* eslint-disable no-console */
import SiteList from './components/directory/';
import Form from './components/register/form.js';
import SERVER_URL from './constants/server-url';
import './webstyles.scss'


const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);
    // get formcontainer from index-html
    const formContainer = document.querySelector('.formContainer');

    const myForm = new Form();

    const formElement = myForm.createFormHtml();

    formContainer.appendChild(formElement);

    // Form
    const listContainer = document.querySelector('.listDirectory');

    const myList = new SiteList();

    const listElement = myList.createListHtml();

    listContainer.appendChild(listElement);
    


};

init();
