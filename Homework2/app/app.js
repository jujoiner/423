import * as MODEL from "./model.js";

function initListeners() {
    //MODEL.getAllNames();

    $("#gw").click((e) => {
        const location = $("#gwInput").val();
        if(location != "") {
            getWeather(location);
        } else {
            Swal.fire({
                title: "Tells us what you are looking for.",
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: true,
              });
        }
    });
}
function initSite(){
    if(localStorage){
        console.log("We in this!");
        localStorage.setItem("example",JSON.stringify({name:"Julius"}));
        console.log(localStorage.getItem("ezample"));
    }else{
        console.log("Its a little empty in here.");
    }
}

function getWeather(location) {
    console.log("weather " + location);
    MODEL.getCurrentWeather(location);
    $("#gwInput").val("");
}

$(document).ready(function () {
    initListeners();
    initSite();
});