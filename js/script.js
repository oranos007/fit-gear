toggleButton=document.querySelector(".toggle-button");
toggleButton.addEventListener("click",function (){
  smallNav=document.querySelector("nav .sm-nav")
  smallNav.style.display="flex"
})
closeButton=document.querySelector(".close-button");
closeButton.addEventListener("click",function (){
  smallNav=document.querySelector("nav .sm-nav")
  smallNav.style.display="none"

})