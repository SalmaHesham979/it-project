let loginform = document.querySelector('.login_form');
let lognowbtn = document.querySelector('.loginbtn') 
let signupform= document.querySelector('.signup_form');

/*For login */

/*function btzhr el login page lma ndos 3la el login button in nav bar suction */
function showform(){
    document.querySelector('.login_form form').reset();
    loginform.classList.add("active");
    
}

/*function bt2fl el form lma ndos 3la zorar el submit bta3 el login + enha msh ht2fl 
tol ma el inputs mfhsh 7aga + lma nktb informaion feha lma n3ml submit w nd5ol tany bttshal  */
function hide() {
    let email =document.querySelector('#email').value.trim();
    let password =document.querySelector('#password').value.trim();
    let remember =document.querySelector('#remember').checked;
    if(email !== '' && password !== '' && remember) {  
        loginform.classList.remove("active");  
      } else {  
        alert("Please complete all requirements");  
      }  
}

/* bt2fl el form lma ndos 3la (x) */
function hideform(){
    loginform.classList.remove("active");
    document.querySelector('.login_form form').reset();
    
}
/* end for login */



/*For signup */


/* when we click on zorar el sign up (el gmb don't have account) byodena l signup page 
 w y2fl el login page like a switch*/
function signupshow(){
    loginform.classList.remove("active");
    signupform.classList.add("active");
}

/* zorar el (x) */
function signuphide(){
    signupform.classList.remove("active");
    document.querySelector('.signup_form form').reset();
}


/* submit signup */
function hide_from_signup(){
    let email =document.querySelector('#em').value.trim();
    let password =document.querySelector('#pass').value.trim();
    let username=document.querySelector('#username').value.trim();
    let agree=document.querySelector('#agree').checked;

    if(email !== '' && password !== '' && username !== '' && agree) {  
        signupform.classList.remove("active");
        document.querySelector('.signup_form form').reset();
        return true;
      } else {  
        alert("Please provide the following to verify your identity"); 
        return false;
      }  
      
}
/* end For sign up  */
/*the begin of landing page*/

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".headerImage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".headerContent p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headerContent h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headerBtns", {
  ...scrollRevealOption,
  delay: 1500,
});
/*the end of landing page*/
// sarah`s turn
ScrollReveal().reveal(".destinationCard", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".showsea_image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase_content h3", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase_Content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase_btn", {
  ...scrollRevealOption,
  delay: 1500,
});
scrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  interval: 500,

;scrollReveal().reveal(".discover_card", {
  ...scrollRevealOption,
  interval: 500,
});

  Slidesperview:3,
  SpaceBetween:20,
  loop:true,
});




