import contacts from './data.js';

export const findContact = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact).filter((part) => {
      return typeof part === 'string' || typeof part === 'number';
    });

    if (values.join('').includes(needle)) {
      return true;
    }

    console.log(values);
  });

  results;
};
