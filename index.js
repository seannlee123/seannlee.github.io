//template_6r4vp0b
//service_j7nlnsd
// public key: OsOsjDwGHI4qPHH-J

 function contact(event){ //this is a promise
   event.preventDefault(); //stop default of refreshing
   const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
   .sendForm(
    "service_j7nlnsd",
    "template_6r4vp0b",
    event.target,
    "OsOsjDwGHI4qPHH-J"
   ).then(() => {
    loading.classList.remove("modal__overlay--visible");  // we want to make class invisible
    success.classList += " modal__overlay--visible";
   })
   
   .catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
    "The email is temporarily unavailable. Contact me at seannlee123@outlook.com"
    );
   })
 }



// setTimeout(() => {  //testing   
   
//     console.log("this worked1")
// },1000);


/*toggle modal */

let isModalOpen = false;

function toggleModal(){
  
  if(isModalOpen ){ //if modal is open we want to close it and remove it
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
    
  }
  isModalOpen = true; //otherwise make it true and add(show it)
  document.body.classList += " modal--open" //returns the class so it shows visible


}


/*contrast */

let contrastToggle = false;

function  toggleContrast(){
    contrastToggle = !contrastToggle /*if oppositie of contrasttoggle (true)*/
    if(contrastToggle){
      document.body.classList += " dark-theme"

    }
    else{
      document.body.classList.remove("dark-theme")
    }
}