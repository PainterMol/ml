
let getHome=document.getElementById("myTextContent");
let getAbout=document.getElementById("myAboutContent");
let getArtworks=document.getElementById("myArtworksContent");
let getVideos=document.getElementById("myVideosContent");
let getBlog=document.getElementById("myBlogContent");
let getContact=document.getElementById("myContactContent");

// document.cookie = "cookieName=youtube";

// let getHomeId=document.getElementById("myHome");
// let getAboutId=document.getElementById("myAbout");

$("#myHome").click(function clickHome(){
   getAbout.style.display = "none";
   getArtworks.style.display = "none";
   getVideos.style.display = "none";
   getBlog.style.display = "none";
   getContact.style.display = "none";
   // getHomeId.innerHTML= "InHome";

   if (getHome.style.display == "block") {
      getHome.style.display = "show";
   }
   else {
     getHome.style.display = "block";
   }
});

$("#myAbout").click(function clickAbout(){

   getHome.style.display = "none";
   getArtworks.style.display = "none";
   getVideos.style.display = "none";
   getBlog.style.display = "none";
   getContact.style.display = "none";

   if (getAbout.style.display == "block") {
     // getAboutId.innerHTML= "InAbout";
      getAbout.style.display = "show";
   }
   else {
      getAbout.style.display = "block";
   }
    // $(this).removeClass(".myAboutclicked");
});


$("#myArtworks").click(function clickHome(){
   getHome.style.display = "none";
   getAbout.style.display = "none";
   getVideos.style.display = "none";
   getBlog.style.display = "none";
   getContact.style.display = "none";

   if (getArtworks.style.display == "block") {
      getArtworks.style.display = "show";
   }
   else {
     getArtworks.style.display = "block";
   }
});


$("#myVideos").click(function clickHome(){
   getHome.style.display = "none";
   getAbout.style.display = "none";
   getArtworks.style.display = "none";
   getBlog.style.display = "none";
   getContact.style.display = "none";

   if (getVideos.style.display == "block") {
      getVideos.style.display = "show";
   }
   else {
     getVideos.style.display = "block";
   }
});

$("#myBlog").click(function clickHome(){
   getHome.style.display = "none";
   getAbout.style.display = "none";
   getArtworks.style.display = "none";
   getVideos.style.display = "none";
   getContact.style.display = "none";

   if (getBlog.style.display == "block") {
      getBlog.style.display = "show";
   }
   else {
     getBlog.style.display = "block";
   }
});

$("#myContact").click(function clickHome(){
   getHome.style.display = "none";
   getAbout.style.display = "none";
   getArtworks.style.display = "none";
   getVideos.style.display = "none";
   getBlog.style.display = "none";

   if (getContact.style.display == "block") {
      getContact.style.display = "show";
   }
   else {
     getContact.style.display = "block";
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
