'use strict';

//
// PROMPT 1
function logInAndOut() {//name function
    console.log("the button worked!");//test the button
    const button = document.getElementById("login-button"); //initialize button as the element button
       if (button.innerText === "Log In") {//if statement swapping button text
            button.innerText = "Log Out";
        }
        else {
            button.innerText = "Log In";
        }
        }
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out".
//
// If a user clicks on the button again, its text should switch from "Log Out"
// to "Log In".

// TODO: replace this comment with your code
$('#login-button').on('click', logInAndOut);//event handler saying run above function when clicked

//
// PROMPT 2
function customAlert() {
    const formInput = document.getElementById("alert-text");
    alert(formInput.value);
    }
$('#prompt-2').on('submit', customAlert);
// function customAlert(evt) {
//     evt.preventDefault();
  
//     const url = '/';
//     const formData = {alert: $('#alert-text').val()};
//       $.get('/', formData, res => {
//       alert(`Your alert is: ${res.alert}`);//why is this undefined?
//     }
//     )
//   }
//   $('#prompt-2').on('submit', customAlert);
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

// TODO: replace this comment with your code


//
// PROMPT 3
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Click to add item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ul id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ul>
////////////////////////////////// 
//function addItem() {
//     const button = document.getElementById("#list");
    
// }
// $('#list-adder').on('click', addItem);
//////////////////////////////////
function addItem() {
      $('#list').append(`<li>Item</li>`);//grab element and append html
    }
$('#list-adder').on('click', addItem);
//////////////////////////////////
////do i have to use useState to keep adding items? this is a js file, not jsx
// function addItem() {
//     const [currentItems, moreItems] = React.useState('?');
//   console.log("I'm in the function!")
//     function add() {
//       console.log("i'm in the second function!")
//     }
//     return (
//       <button type="button" className="list-adder" onClick={add}>
//       </button>
//     );
//   }

// TODO: replace this comment with your code
//REACTdom.render(<hello/>, document.querySelector('#list'))
//////////////////////////////////
//
// PROMPT 4
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.
// function changeRed() {

// }
// $('#red-changer').on('click', changeRed);
// function changeBlue() {

// }
// $('#blue-changer').on('click', changeBlue);
// TODO: replace this comment with your code
function changeRed() {
    const colorChangeEls = $('.changes-colors');
    for (const el of colorChangeEls) {
      $(el).css('color', 'red');
    }
  }
  $('#red-changer').on('click', changeRed);

//
// PROMPT 5
//
// Display names of 20 berries from Pokemon (a video game franchise). To
// do this, you'll make a GET request to the Pokemon RESTful API to
// retrieve data on Pokemon berries, parse the results, then add
// the names of berries to the paragraph. The paragraph should look
// something like:
//
//   <ol id="berries">
//     cheri, chesto, pecha, rawst, aspear, leppa, oran, persim,
//     lum, sitrus, figy, wiki, mago, aguav, iapapa, razz, bluk,
//     nanab, wepear, pinap
//   </ol>
//
// The Pokemon RESTful API supplies data about various items, creatures,
// and other components of Pokemon video games. It's meant to be used as an
// educational resource to help developers practice working with REST APIs.
// You don't need to sign up for a developer key to use it and it's
// completely free!
//
// We recommend that you visit their website at https://pokeapi.co/ and
// check out the example on the homepage. This will give you an idea of
// how the API works, but you'll likely need more detailed information.
// For that, head over to their API documentation at https://pokeapi.co/docs/v2.
//
// The sections that will help you out the most for this prompt are:
// "Resources Lists/Pagination" (the first section you land on when you go
// to their API docs) and "Berries" (this is the section about berries).

// TODO: replace this comment with your code
function getBerries() {
    const url = 'https://pokeapi.co/api/v2/berry/';
   
    $.get(url, res => {
        for (const el of res["results"]){
        $("#berries").append(`<li>${el["name"]}</li>`);

    }}
    )
    return nameArray
  }
getBerries();  

//
// PROMPT 6
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the "number" input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span
//
// **DO NOT update any of the HTML provided!!!**
function findFactorial() {

    alert(num.value);
    let startingPlace = num
    let currentProduct = startingPlace
    while (startingPlace > 0){
        startingPlace -= 1;
        currentProduct = currentProduct*(startingPlace);
    }

return currentProduct
$('#factorial-result').append(``);
}
// TODO: replace this comment with your code

// const formValues = $('#num').serialize();//turns form into js object string
// $.post("/", formValues, resultHandler);//ajax, doing something

$('#num').on('submit', findFactorial);