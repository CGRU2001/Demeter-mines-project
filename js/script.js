var img = 1;

function slideCarrousell(more){
    switch (img){
        case 0:
            document.getElementById("img").src = "https://sites.google.com/site/landminedetection/_/rsrc/1472842829916/antipersonal-mines/AP%20mine.jpg?height=400&width=362";
            document.getElementById("txt").innerHTML = "Landmines activate when the pressure plate on the mine is exposed to enough pressure to trigger it, the firing pin releases and strikes the denotator explosive charge, which causes the explosive charge to explode. Then the detonation of the denotator charge trigger the main explosive charge. When triggered, the main charge’s detonation will convert the stored energy into large volume of hot gas. Those gases will expand and form a ‘blast wind’ which will push towards the surface, causing serious injuries as it has transferred huge amounts of energy into anything blocking its path.";
            document.getElementById('txttitle').innerHTML = "How do mines work?";
            break;
        case 1:
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Non_armed_mon50_anti-personnel_clustermine.jpg/250px-Non_armed_mon50_anti-personnel_clustermine.jpg";
            document.getElementById("txt").innerHTML = "Landmines are mines in or on the ground. Landmines can stay active for up to 50 years. They are designed to blow when triggered by for example pressure or a tripwire. They explode - release fragments at high speed once contacted with human, truck, car. Landmines are cheaper than sea mines and are also smaller in size.\n" +
                "Landmines can kill up to 35 meters and cause severe injuries at more than 100 meters away (once exploded).\n";
            document.getElementById('txttitle').innerHTML = "Land mines";
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
