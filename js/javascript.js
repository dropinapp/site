// Get the modal
var userModal = document.getElementById('userSignUpModal');

// Get the button that opens the modal
var userBtn = document.getElementById('userSignUpButton');

// Get the <span> element that closes the modal
var userSpan = document.getElementById("userClose");

// When the user clicks the button, open the modal
userBtn.onclick = function() {
    userModal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
userSpan.onclick = function() {
    userModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == userModal) {
//         userModal.style.display = "none";
//     }
// }
// Get the modal
var gymModal = document.getElementById('gymSignUpModal');

// Get the button that opens the modal
var gymBtn = document.getElementById('gymSignUpButton');

// Get the <span> element that closes the modal
var gymSpan = document.getElementById("gymClose");

// When the user clicks the button, open the modal
gymBtn.onclick = function() {
    gymModal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
gymSpan.onclick = function() {
    gymModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == gymModal  || event.target == userModal) {
        gymModal.style.display = "none";
        userModal.style.display = "none";
    }
}
