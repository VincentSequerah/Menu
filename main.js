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


},
{
    name:'Milk',
    price: 0.99,
    img:'Images/Milk.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'drink',


},

{
    name:'Hawaiian',
    price: 3.99,
    img:'Images/Hawaiian.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'pizza',


},
{
    name:'Sundae',
    price: 9.99,
    img:'Images/Sundae.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'dessert',


},
{
    name:'Strawberry Milkshake',
    price: 0.99,
    img:'Images/strawberrymilkshake.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'drink',


},
{
    name:'Vindaloo',
    price: 10.999,
    img:'./images/Vindaloo.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'curry',


},
{
    name:'Nachos',
    price: 3.99,
    img:'./Images/Nachos.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'starters',


},
{
    name:'Key Lime pie',
    price: 9.99,
    img:'Images/LimePie.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'dessert',


},
{
    name:'Chicken Korma',
    price: 10.99,
    img:'Images/Korma.jfif',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas corrupti aperiam qui quos, ea ipsum nihil enim dolor corporis.',
    category:'curry',


}


];



let selection;
let selectedItems = menu;

//filtering Menu for food types depending on button pressed
function filterFood(x){
    selection=x;

    selectedItems = menu.filter(foodType);
 
    function foodType(item){
        if (selection=='all'){
            return selectedItems = menu;         
        }
        return  item.category === selection;
    } ;



    
}










const display = document.querySelector(".display");   //get display section
window.addEventListener("DOMContentLoaded", refreshDisplay);     //on page loading,  create a new array by calling a function on each original array element 




window.addEventListener('click', refreshDisplay);    //when a button is clicked, refresh







function refreshDisplay()
{      
    let displayMenu = selectedItems.map(function (item) {
  
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
  
    
    displayMenu = displayMenu.join('');   //returns array (displayMenu) as a string adding each menu item that was selected together
  
  
    display.innerHTML = displayMenu;    //write value of displayMenu(item that have been selected) to the display
  };