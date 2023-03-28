//forms
const titles = document.querySelector('#title');
const author = document.querySelector('#author');
const page = document.querySelector('#page');
const submits = document.querySelector('#submits');

//appended

const appended = document.querySelector('#appendedBooks');

let myLibrary = []; // storage of objects

const hp = new Book('hp', 'jk rowling', 2000);
myLibrary.push(hp);

const got = new Book('got', 'grrm', 2300);
myLibrary.push(got);

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
}

//create a function that puts an object inside the storage[myLibrary] from user input;

const toggle = document.querySelector('.toggle'); // toggle

submits.addEventListener('click', (e) => {
  //toggle
  const toggles = document.createElement('label');
  const inputs = document.createElement('input');
  inputs.type = 'checkbox';
  const span1 = document.createElement('span1');
  const span2 = document.createElement('span2');
  const span3 = document.createElement('span');

  toggles.classList.add('toggle');
  span1.classList.add('slider');
  span2.classList.add('labels');
  span2.setAttribute('data-on', 'YES');
  span2.setAttribute('data-off', 'NO');
  span3.innerText = 'READ?';
  span3.style = 'position: relative; right: 60px; bottom: 0.3px;';

  toggles.appendChild(inputs);
  toggles.appendChild(span1);
  toggles.appendChild(span2);
  toggles.appendChild(span3);

  const user = new Book();
  user.title = titles.value;
  user.author = author.value;
  user.page = Number(page.value);

  titles.value = '';
  author.value = '';
  page.value = '';

  const cont = document.createElement('div');
  cont.style = 'border: 1px solid';
  const titleCont = document.createElement('p');
  const authorCont = document.createElement('p');
  const pageCont = document.createElement('p');

  titleCont.innerText = `Book: ${user.title}`;
  authorCont.innerText = `By: ${user.author}`;
  pageCont.innerText = `with ${user.page} pages`;

  cont.appendChild(titleCont);
  cont.appendChild(authorCont);
  cont.appendChild(pageCont);
  cont.appendChild(toggles);

  if (user.title == '' || user.author == '') {
    alert('Please input fields!');
    e.preventDefault();
  } else {
    appended.appendChild(cont);
  }
});

function displayBook(arr) {
  arr.forEach((e) => {
    //toggle
    const toggles = document.createElement('label');
    const inputs = document.createElement('input');
    inputs.type = 'checkbox';
    const span1 = document.createElement('span1');
    const span2 = document.createElement('span2');
    const span3 = document.createElement('p');

    toggles.classList.add('toggle');
    span1.classList.add('slider');
    span2.classList.add('labels');
    span2.setAttribute('data-on', 'YES');
    span2.setAttribute('data-off', 'NO');
    span3.innerText = 'READ?';
    span3.style = 'position: relative; right: 60px; bottom: 10px;';

    toggles.appendChild(inputs);
    toggles.appendChild(span1);
    toggles.appendChild(span2);
    toggles.appendChild(span3);

    const newContainer = document.createElement('div');
    // newContainer.style = 'border: 1px solid;';

    const newTitle = document.createElement('p');
    newTitle.innerText = `Book: ${e.title}`;
    newContainer.appendChild(newTitle);

    const newAuthor = document.createElement('p');
    newAuthor.innerText = `By: ${e.author}`;
    newContainer.appendChild(newAuthor);

    const newPage = document.createElement('p');
    newPage.innerText = `with ${e.page} pages`;
    newContainer.appendChild(newPage);

    newContainer.appendChild(toggles);
    appended.appendChild(newContainer);
    return appended;
  });
}
displayBook(myLibrary);
