const createTD = (text) => {
  const tdElement = document.createElement("td");
  tdElement.innerText = text;
  return tdElement;
};

const createTH = (vinculo) => {
  const thElement = document.createElement("th");
  thElement.innerText = vinculo;
  thElement.setAttribute("scope", "row");
  return thElement;
};

const createTR = (item) => {
  const newTR = document.createElement("tr");
  newTR.append(
    createTH(item.vinculo),
    createTD(item.titulo),
    createTD(item.autor),
    createTD(item.edicao),
    createTD(item.ISSN),
    createTD(item.ano),
    createTD(item.editora)
  );
  return newTR;
};

export const RenderList = (list, tableElement) => {
  tableElement.append(createTR(list[list.length - 1]));
};
