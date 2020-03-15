//THe DOM(Document Object Model) is essentially what the browser makes of our HTML code, it parses the HTML code and then creates a virtual representation of it.

var backdrop = document.querySelector('.backdrop');//variable name does not have to be the same as class name // document is the default function allows u to access DOM
// the parameter for querySelector could be a simple css selector
// query selector will always select one element, the first one element found by the selector
// if there is the case where queryselector find many elements, we can use (querySelectorAll), this would select all elements with target class and return an array
//console.log(backdrop);
// console.dir(backdrop); by doing this, we can actually see the object notation in the Console
// also, in the console, the style property listed from Object,is the inline style property.

//backdrop.style.display = 'block';
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');// using combinator here, to select all the button which is under plan class
for (var i = 0; i < selectPlanButtons.length; ++i)
    {
        selectPlanButtons[i].addEventListener('click',function(){ // receive click event
            modal.style.display='block';
            backdrop.style.display='block';
        });
    }