// Import all plugins
import * as bootstrap from "bootstrap";

// Import modules
import * as render from "./_renderList";
import { validateForm } from "./_formValidation";
import { addBook } from "./_addBook";
import { startTimer, resetTimer } from "./_timer";
import { removeAlert, formBlock } from "./_formBlock";
import { deleteRequest } from "./_deleteRequest";

// Get elements
const bookTableBodyElement = document.getElementById("book-table__body");
const bookFormElement = document.getElementById("book-form");
const formControls = document.querySelectorAll(".form-control");

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
