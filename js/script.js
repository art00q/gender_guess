import { 
  API 
} from "./api.js";
import { 
  UI_ELEMENTS 
} from "./view.js";

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.firstElementChild.value;

  fetch(API + name)
    .then(response => response.json())
    .then(result => {
      if (result.gender === null) {
        throw new Error('Not defined gender');
      } else {
        const textResult = `${name} is ${result.gender}`;

        UI_ELEMENTS.RESULT.textContent = textResult;
      }
    })
    .catch(error => {
      UI_ELEMENTS.RESULT.textContent = error.message;
    });
});