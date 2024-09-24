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
  const phoneValidate = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

  if (!phoneValidate.test(phoneValue) && phoneValue.trim() !== '') {
    phoneInput.classList.add('form__group-input--error');
    phoneInput.setCustomValidity('Введите корректный номер телефона в формате +7(777)777-77-77.');
    phoneInput.reportValidity();
    return false;
  } else {
    phoneInput.classList.remove('form__group-input--error');
    phoneInput.setCustomValidity('');
    return true;
  }
};

const formatPhoneNumber = (input) => {
  let value = input.value.replace(/\D/g, ''); // Удалить нецифровые символы
  if (value.length > 11) value = value.slice(0, 11); // Ограничить до 11 цифр

  if (value.length === 0) {
    input.value = ''; // Если нет цифр, очищаем поле
  } else if (value.length === 1) {
    input.value = '+7('; // Если введена только первая цифра, показываем маску
  } else {
    const formattedValue = `+7(${value.slice(1, 4)})${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9, 11)}`;
    input.value = formattedValue;
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

const onFocus = (input) => {
  if (input.value.trim() === '') {
    input.value = '+7('; // Показать маску при фокусе
  }
};

const onBlur = (input) => {
  if (input.value === '+7(' || input.value === '+7()') {
    input.value = ''; // Удалить маску, если нет ввода
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
      formatPhoneNumber(phoneInput); // Форматировать номер перед валидацией
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
    phoneInput.addEventListener('input', () => {
      formatPhoneNumber(phoneInput);
      onInputChange(phoneInput);
    });
    phoneInput.addEventListener('focus', () => onFocus(phoneInput));
    phoneInput.addEventListener('blur', () => onBlur(phoneInput));
  }
});
