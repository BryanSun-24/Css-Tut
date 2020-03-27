var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");


// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";// so this ensure the bakcdrop first change the display setting, then when we change its class by javascript, it is already display: block, it only needs to add the transition
    setTimeout(function() { // this ensures that css does not change all the properties in one step and therefore omit the transition, but that is actually first of all changes the display which is the crucial part and then it changes the other properties and hence also palys our transition
    backdrop.classList.add("open");
  }, 10);
  });
}

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() { // this ensures that css does not change all the properties in one step and therefore omit the transition, but that is actually first of all changes the display which is the crucial part and then it changes the other properties and hence also palys our transition
    backdrop.style.display = "none";
  }, 1000); // this time out has to be matched with our transition defined in shared.css dropback

}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block"
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
  
});

// we have three event regarding to animation, those are built-in
ctaButton.addEventListener('animationstart', function(event){
  console.log('Animation started', event); // this would show text and the object in the console
})

ctaButton.addEventListener('animationend', function(event){
  console.log('Animation end', event);
})

ctaButton.addEventListener('animationiteration', function(event){
  console.log('Animation iteration', event)
})