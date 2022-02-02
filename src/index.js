// Import all plugins
import * as bootstrap from 'bootstrap';

// Import modules
import * as render from "./_renderList";

// Get elements
const bookTableBodyElement = document.getElementById("book-table__body");

const tableList = [
	{
		vinculo: "Aluno",
		titulo: "Harry Potter",
		autor: "J. K. Rowling",
		edicao: 1,
		ISSN: "978-8532511010",
		ano: 1997,
		editora: "Bloomsbury Publishing"	
	},
	{
		vinculo: "Discente",
		titulo: "O Senhor dos Anéis",
		autor: "J. R. R. Tolkien",
		edicao: 1,
		ISSN: "8595084750",
		ano: 1954,
		editora: "Allen & Unwin"	
	},
	{
		vinculo: "Técnico",
		titulo: "O Pequeno Princípe",
		autor: "A. de Saint-Exupéry",
		edicao: 1,
		ISSN: "978-0152465032",
		ano: 1943,
		editora: "Editions Gallimard"	
	}
];

render.RenderList(tableList, bookTableBodyElement);