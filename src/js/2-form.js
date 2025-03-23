const form = document.querySelector(".feedback-form");
const formKey = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(formKey)) || { email: "", message: "" };

const handleInput = (event) => {
  if (!event.target.name) return; 
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(formKey, JSON.stringify(formData));
};

const toFillForm = () => {
  const savedData = localStorage.getItem(formKey);
  if (!savedData) return;

  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (Object.values(formData).some(value => !value.trim())) {
    alert("Fill please all fields");
    return;
}

  console.log("Form submitted:", formData);

  localStorage.removeItem(formKey);
  formData = { email: "", message: "" };
  form.reset();
};

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

toFillForm();

// Оголоси поза будь-якими функціями об’єкт formData з полями email та message, 
// які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input. 
// Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт 
// у локальне сховище. 
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. 
// Якщо так, використовуй їх для заповнення форми та об'єкта formData. 
// Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, 
// що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, 
// показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, 
// виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, 
// об’єкт formData і поля форми.