const buttons = document.querySelectorAll('button');

let allImages = document.querySelectorAll('.image');

 const toggleImages = (dataClass) => {
   // if (dataClass === "all") { // if the button with the data-class is all 
        
       // allImages.forEach(image => image.style.display = 'flex'); // show all the images


   // } else { // if it doesnt equal all then...

      //  allImages.forEach(image => { // go through the images

        //    if(image.dataset.class === dataClass ){ // and check the data class to see if it matches the button that has been pressed
                //image.style.display = 'flex'; // if it does, show the images that match
            //}else{
              //  image.style.display = "none"; // if it doesnt then hide the images that dont match
            //}

        //});

    //}

// ternary - below is a Ternary

    dataClass === "all" 
        ? allImages.forEach(image => image.style.display = 'flex') // if part of the statemnet 
        :allImages.forEach(image => { // else statement
            image.dataset.class === dataClass
                ? image.style.display = 'flex' // if statement 
                : image.style.display = 'none'; // else statement 
        })


} // end of toggleImages function


//console.log(buttons[0]); //shows button

//buttons[0]. addEventListener('click', function(){
    //buttons[4].textContent = 'Hello';// changing text
    //console.log('click');

//});


const toggleActiveClass =(active) => {

buttons.forEach(button => button.classList.remove("active")); //loop over the buttons and remove the active class from all the buttons
active.classList.add("active");
}





//for(let counter = 0; counter < buttons.length; counter++){

    //buttons[counter].addEventListener('click', function() {
        //toggleImages(buttons[counter].dataset.class);

        //toggleActiveClass(buttons[counter]);
       
    //});
//}



buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        toggleImages(button.dataset.class );
        toggleActiveClass( button);
    })
});