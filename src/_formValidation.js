/*

*** Desisti dessa parte de código em favor da validação do BOOTSTRAP E DO HTML ***

const checkISSN = (ISSN) => {
	const ISSN_REGEX = ^[0-9-]*$;

	if(ISSN.value !== ISSN_REGEX) {

	}
} */

export const validateForm = (event) => {
	const formElement = event.target;
	if(!formElement.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
	}
	formElement.classList.add("was-validated");
}