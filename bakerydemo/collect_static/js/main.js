// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}


// Hide alert messages after showing 5 seconds
function hideMessages() {
  document.getElementById("messages").style.display = "none";
}