const forms = document.querySelectorAll('.form-group');
let isValid;

const validateName = (nameInput) => {
  const nameValue = nameInput.value;
  const nameValidate = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;

  if (!nameValidate.test(nameValue) && nameValue.trim() !== '') {
    nameInput.classList.add('form__group-input--error');
    nameInput.setCustomValidity('Введите корректное имя, начинающееся с заглавной буквы.');
    nameInput.reportValidity();
    return false;
  } else {
    nameInput.classList.remove('form__group-input--error');
    nameInput.setCustomValidity('');
    return true;
  }
};

const validatePhone = (phoneInput) => {
  const phoneValue = phoneInput.value;
  const phoneValidate = /^(?:\d[-\d]*){11}$/;

  if (!phoneValidate.test(phoneValue) && phoneValue.trim() !== '') {
    phoneInput.classList.add('form__group-input--error');
    phoneInput.setCustomValidity('Введите корректный номер телефона из 11 цифр.');
    phoneInput.reportValidity();
    return false;
  } else {
    phoneInput.classList.remove('form__group-input--error');
    phoneInput.setCustomValidity('');
    return true;
  }
};


const onInputChange = (input) => {
  if (input.value.trim() === '') {
    input.classList.remove('form__group-input--error');
    input.setCustomValidity('');
  } else {
    if (input.classList.contains('form__group-input--error')) {
      if (input.type === 'text') {
        validateName(input);
      } else if (input.type === 'tel') {
        validatePhone(input);
      }
    }
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  isValid = true;

  forms.forEach((form) => {
    const nameInput = form.querySelector('.form-group__input--name');
    const phoneInput = form.querySelector('.form-group__input--phone');

    if (nameInput) {
      isValid = validateName(nameInput) && isValid;
    }
    if (phoneInput) {
      isValid = validatePhone(phoneInput) && isValid;
    }
  });

  if (isValid) {
    forms.forEach((form) => form.submit());
    forms.forEach((form) => form.reset());
  }
};

forms.forEach((form) => {
  form.addEventListener('submit', onFormSubmit);

  const nameInput = form.querySelector('.form-group__input--name');
  const phoneInput = form.querySelector('.form-group__input--phone');

  if (nameInput) {
    nameInput.addEventListener('input', () => onInputChange(nameInput));
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', () => onInputChange(phoneInput));
  }
});
