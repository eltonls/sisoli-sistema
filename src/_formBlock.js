const showAlert = (message, type) => {
  const alertPlaceholderElement = document.getElementById("alert-block-placeholder");

  // Create Wrapper with the message
  const wrapper = document.createElement('div')
  wrapper.classList.add("alert", `alert-${type}`, "alert-dismissible");
  wrapper.setAttribute("role", "alert");
  wrapper.innerText = message;

  alertPlaceholderElement.append(wrapper);
}

export const removeAlert = () => {
  const element = document.getElementById("alert-block-placeholder");
  element.children[0].remove(); // Alert is first child DIV 
}

export const formBlock = (formElement) => {
  const formInputsElements = document.querySelectorAll(".form-control")

  Array.from(formInputsElements).forEach((input) => {
    input.setAttribute("data-readonly", "data-readonly");
  });

  showAlert("Tempo esgotado, formulário bloqueado! Solicite o livro ou recarregue a página para continuar.", "danger");

};
