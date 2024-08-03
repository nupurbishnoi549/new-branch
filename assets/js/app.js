
let book ={
    name : "The Magic Mountain",
    author : "Thomas Mann",
    page : 752,
    read : true,
}

function displayBookInfo() {
    return this.name + "" + this.author + "" + this.page
}

console.log(book)
 
function togglereadstatus() {
    book = book ? false : true;

    let text = document.getElementById('toggled')
    text.innerHTML = book
}