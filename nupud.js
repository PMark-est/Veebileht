// Nuppule vajutades see kuvab vastava sisu
var nupud = document.getElementsByClassName("btn");
var tekstid = document.getElementsByClassName("tekst")
var tekstidWrapper = document.getElementsByClassName("sisuTekst")[0]
// Kui teksti kuvavale nupule ei ole vajutatud, siis see peidab selle sisu,
// kuni nupule on vajutatud. Samuti see tegeleb sellega, et tekib võimalus
// alla kerida, siis kui on tekst kuvatud ekraanile.
function reply_click(clicked_id){
    tekstidWrapper.style.display = "block"
    for(i=0; i < tekstid.length; i++){
        if(clicked_id == tekstid[i].id){
            tekstid[i].style.visibility = "visible"
            tekstid[i].style.display = "block"

        }
        else{
            tekstid[i].style.visibility = "hidden"
            tekstid[i].style.display = "none"
        }
    }
}
// Autorid Karmo ja Marko