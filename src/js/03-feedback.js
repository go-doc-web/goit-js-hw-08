import throttle from 'lodash.throttle';

const LOCALSTORAGE_TEXTAREA_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  formInput: document.querySelector('.feedback-form input'),
  formTextarea: document.querySelector('.feedback-form textarea'),
};

const onFeedbackFormInput = e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(LOCALSTORAGE_TEXTAREA_KEY, JSON.stringify(formData));
};

const onFeedbackFormSubmit = e => {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_TEXTAREA_KEY);
  e.currentTarget.reset();
  console.log(formData);
};

const populateTexarea = () => {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_TEXTAREA_KEY);
  const messageParse = JSON.parse(savedMessage);

  if (messageParse) {
    refs.formInput.value = messageParse.email;
    refs.formTextarea.value = messageParse.message;
  }
};

refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

populateTexarea();
