const ul = document.querySelector('.people');

const people = ['Dad', 'Mom', 'Ethan', 'Aidan'];

let html = ``;


people.forEach(function(person){
    html += `<li style = "color: darkblue">${person}</li>`;
})

console.log(html);
ul.innerHTML = html;