// default export can be renamed
import { render } from './addContactForm.js';
import tazz from './stage.js';
const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', () => {
  tazz.innerHTML = '';
  tazz.append(render());
});

export default addContactButton;
