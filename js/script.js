var img = 1;

function slideCarrousell(more){
    switch (img){
        case 0:
            document.getElementById("img").src = "https://sites.google.com/site/landminedetection/_/rsrc/1472842829916/antipersonal-mines/AP%20mine.jpg?height=400&width=362";
            document.getElementById("txt").innerHTML = "Foto 1";
            break;
        case 1:
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Non_armed_mon50_anti-personnel_clustermine.jpg/250px-Non_armed_mon50_anti-personnel_clustermine.jpg";
            document.getElementById("txt").innerHTML = "Foto 2";
            break;
    }
    if(more == 'next'){
        img++;
        if(img == 2){
            img = 0;
        }
    }else{
        img--;
        if(img == -1){
            img = 1;
        }
    }
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
