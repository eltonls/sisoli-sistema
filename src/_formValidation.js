/*

*** Desisti dessa parte de código em favor da validação do BOOTSTRAP E DO HTML ***

const checkISSN = (ISSN) => {
	const ISSN_REGEX = ^[0-9-]*$;

	if(ISSN.value !== ISSN_REGEX) {

	}
} */

import { addBook } from "./_addBook";

export const validateForm = (event, arr) => {
  const formElement = event.target;
  if (!formElement.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.preventDefault();
    // Add the book to the array received
    arr.push(addBook(event.target));
    return true;
  }
  formElement.classList.add("was-validated");
};
