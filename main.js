//Menu items

const menu =[
{
    name:'Bread',
    price: 10.999,
    img:'./images/bread.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'breakfast',


},
{
    name:'Butter',
    price: 3.99,
    img:'./Images/Butter.webp',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'breakfast',


},
{
    name:'Mango',
    price: 9.99,
    img:'Images/Mango.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'breakfast',


}



];



const display = document.querySelector(".display");   //get display section

window.addEventListener("DOMContentLoaded", function () {       //on page loading,  create a new array by calling a function on each original array element 
  let displayMenu = menu.map(function (item) {

    //populate displayMenu with the HTML below, with details filled in from menu array

    return `<article>
            <header class="name">
                <h3>${item.name}</h3>
                <h3 class="price">${item.price}</h3>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, enim? Vero adipisci perferendis ea sit, esse perspiciatis maxime corrupti magnam!</p>
            <img src=${item.img} alt=${item.name} title=${item.name}>
        </article>`;

        


  });
  console.log(displayMenu[0]);
  
  displayMenu = displayMenu.join('');   //returns array as a string
  console.log(displayMenu);

  display.innerHTML = displayMenu;
});


console.log(display.innerHTML);