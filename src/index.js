// Import all plugins
import * as bootstrap from "bootstrap";

// Import modules
import * as render from "./modules/_renderList";
import { validateForm } from "./modules/_formValidation";
import { startTimer, resetTimer } from "./modules/_timer";
import { removeAlert, formBlock } from "./modules/_formBlock";
import { deleteRequest } from "./modules/_deleteRequest";

// Get elements
const bookTableBodyElement = document.getElementById("book-table__body");
const bookFormElement = document.getElementById("book-form");

const tableList = [];
let isTimerStarted = false;

console.log(deleteRequest);

bookFormElement.addEventListener("change", (event) => {
  if (isTimerStarted === false) {
    startTimer().then((result) => {
      formBlock(bookFormElement);
    });
    isTimerStarted = true;
  }
});

bookFormElement.addEventListener(
  "submit",
  (event) => {
    const isValidated = validateForm(event, tableList);
    // Rerender the list:
    if (isValidated === true) {
      render.RenderList(tableList, bookTableBodyElement);
      bookFormElement.classList.remove("was-validated");
      bookFormElement.reset();
      resetTimer();
      removeAlert();
      isTimerStarted = false;
    }
  },
  false
);

bookTableBodyElement.addEventListener("click", (event) => {
  return deleteRequest(event, tableList);
});
