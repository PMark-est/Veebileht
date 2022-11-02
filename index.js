// Nuppule vajutades see kuvab vastava sisu
var col = document.getElementsByClassName("btn");
var i;

for (i = 0; i < col.length; i++){
    col[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        console.log(content.style.display);
        if(content.style.display == "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }); 
}