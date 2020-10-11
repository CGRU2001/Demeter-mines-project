var img = 1;

function slideCarrousell(more){
    switch (img){
        case 0:
            document.getElementById("img").src = "https://sites.google.com/site/landminedetection/_/rsrc/1472842829916/antipersonal-mines/AP%20mine.jpg?height=400&width=362";
            document.getElementById("title").innerHTML = "How do mines work?";
            document.getElementById("txt").innerHTML = "Landmines activate when the pressure plate on the mine is exposed to enough pressure to trigger it, the firing pin releases and strikes the denotator explosive charge, which causes the explosive charge to explode. Then the detonation of the denotator charge trigger the main explosive charge. When triggered, the main charge’s detonation will convert the stored energy into large volume of hot gas. Those gases will expand and form a ‘blast wind’ which will push towards the surface, causing serious injuries as it has transferred huge amounts of energy into anything blocking its path.";
            break;
        case 1:
            document.getElementById("img").src = "https://cdn.discordapp.com/attachments/756508404968718356/762987657868345384/at-mines.png";
            document.getElementById("title").innerHTML = "Land mines";
            document.getElementById("txt").innerHTML = "Landmines are mines in or on the ground. Landmines can stay active for up to 50 years. They are designed to blow when triggered by for example pressure or a tripwire. They explode - release fragments at high speed once contacted with human, truck, car. Landmines are cheaper than sea mines and are also smaller in size.\n" +
                "Landmines can kill up to 35 meters and cause severe injuries at more than 100 meters away (once exploded).";
            break;
        case 2:
            document.getElementById("img").src = "https://cdn.discordapp.com/attachments/756508404968718356/762987302976487434/at-mines.png";
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
        case 3:
            document.getElementById("img").src = "https://cdn.discordapp.com/attachments/756508404968718356/762987810881273856/lightanti-tank.png";
            document.getElementById("title").innerHTML = "Heavy Anti-tank mines\n" +
                "(AT-Mines)";
            document.getElementById("txt").innerHTML = "Is a mine target on tanks and other heavy vehicle’s. There are two different types of heavy AT-mines. The first type are triggered by pressure of a vehicle which drives over it, they need at least 200 kg to explode.\n" +
                "The other type is called off-road miens, which are triggered by a change in the magnetic field, which also means it doesn’t need physical contact.";
            break;
        case 4:
            document.getElementById("img").src = "https://images.squarespace-cdn.com/content/v1/5497331ae4b0148a6141bd47/1533488464157-AYYS0QO7ZW0KPGOT6XRQ/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/underwater-sea-mine-danger-weapon-deadly-naval-ocean-sea_bpocqo-8__F0000.png?format=1500w";
            document.getElementById("title").innerHTML = "Naval mines";
            document.getElementById("txt").innerHTML = "Naval mines or sea mines are mines in the seas. The mines float just below the surface or as deep as five meters, the naval mines work with a steel cable connecting the mine to an anchor on the seabed to prevent it from drifting away.\n" +
                "Navel mines are deposited and left to wait until they are triggered by the approach of, or contact with, any vessel, such as submarines.\n" +
                "They’re more expensive than landmines, in fact they’re also larger in size. Naval mines can stay active for up to 10 years.";
            break;

    }
    if(more == 'next'){
        img++;
        if(img == 5){
            img = 0;
        }
    }else{
        img--;
        if(img == -1){
            img = 4;
        }
    }
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
