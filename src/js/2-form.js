const form = document.querySelector('.feedback-form');

const saveForm = () => {
  const userData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const loadForm = () => {
  const saveUserData = localStorage.getItem('feedback-form-state');
  if (saveUserData) {
    const { email, message } = JSON.parse(saveUserData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', saveForm);

window.addEventListener('load', loadForm);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    form.elements.email.value.trim() !== '' &&
    form.elements.message.value.trim() !== ''
  ) {
    console.log({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    });

    // Очищаємо сховище і поля форми
    localStorage.removeItem('feedback-form-state');
    form.elements.email.value = '';
    form.elements.message.value = '';
  } else {
    alert('Please fill all fields.');
  }
  form.reset();
});
