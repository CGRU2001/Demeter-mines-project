var img = 1;

function slideCarrousell(more){
    switch (img){
        case 0:
            document.getElementById("img").src = "https://sites.google.com/site/landminedetection/_/rsrc/1472842829916/antipersonal-mines/AP%20mine.jpg?height=400&width=362";
            document.getElementById("title").innerHTML = "How do mines work?";
            document.getElementById("txt").innerHTML = "Landmines activate when the pressure plate on the mine is exposed to enough pressure to trigger it, the firing pin releases and strikes the denotator explosive charge, which causes the explosive charge to explode. Then the detonation of the denotator charge trigger the main explosive charge. When triggered, the main charge’s detonation will convert the stored energy into large volume of hot gas. Those gases will expand and form a ‘blast wind’ which will push towards the surface, causing serious injuries as it has transferred huge amounts of energy into anything blocking its path.";
            break;
        case 1:
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Non_armed_mon50_anti-personnel_clustermine.jpg/250px-Non_armed_mon50_anti-personnel_clustermine.jpg";
            document.getElementById("title").innerHTML = "Land mines";
            document.getElementById("txt").innerHTML = "Landmines are mines in or on the ground. Landmines can stay active for up to 50 years. They are designed to blow when triggered by for example pressure or a tripwire. They explode - release fragments at high speed once contacted with human, truck, car. Landmines are cheaper than sea mines and are also smaller in size.\n" +
                "Landmines can kill up to 35 meters and cause severe injuries at more than 100 meters away (once exploded).";
            break;
        case 2:
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Non_armed_mon50_anti-personnel_clustermine.jpg/250px-Non_armed_mon50_anti-personnel_clustermine.jpg";
            document.getElementById("title").innerHTML = "Anti-personnel mines (AP-\n" +
                "mines)";
            document.getElementById("txt").innerHTML = "AP-mines are mines which are made to injure\n" +
                "humans, causing them injuries. They are\n" +
                "forbidden today in Sweden and many other\n" +
                "countries in the Ottawa convection because\n" +
                "they think they’re are inhuman, because they cause injuries to the civil people after the war."+"- Explosive Blast\n" +
                "Explosive Blast is a common\n" +
                "mine which is placed in or on the ground. They get activated by a pressure of 2-5 kg (It depends on different models). The Explosive Blast is designed to rip off some parts of the lower bottom of the body. These have a combination of bright colors and odd shapes to seem irresistible to children.\n" +
                "Tripwire is a landmine which gets triggered when someone interacts with the thread, which causes the thread to become tense and explode. The mine is attached for an example to a bush, a building or a tree with the help of a thread.\n" +
                "- Bouncing Bettie’s\n" +
                "Is a tripwire mine which is buried in the ground.\n" +
                "Once triggered, a first charge lifts the mine up to waist height, upon detonating the explosion shoots out metal fragments in 360-degree horizontal, the fragments can kill up to 35 meters and cause severe damage from 100 meters away from the mine.";
            break;
    }
    if(more == 'next'){
        img++;
        if(img == 3){
            img = 0;
        }
    }else{
        img--;
        if(img == -1){
            img = 0;
        }
    }
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
