export const addBook = (formElement) => {
  const newBookObj = {
    vinculo: "",
    titulo: "",
    autor: "",
    edicao: 0,
    ISSN: "",
    ano: 0,
    editora: "",
  };

  // ADD THE VALUES
  newBookObj.vinculo = formElement[0].value;
  newBookObj.autor = formElement[1].value;
  newBookObj.ISSN = formElement[2].value;
  newBookObj.editora = formElement[3].value;
  newBookObj.titulo = formElement[4].value;
  newBookObj.edicao = parseInt(formElement[5].value);
  newBookObj.ano = parseInt(formElement[6].value);

  return newBookObj;
};
