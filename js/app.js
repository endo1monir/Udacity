/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbarList = document.getElementById('navbar__list');
let firstSection = document.getElementById('section1');
let secondSection = document.getElementById('section2');
let thirdSection = document.getElementById('section3');
let fourthSection = document.getElementById('section4');
let menuBurgerButton = document.getElementById('burger');
let menuItems = [];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//build the nav bar function
function buildNaV() {
    //create the nav items dynamically
    for (let i = 0; i < 4; i++) {
        let navItem = document.createElement('li');
        let navItemLink = document.createElement('a');
        navItemLink.innerHTML = "section" + (i + 1);
        navItemLink.setAttribute('class', 'menu__link');
        navItem.appendChild(navItemLink);
        navItem.setAttribute('id', "item" + (i + 1));
        console.log(navItem);
        navbarList.append(navItem);
        menuItems[i] = navItemLink;
    }
}

//check the section in the view port or not
function isInViewport(theSection) {
    const rectSpace = theSection.getBoundingClientRect();
  if(window.innerWidth >600){  return (
    rectSpace.top >= 0 &&
    rectSpace.left >= 0 &&
    rectSpace.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rectSpace.right <= (window.innerWidth || document.documentElement.clientWidth)
);}
else{
    if(  rectSpace.top >= 0){
        return true;
    }
    else{
        return false;
    }
}
  
}

//change the color and background of the nav item according to the scroll 
function scrolledSectionEvent(secNumber, element) {
    firstSection.setAttribute('class', '');
    secondSection.setAttribute('class', '');
    thirdSection.setAttribute('class', '');
    fourthSection.setAttribute('class', '');
    for (let i = 0; i < 4; i++) {
        menuItems[i].style.background = "";
        menuItems[i].style.color = "black";

    }
    //set the background and color
    if (secNumber === 1) {
        firstSection.setAttribute('class', 'your-active-class');
        element.style.background = "#333";
        element.style.color = "#fff";
        element.style.transition = "ease 0.3s all";
    }
    if (secNumber === 2) {
        secondSection.setAttribute('class', 'your-active-class');
        element.style.background = "#333";
        element.style.color = "#fff";
        element.style.transition = "ease 0.3s all";
    }

    if (secNumber === 3) {
        thirdSection.setAttribute('class', 'your-active-class');
        element.style.background = "#333";
        element.style.color = "#fff";
        element.style.transition = "ease 0.3s all";
    }
    if (secNumber === 4) {
        fourthSection.setAttribute('class', 'your-active-class');
        element.style.background = "#333";
        element.style.color = "#fff";
        element.style.transition = "ease 0.3s all";
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNaV();


// Scroll to anchor ID using scrollTO event
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function (e) {
    // console.log(isInViewport(fourthSection));  

    if (isInViewport(firstSection)) {
        console.log('scrollllled  '+isInViewport(firstSection));
        scrolledSectionEvent(1, menuItems[0]);
    }
    else if (isInViewport(secondSection)) {

        scrolledSectionEvent(2, menuItems[1]);
    }
    else if (isInViewport(thirdSection)) {

        scrolledSectionEvent(3, menuItems[2]);
    }
    else if (isInViewport(fourthSection)) {

        scrolledSectionEvent(4, menuItems[3]);
    }
    else {
        for (let i = 0; i < 4; i++) {
            menuItems[i].style.background = "";
            menuItems[i].style.color = "black";

        }
    }
});


/**
 * End Main Functions
 * Begin Events
 *
*/
for (let i = 0; i < 4; i++) {
    menuItems[i].addEventListener('click', function () {
        if (window.innerWidth > 600) {
            if (i === 0) {
                window.scrollTo({
                    top: 400,
                    behavior: 'smooth'
                });
            }
            if (i === 1) {
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                });
            }
            if (i === 2) {
                window.scrollTo({
                    top: 1600,
                    behavior: 'smooth'
                });
            }
            if (i === 3) {
                window.scrollTo({
                    top: 2200,
                    behavior: 'smooth'
                });
            }
        }
        else{
            if (i === 0) {
                window.scrollTo({
                    top: 200,
                    behavior: 'smooth'
                });
            }
            if (i === 1) {
                window.scrollTo({
                    top: 1300,
                    behavior: 'smooth'
                });
            }
            if (i === 2) {
                window.scrollTo({
                    top: 2400,
                    behavior: 'smooth'
                });
            }
            if (i === 3) {
                window.scrollTo({
                    top: 3500,
                    behavior: 'smooth'
                });
            }
        }

    });
}
function displayMenu() {
    console.log('dsdsfdsf');
    if (navbarList.style.display === "block") {
       
        navbarList.style.display = "none";
    } else {
       
        navbarList.style.display = "block";
        navbarList.style.marginTop="15px";
        
    }
}

// Build menu 

// Scroll to section on link click

// Set sections as active


