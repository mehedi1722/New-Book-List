// SELECT DOM ELEMENTS 
const Form = document.getElementById('Form')
const Title = document.getElementById('Title')
const Author = document.getElementById('Author')
const Year = document.getElementById('Year')
const Submit = document.getElementById('Submit')
const TableBody = document.getElementById('TableBody')

// CLASS FOR BOOK LIST 
class Book {
    constructor(Title, Author, Year) {
        this.Title = Title;
        this.Author = Author;
        this.Year = Year;
    }
}

class UI extends Book{
    constructor() {
        super(Title, Author, Year)
    }
    static CreateList(BookInfo) {
        const TableBody = document.getElementById('TableBody');
        const BookItem = `
            <tr>
                <td>${BookInfo.Title}</td>
                <td>${BookInfo.Author}</td>
                <td>${BookInfo.Year}</td>
                <td>
                    <a href="#">
                    <i class="fas fa-edit"></i> <i id="deleteBtn" class="fas fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `
        TableBody.innerHTML += BookItem;
        Title.value = '';
        Author.value = '';
        Year.value = '';
    }

    static ShowAlert(alert, warning) {
        alert.innerText = warning
        alert.style.display = 'block';
        setTimeout( () => {
            alert.style.display = 'none';
        },3000)
    }

    static RemoveBookFromList(targetButton, id) {
        const success = document.querySelector('.success');

        let removeButton = targetButton;
        if(removeButton.id === id) {
            let removeItem = removeButton.parentElement.parentElement.parentElement;
            removeItem.className = "remove_effect"; // Remove effect class
            removeItem.addEventListener('transitionend', function () {
                removeItem.remove()
                UI.ShowAlert(success, 'Successfully Item Deleted')
            })
        }
    }
}

// ADD EVENTLISTENERS 
Form.addEventListener('submit', AddBooks);
TableBody.addEventListener('click', removeBookItem);

// CREATE FUNCTION FOR EVENTS 
function AddBooks(e) {
    e.preventDefault();
    let TitleValue = Title.value;
    let AuthorValue = Author.value;
    let YearValue = Year.value;

    const error = document.querySelector('.error');
    const success = document.querySelector('.success');

    let NewBook = new Book(TitleValue, AuthorValue, YearValue)

    if(TitleValue === "" || AuthorValue === "" || YearValue === "") {
        UI.ShowAlert(error, 'Input field can\'t be empty');
    } else {
        UI.CreateList(NewBook)
        UI.ShowAlert(success, 'Books Added to the list');
    }

}

// REMOVE ELEMENTS FROM THE LIST 
function removeBookItem(e) {
    e.preventDefault()
    UI.RemoveBookFromList(e.target, "deleteBtn")
}