function seeds(){
    window.location.href="project1.html"
}
function Pesticides(){
    window.location.href="project2.html"
}
function Fertilizers(){
    window.location.href="project3.html"
}
 function search(){
     let query = document.getElementById("searchinput").value.trim().toLowerCase();
     if(query === "seeds"){
         window.location.href="project1.html";
     }
     else if(query === "pesticides"){
         window.location.href="project2.html";
     }
     else if(query === "fertilizers"){
         window.location.href="project3.html";
     }
     else{
         alert("No results found...");
     }
 }