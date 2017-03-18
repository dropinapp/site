EmbedManager.embed({
	key: "https://fs28.formsite.com/res/showFormEmbed?EParam=m%2FOmK8apOTACr0xhVIzLdmrYe2Y6sJfY&828840985",
	width: "100%",
	mobileResponsive: true
});


function initMap() {
  var uluru = {lat: 37.378870, lng: -122.072009};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

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

 //When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == userModal) {
         userModal.style.display = "none";
     }
 }
