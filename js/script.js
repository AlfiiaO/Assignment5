let $ = selector => document.querySelector(selector);

window.document.addEventListener("DOMContentLoaded", () => {

  $('#submitevent').addEventListener('submit', evt => {
    const inputId = $('inputID');
    const inputeName = $('inputname');
    const inputExtension = $('inputextension');
    const inputEmail = $('inputemail');
    const inputextension = $('inputextension');
    const inputState = $('inputState');
    const submitevent = $('submitevent');
    let msg = "";
    if (msg != " ") {
      alert(msg);
      evt.preventDefault();
    }
    let button = document.querySelector("button");
    function once() {
      console.log("empForm");
      button.addEventListener("click", once);
    }
  
  }
  )
});
    
 


 



