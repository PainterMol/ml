
let getHome=document.getElementById("myTextContent");
let getAbout=document.getElementById("myAboutContent");

// let getHomeId=document.getElementById("myHome");
// let getAboutId=document.getElementById("myAbout");



$("#myAbout").click(function clickAbout(){

   getHome.style.display = "none";
   // getAbout.style.display = "none";

   if (getAbout.style.display == "block") {
     // getAboutId.innerHTML= "InAbout";
      getAbout.style.display = "show";
   }
   else {
      getAbout.style.display = "block";
   }
    // $(this).removeClass(".myAboutclicked");
});

$("#myHome").click(function clickHome(){
   getAbout.style.display = "none";
   // getHomeId.innerHTML= "InHome";

   if (getHome.style.display == "block") {
      getHome.style.display = "show";
   }
   else {
     getHome.style.display = "block";
   }
});


$( "#myOyOy1" ).toggle(function() {
  $(this).attr("src", "painterOy3_250x360.png");
},
function() {
  $(this).toggleClass("rotated180");
},
function() {
  $(this).toggleClass("rotated180");
},
function() {
  $(this).attr("src", "painterOy1_250x360.png");
},
);
