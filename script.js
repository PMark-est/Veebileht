// Nuppule vajutades see kuvab vastava sisu
var col = document.getElementsByClassName("btn");
var i;

for (i = 0; i < col.length; i++){
    col[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        console.log(content.style.display);
        if(content.style.visibility == "visible"){
            content.style.visibility = "hidden";
            content.style.height = 0;
        } else {
            content.style.visibility = "visible";
            content.style.height = "70vh";
        }
    }); 
}