const forms = document.querySelectorAll('.form-group');
const formsInputs = document.querySelectorAll('.form-group__input');

const removeRequiredAttr = () => {
  formsInputs.forEach((input) => input.removeAttribute('required'));
};

removeRequiredAttr();

const validateName = (nameInput) => {
  const nameValue = nameInput.value;
  const nameValidate = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;

  if (!nameValidate.test(nameValue) && nameValue.trim() !== '') {
    nameInput.classList.add('form-group__input--error');
    nameInput.setCustomValidity('Введите корректное имя, начинающееся с заглавной буквы. Только латинские буквы или кириллица.');
    nameInput.reportValidity();
    return false;
  } else {
    nameInput.classList.remove('form-group__input--error');
    nameInput.setCustomValidity('');
    return true;
  }
};

const validatePhone = (phoneInput) => {
  const phoneValue = phoneInput.value;
  const phoneValidate = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

  if (!phoneValidate.test(phoneValue) && phoneValue.trim() !== '') {
    phoneInput.classList.add('form-group__input--error');
    phoneInput.setCustomValidity('Введите корректный номер телефона в формате +7(777)777-77-77.');
    phoneInput.reportValidity();
    return false;
  } else {
    phoneInput.classList.remove('form-group__input--error');
    phoneInput.setCustomValidity('');
    return true;
  }
};

const formatPhoneNumber = (input) => {
  let phoneValue = input.value.replace(/\D/g, '');
  if (phoneValue.length > 11) {
    phoneValue = phoneValue.slice(0, 11);
  }

  if (phoneValue.length === 0) {
    input.value = '';
  } else if (phoneValue.length === 1) {
    input.value = '+7(';
  } else {
    const formattedValue = `+7(${phoneValue.slice(1, 4)})${phoneValue.slice(4, 7)}-${phoneValue.slice(7, 9)}-${phoneValue.slice(9, 11)}`;
    input.value = formattedValue;
  }
};

const validateTextarea = (textareaInput) => {
  if (textareaInput.value.trim() === '') {
    textareaInput.classList.add('form-group__input--error');
    textareaInput.setCustomValidity('Это поле обязательно для заполнения.');
    textareaInput.reportValidity();
    return false;
  } else {
    textareaInput.classList.remove('form-group__input--error');
    textareaInput.setCustomValidity('');
    return true;
  }
};

const validateCheckbox = (checkboxInput) => {
  if (!checkboxInput.checked) {
    checkboxInput.classList.add('form-group__input--error');
    checkboxInput.setCustomValidity('Согласие на обработку данных является обязательным');
    return false;
  } else {
    checkboxInput.classList.remove('form-group__input--error');
    checkboxInput.setCustomValidity('');
    return true;
  }
};

const onInputChange = (input) => {
  input.classList.remove('form-group__input--error');
  input.setCustomValidity('');
};

const onPhoneFocus = (input) => {
  if (input.value.trim() === '') {
    input.value = '+7(';
  }
};

const onPhoneBlur = (input) => {
  if (input.value === '+7(' || input.value === '+7()') {
    input.value = '';
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const form = evt.target;
  const nameInput = form.querySelector('.form-group__input--name');
  const phoneInput = form.querySelector('.form-group__input--phone');
  const textareaInput = form.querySelector('.form__textarea');
  const checkboxInput = form.querySelector('.form-group__input-checkbox');

  let isValid = true;

  if (nameInput) {
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('form-group__input--error');
      nameInput.setCustomValidity('Это поле обязательно для заполнения.');
      nameInput.reportValidity();
      isValid = false;
    } else {
      isValid = validateName(nameInput) && isValid;
    }
  }

  if (phoneInput) {
    if (phoneInput.value.trim() === '') {
      phoneInput.classList.add('form-group__input--error');
      phoneInput.setCustomValidity('Это поле обязательно для заполнения.');
      phoneInput.reportValidity();
      isValid = false;
    } else {
      isValid = validatePhone(phoneInput) && isValid;
    }
  }

  if (textareaInput) {
    isValid = validateTextarea(textareaInput) && isValid;
  }

  if (checkboxInput) {
    isValid = validateCheckbox(checkboxInput) && isValid;
    checkboxInput.reportValidity();
  }

  if (isValid) {
    form.submit();
    form.reset();
  }
};

forms.forEach((form) => {
  form.addEventListener('submit', onFormSubmit);

  const nameInput = form.querySelector('.form-group__input--name');
  const phoneInput = form.querySelector('.form-group__input--phone');
  const textareaInput = form.querySelector('.form__textarea');
  const checkboxInput = form.querySelector('.form-group__input-checkbox');

  if (nameInput) {
    nameInput.addEventListener('input', () => onInputChange(nameInput));
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      formatPhoneNumber(phoneInput);
      onInputChange(phoneInput);
    });
    phoneInput.addEventListener('focus', () => onPhoneFocus(phoneInput));
    phoneInput.addEventListener('blur', () => onPhoneBlur(phoneInput));
  }
  if (textareaInput) {
    textareaInput.addEventListener('input', () => onInputChange(textareaInput));
  }
  if (checkboxInput) {
    checkboxInput.addEventListener('change', () => onInputChange(checkboxInput));
  }
});
