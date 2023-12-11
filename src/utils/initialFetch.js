export const getBooksFromLocalStorage = ()=> {
    const books = JSON.parse(localStorage.getItem("books"));
    return books;
}