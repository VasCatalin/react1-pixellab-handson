export const render = (contact) => {
  const { name, surname, phone, email, pets = [] } = contact;
  const container = document.createElement('article');
  container.classList.add('contact', 'border', 'p-3', 'mb-4');

  container.innerHTML = `
    <h1>${name} ${surname}</h1>
    <ul>
      <li>${phone}</li>
      <li>${email}</li>
    </ul>
  `;
};
