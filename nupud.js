// Nuppule vajutades see kuvab vastava sisu
var nupud = document.getElementsByClassName("btn");
var tekstid = document.getElementsByClassName("tekst")
function reply_click(clicked_id){
    for(i=0; i < tekstid.length; i++){
        if(clicked_id == tekstid[i].id){
            tekstid[i].style.visibility = "visible"
        }
        else{
            tekstid[i].style.visibility = "hidden"
        }
    }
}
    