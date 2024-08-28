
function showDropdown() {
    document.getElementsByClassName("service")[0].style.display = "block";
  }
  
function hideDropdown() {
    document.getElementsByClassName("service")[0].style.display = "none";
}
function popupOpen() {
  document.getElementsByClassName("popup")[0].classList.add('popup-active');
}
function popupClose() {
  document.getElementsByClassName("popup")[0].classList.remove('popup-active');
}
