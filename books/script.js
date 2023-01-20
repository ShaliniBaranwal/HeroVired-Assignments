function showBooks() {
    const table = document.createElement('table');

    const headRow = document.createElement('tr');

    const header1 = document.createElement('th');
    const header2 = document.createElement('th');
    const header3 = document.createElement('th');

    header1.innerText = 'Image of the book';
    header2.innerText = 'Name of the book';
    header3.innerText = 'Publishing Date';

    headRow.appendChild(header1);
    headRow.appendChild(header2);
    headRow.appendChild(header3);

    table.appendChild(headRow);

    const book1 = document.createElement('tr');

    const book1Image = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/81qOXsLCmhL.jpg'
    );

    book1Image.appendChild(img);

    const book1Name = document.createElement('td');
    book1Name.innerText = 'Percy Jackson: The Lightning Thief';
    const date1 = document.createElement('td');
    date1.innerText = '27-11-2014';

    book1.appendChild(book1Image);
    book1.appendChild(book1Name);
    book1.appendChild(date1);

    table.appendChild(book1);

    const book2 = document.createElement('tr');

    const book2Image = document.createElement('td');
    const img2 = document.createElement('img');
    img2.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/51vCHoDyzNL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
    );

    book2Image.appendChild(img2);

    const book2Name = document.createElement('td');
    book2Name.innerText = 'Percy Jackson: Sea of Monsters';
    book2Name.classList.add('already-read');
    const date2 = document.createElement('td');
    date2.classList.add('already-read');
    date2.innerText = '13-09-2016';

    book2.appendChild(book2Image);
    book2.appendChild(book2Name);
    book2.appendChild(date2);

    table.appendChild(book2);

    const book3 = document.createElement('tr');

    const book3Image = document.createElement('td');
    const img3 = document.createElement('img');
    img3.setAttribute(
        'src',
        'https://m.media-amazon.com/images/I/81vB-ian3NL.jpg'
    );

    book3Image.appendChild(img3);

    const book3Name = document.createElement('td');
    book3Name.innerText = "Percy Jackson: Titan's Curse";
    const date3 = document.createElement('td');
    date3.innerText = '26-01-2019';

    book3.appendChild(book3Image);
    book3.appendChild(book3Name);
    book3.appendChild(date3);

    table.appendChild(book3);

    const container = document.querySelector('#container');
    container.appendChild(table);
}
