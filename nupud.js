// Nuppule vajutades see kuvab vastava sisu
var nupud = document.getElementsByClassName("btn");
var tekstid = document.getElementsByName("tekst");
function reply_click(clicked_id){
    for(i=0;i < tekstid.length; i++){
        if(clicked_id == tekstid[i].id){
            tekstid[i].className ='tekst_naita';
        }
        else{
            tekstid[i].className ='tekst_peida';
        }
 
    }
   
}