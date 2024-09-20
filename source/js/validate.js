const form = document.querySelector('.form__free');
const nameError = form.querySelector('.form__name-error');
const phoneError = form.querySelector('.form__phone-error');
const nameInput = form.querySelector('.form__name');
const phoneInput = form.querySelector('.form__phone');
let isValid = true;

const validateName = () => {
  const nameValue = form.querySelector('.form__name').value;
  const nameValidate = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;

  if (!nameValidate.test(nameValue)) {
    nameError.textContent = 'Имя должно содержать только буквы и пробелы, а также начинаться с большой буквы.';
    nameError.style.display = 'block';
    nameError.style.height = `${nameError.scrollHeight}px`;
    nameError.style.marginTop = '11px';
    nameInput.classList.add('form__input--error');
    isValid = false;
  } else {
    nameError.textContent = '';
    nameError.style.display = 'none';
    nameError.style.height = '0';
    nameError.style.marginTop = '0';
    nameInput.classList.remove('form__input--error');
  }
};

const validatePhone = () => {
  const phoneValue = form.querySelector('.form__phone').value;
  const phoneValidate = /^(?:\d[-\d]*){11}$/;
  if (!phoneValidate.test(phoneValue)) {
    phoneError.textContent = 'Телефон не должен содержать буквы или символы отличные от "-" и быть не меньше 11 цифр';
    phoneError.style.display = 'block';
    phoneError.style.height = `${phoneError.scrollHeight}px`;
    phoneError.style.marginTop = '11px';
    phoneInput.classList.add('form__input--error');
    isValid = false;
  } else {
    phoneError.textContent = '';
    phoneError.style.display = 'none';
    phoneError.style.height = '0';
    phoneError.style.marginTop = '0';
    phoneInput.classList.remove('form__input--error');
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  isValid = true;
  validateName();
  validatePhone();

  if (isValid) {
    form.submit();
    form.reset();
  }
};

form.addEventListener('submit', onFormSubmit);
