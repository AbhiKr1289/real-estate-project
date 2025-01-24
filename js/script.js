
//Menu Toggle
let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

// Restrict Input Length for Number Fields
document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

//Handle Form Submission
 const handleSubmit = (evt) => {
   evt.preventDefault()
   const formData = new FormData(evt.currentTarget)
   const formObject = Object.fromEntries(formData.entries())

   // Log the form data in the console
   console.log('Form Submitted:', formObject);

}
