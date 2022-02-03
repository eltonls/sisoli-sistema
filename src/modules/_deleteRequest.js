export const deleteRequest = (event, tableList) => {
  // Armazena o título no elemento para comparar com a lista do array
  const elementTitle = event.target.parentElement.children[1].innerText;

  // Deletar o item da lista:
  tableList.forEach((item, index) => {
    if (item.ISSN === elementTitle) {
      tableList.splice(index - 1, 1);
    }
  });

  // Deletar o item do DOM
  if (event.target.nodeName === "TD" || "TH") {
    event.target.parentElement.remove();
  }
};
