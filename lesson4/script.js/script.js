function toggleMenu(){
     console.log(document.getElementById("localNav").classList);
     document.getElementById("localNav").classList.toggle("hide");
} 

function footer(){
var year = new Date().getDate();
var date = 'Last Updated ${Date}';
document.getElementsByTagName('footer')[0].innerHTML = Date;
}