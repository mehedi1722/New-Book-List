// SELECT DOM ELEMENTS 
const Form = document.getElementById('Form')
const Title = document.getElementById('Title')
const Author = document.getElementById('Author')
const Year = document.getElementById('Year')
const Submit = document.getElementById('Submit')

// CLASS FOR BOOK LIST 
class Book {
    constructor(Title, Author, Year) {
        this.Title = Title;
        this.Author = Author;
        this.Year = Year;
    }
}

class CreateListOfBook extends Book{
    constructor() {
        super(Title, Author, Year)
    }
    CreateList(BookInfo) {
        console.log(BookInfo)
        const TableBody = document.getElementById('TableBody');
        const BookItem = `
            <tr>
                <td>${BookInfo.Title}</td>
                <td>${BookInfo.Author}</td>
                <td>${BookInfo.Year}</td>
                <td>
                    <a href="#">
                    <i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `
        TableBody.innerHTML += BookItem;
        Title.value = '';
        Author.value = '';
        Year.value = '';
    }
}

// ADD EVENTLISTENERS 
Form.addEventListener('submit', AddBooks);

// CREATE FUNCTION FOR EVENTS 
function AddBooks(e) {
    e.preventDefault();
    let TitleValue = Title.value;
    let AuthorValue = Author.value;
    let YearValue = Year.value;

    const error = document.querySelector('.error');
    const success = document.querySelector('.success');

    if(TitleValue === "" || AuthorValue === "" || YearValue === "") {
        error.style.display = 'block';
        setTimeout( () => {
            error.style.display = 'none';
        },3000)
    } else {
        let NewBook = new Book(TitleValue, AuthorValue, YearValue)

        let Books = new CreateListOfBook();
        Books.CreateList(NewBook)

        success.style.display = 'block';
        setTimeout( () => {
            success.style.display = 'none';
        },3000)
    }

}