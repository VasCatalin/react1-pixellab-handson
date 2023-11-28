import { findContact } from './query';

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const queryInput = form.q;
  const searchValue = queryInput.value;

  const contacts = findContact(searchValue);

  queryInput.value = '';
});

export default searchForm;
