const forms = document.querySelectorAll('.form-group');

const validateName = (nameInput) => {
  const nameValue = nameInput.value;
  const nameValidate = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;

  if (!nameValidate.test(nameValue) && nameValue.trim() !== '') {
    nameInput.classList.add('form-group__input--error');
    nameInput.setCustomValidity('Введите корректное имя, начинающееся с заглавной буквы.');
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

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const form = evt.target;
  const nameInput = form.querySelector('.form-group__input--name');
  const phoneInput = form.querySelector('.form-group__input--phone');
  const checkboxInputs = form.querySelectorAll('.form-group__input-checkbox');

  let isValid = true;

  if (nameInput) {
    isValid = validateName(nameInput) && isValid;
  }
  if (phoneInput) {
    isValid = validatePhone(phoneInput) && isValid;
  }

  checkboxInputs.forEach((checkboxInput) => {
    isValid = validateCheckbox(checkboxInput) && isValid;
  });

  if (!isValid) {
    form.reportValidity();
  } else {
    form.submit();
    form.reset();
  }
};

forms.forEach((form) => {
  form.addEventListener('submit', onFormSubmit);

  const nameInput = form.querySelector('.form-group__input--name');
  const phoneInput = form.querySelector('.form-group__input--phone');
  const checkboxInputs = form.querySelectorAll('.form-group__input-checkbox');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.classList.remove('form-group__input--error');
    });
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      formatPhoneNumber(phoneInput);
      phoneInput.classList.remove('form-group__input--error');
    });
  }

  checkboxInputs.forEach((checkboxInput) => {
    checkboxInput.addEventListener('change', () => {
      checkboxInput.classList.remove('form-group__input--error');
    });
  });
});
