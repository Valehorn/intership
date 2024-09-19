const modal = document.querySelector('.modal');
const fields = modal.querySelector('.form-group__fields');
const select = modal.querySelector('.form-group__select');

select.addEventListener('click', () => {
  if (fields.classList.contains('form-group__fields--open')) {
    fields.classList.remove('form-group__fields--open');
  } else {
    fields.classList.add('form-group__fields--open');
  }
});

select.addEventListener('blur', () => {
  fields.classList.remove('form-group__fields--open');
});

modal.addEventListener('click', (event) => {
  if (!select.contains(event.target) && !fields.contains(event.target)) {
    fields.classList.remove('form-group__fields--open');
  }
});
