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


var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


//console.dir(backdrop.style['background-image']); 

for (var i = 0; i < selectPlanButtons.length; ++i) // for this function, there is no problem for packages because even button does not exist, this is a for loop, it will only loop if it finds the button, so for packages.html it will never execute
    {
        selectPlanButtons[i].addEventListener('click',function(){ // receive click event
            //modal.style.display='block';
            //backdrop.style.display='block';
            //modal.className = 'open'; // this will actually overwrite the complete class
            modal.classList.add('open')
            backdrop.classList.add('open')
            //classList.add will add the following string to the target element class, where open is defined in the shared.css
            // we can also use toggle here as well, which will remove if it is presented, or add if it is not presented
        });
    }

backdrop.addEventListener('click', function(){ //click on anyplace of backdrop will close it
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){// adding this if statement because in packages html, they do not have these button and it will fail because it will always execute
    modalNoButton.addEventListener('click', function(){
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    });
}


function closeModal(){
    //backdrop.style.display = 'none';
    //modal.style.display = 'none';
    if(modal){ // other page do not have modal that's why we wrap it
        backdrop.classList.remove('open');
    }
    modal.classList.remove('open');
};

toggleButton.addEventListener('click', function(){
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

//!!Important!!! within Javascript, to select a css property, since Javascript does not allow '-' inside a property name, therefore,
// for every property which names contain '-', '-' will be ignored, 
//  for ex: border-radius => borderRadius (the first letter after '-' will switch to captical letter)
//          background-image => backgroundImage
//          modal.style.background-image => modal.style.backgroundImage

// Alternatively!!!
// We can also use this way, 
    // modal.style['background-image'] // in this syntax, - is allowed since it is a string