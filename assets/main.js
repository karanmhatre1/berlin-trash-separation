/*
    yellow - 0
    blue - 1
    brown - 2
    black - 3
    green - 4
    white - 5
*/

var trashList = [
    ["0", "Rawr! Milk Carton go in the yellow bin.", "Milk Carton", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/milk_iowfzb.png"],
    ["2", "Rawr! Fruit go in the brown bin.", "Fruit", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/apple_dt62ds.png"],
    ["1", "Rawr! Magazines go in the blue bin.", "Magazines", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/magazine_lthawm.png"],
    ["3", "Rawr! Tissues go in the grey bin.", "Tissues", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893988/berlin-trash-separation/untitled%20folder/tissue_xd4cx3.png"],
    ["3", "Rawr! Pizza Boxes go in the grey bin.", "Pizza Box", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893988/berlin-trash-separation/untitled%20folder/pizza-box_oaszij.png"],
    ["2", "Rawr! Eye Shells go in the brown bin.", "Eye Shells", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/egg_hr78sx.png"],
    ["2", "Rawr! Peeling go in the brown bin.", "Peeling", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893988/berlin-trash-separation/untitled%20folder/orange-peel_pd1bzh.png"],
    ["0", "Rawr! Plastic Bottle go in the yellow bin.", "Plastic Bottle", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/bottle_f8rtyt.png"],
    ["0", "Rawr! Aluminium Foil go in the yellow bin.", "Aluminium Foil", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/foil_qnv2ia.png"],
    ["1", "Rawr! Newspaper go in the blue bin.", "Newspaper", "https://res.cloudinary.com/dgksx9vlc/image/upload/v1640893987/berlin-trash-separation/untitled%20folder/newspaper_jlw5hb.png"]
    // ["3", "Rawr! Ashes go in the grey bin.", "Ashes", "https://www.nicepng.com/png/detail/63-637651_424-pile-of-ashes-png.png"],
    
    
    
    // ["2", "Rawr! Tea Bags go in the brown bin.", "Tea Bags" ,"https://www.cityofboise.org/media/1919/shutterstock_316829060.jpg?width=1200&mode=max&upscale=false"],
    // ["2", "Rawr! Flowers go in the brown bin.", "Flowers", "https://data.whicdn.com/images/307892053/original.jpg"],
    // ["0", "Rawr! Yogurt Container go in the yellow bin.", "Yogurt Container", "https://static01.nyt.com/images/2018/05/21/climate/20cli-aspirational-yogurt/20cli-aspirational-yogurt-articleLarge.jpg?quality=75&auto=webp&disable=upscale"],
    
    // ["0", "Rawr! Plastic Toy go in the yellow bin.", "Plastic Toy", "https://c8.alamy.com/comp/M65054/a-broken-plastic-toy-futuristic-car-in-parts-M65054.jpg"],
    // ["0", "Rawr! Cans go in the yellow bin.", "Cans", "https://cdn.education.com/files/661001_662000/661124/file_661124.JPG"],

    // ["1", "Rawr! Amazon Box go in the blue bin.", "Amazon Box", "https://m.media-amazon.com/images/I/51oYaDsOojL._AC_UL320_.jpg"],
    // ["1", "Rawr! Books go in the blue bin.", "Books", "https://static3.depositphotos.com/1000350/106/i/950/depositphotos_1060292-stock-photo-stack-of-old-books.jpg"]
];

state = 0;
score = 0;

var shuffled = trashList.sort(() => 0.5 - Math.random());
var answer = shuffled.slice(0, 10);

var scoreEl = null;

document.addEventListener("DOMContentLoaded", function(event) {
    

    var trashListEl = document.getElementById("trashList");
    scoreEl = document.getElementById("scoreVal");

    for(i=0;i<10;i++) {
        trashListEl.insertAdjacentHTML("beforeend", "<li><img src="+ answer[i][3] +"><img src='https://res.cloudinary.com/dgksx9vlc/image/upload/v1640894222/berlin-trash-separation/correct_cvbhqs.png' class='badge' id='correct_" + i + "'><img src='https://res.cloudinary.com/dgksx9vlc/image/upload/v1640894222/berlin-trash-separation/wrong_ivmcth.png' class='badge' id='wrong_" + i + "'></li>");
    }

    document.getElementById("yellowBin").addEventListener('click', function() {
        checkAnswer(0);
    });
    
    document.getElementById("blueBin").addEventListener('click', function() {
        checkAnswer(1);
    });
    
    document.getElementById("brownBin").addEventListener('click', function() {
        checkAnswer(2);
    });
    
    document.getElementById("blackBin").addEventListener('click', function() {
        checkAnswer(3);
    });
    
    document.getElementById("greenBin").addEventListener('click', function() {
        checkAnswer(4);
    });
    
    document.getElementById("whiteBin").addEventListener('click', function() {
        checkAnswer(5);
    });

});

function checkAnswer(bin) {

    if(state<9) {
        gsap.to("#trashList", {duration: 1.2, x: (state+1)*200*-1, delay: 0.8, ease: Power3.easeOut });
    }

    if(state<10) {
        if(answer[state][0] == bin) {
            gsap.to("#status"+state, { y: 28, duration: 0.5 });
            score++;
            document.getElementById('correct_'+state).style.display = "block";
        }
        else {
            document.getElementById('status'+state).classList.add("wrong");
            gsap.to("#status"+state, { y: -28, duration: 0.5 });
            document.getElementById('wrong_'+state).style.display = "block";
        }
    }

    scoreEl.innerHTML = score;
    state++;
}