function makeHeadshot(d) {

    //this function makes all of the people cards. The first part makes a div which we will see as the headshot because in CSS we'll add a background image that's a photograph of someone's face.
    var headshot = document.createElement("div");
    var faces = document.getElementById("faces")
    headshot.id = "headshot" + d;
    faces.appendChild(headshot);
    headshot.classList.add("headshot");



 // var arrow = document.createElement("div");
 //    arrow.id = "arrow" + d;
 //    headshot.appendChild(arrow);
 //    arrow.classList.add("arrow");
 //    arrow.style.backgroundImage="url(imgs/arrow2.png)";
    // arrow.style.zIndex="10";

    //this is the part of the function that makes the divs "behind" the headshot divs, which I'm calling the description. This is the "back of the card." In actuality, it is just a transparent div on top of the headshot div.

    var description = document.createElement("div");

    description.id = "description" + d;

    //the "description" div is a child element of the "headshot" div
    headshot.appendChild(description);

    //I'm also adding a class to the description div called "descrition-invisible" which, in the CSS style section sets the opacity to 0, making the div invisible.
    description.classList.add("description-invisible");

    var name = document.createElement("div");
    document.getElementById("headshot" + i).appendChild(name);
    name.classList.add("name");
    name.id = "name" + i;

    //here I'm adding an event listener so that when someone clicks on the on the "name" div at the bottom of the headshot, a class is added called "description-apparent." In this class, there is an animation and the animation, over time, changes the opacity of the description div from 0 to 1. 
    name.addEventListener("click", function() {
        console.log("hi");
        description.classList.add("description-apparent");
    })
        description.classList.remove("description-invisible")



//Here, I'm adding another event listener which listens for the animation which changes the opacity to end. When the animation ends, the "description-apparent" class is removed and the div becomes transparent again because I added the "description-invisible" class again, a class via which the opacity is set to 0.

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })
    description.classList.add("description-invisible")

}




for (i = 0; i < 38; i++) { makeHeadshot(i) };




document.getElementById('name0').innerText = "Molly";
// var butterfly = document.createElement('div');




document.getElementById('description0').innerHTML = "Olivia Ho is a 16 year old woman who enjoys crocheting, tea, and books. She can't wait to be a " + "<u>" + "real" + "</u>" + " old woman.";

document.getElementById('name1').innerText = "Cloe";
document.getElementById('description1').innerHTML = "'No matter where you go, there you are.'" + "<br>" + "— Buckaroo Banzai";




document.getElementById('name2').innerText = "Molly Z.";
document.getElementById('description2').innerHTML = "Molly is 15 and a sophmore at HTH. She enjoys playing music and doesn't talk about anything other than her dog.";

document.getElementById('name3').innerText = "Tessa";

document.getElementById('description3').innerHTML = "Tessa Felice; all things nature, love you";

document.getElementById('name4').innerText = "Taylor";
document.getElementById('description4').innerHTML = "full-time coffee enthusiast";

document.getElementById('name5').innerText = "Shakara";

// var headshot5 = document.getElementById('headshot5');
// var heart = document.createElement('div');
// heart.id="heart"
// headshot5.appendChild(heart);

// headshot5.addEventListener('mouseenter', function() {
//     heart.style.opacity = "1";

// })
// headshot5.addEventListener('mouseout', function() {
//     heart.style.opacity = "0";
// })

document.getElementById('name6').innerText = "Isabella";
document.getElementById('description6').innerHTML = "I aspire to be Michelle Obama.";

document.getElementById('name7').innerText = "Kieran";
document.getElementById('description7').innerHTML = "My name is Kieran and I am a student at HTH.";

document.getElementById('name8').innerText = "Avery";
document.getElementById('description8').innerHTML = "I sold my soul to Azazoth Blind Idiot God of the Outer Rim to be able to hug as good as I do.";

document.getElementById('name9').innerText = "Penelope";
document.getElementById('description9').innerHTML = "Fav food: Mashed Potatoes" + "<br>" + "Fav animal: Penguin, b/c Gwenn is my middle name and pen-gwenn ha" + "<br>" + "Fav color: sea foam green" + "<br>" + "Star sign: Pisces" + "<br>" + "These are all extremely important by the way";

document.getElementById('name10').innerText = "Molly J.";
document.getElementById('description10').innerHTML = "Grateful to be listening, laughing, and making this podcast with the rest of these people.";

document.getElementById('name11').innerText = "Ashlen";




document.getElementById('description11').innerHTML = "Ashlen is a Queer, latinX millenial who spends free time psychoanalyzing her friends & crushing her fitness goals.";

document.getElementById('name12').innerText = "Riley";
document.getElementById('description12').innerHTML = "Be happy with what you have. Be excited about what you want. 😂";
document.getElementById('name13').innerText = "Jireh";
document.getElementById('description13').innerHTML = "The world is yours" + "<br>" + "— Tony Montana, Scarface";

document.getElementById('name14').innerText = "Harlan";
document.getElementById('description14').innerHTML = "HARLAN [he/him]" + "<br>" + "AGE: UNKNOWN" + "<br>" + "BLOOD TYPE: UNKNOWN" + "<br>" + "Do I even have blood? Who Knows;).";

document.getElementById('name15').innerText = "Shreena";
document.getElementById('description15').innerHTML = "Shreena is a charismatic high schooler who loves to put a smile on everyone's face. ❤️" + "<br>" + "'Be a rainbow in someone elses cloud.'" + "<br>" + "—Maya Angelou";

document.getElementById('name16').innerText = "Katelynn";
document.getElementById('description16').innerHTML = "Life is a journey to be experienced, not a problem to be solved." + "<br>" + "— Winnie the Pooh";

document.getElementById('name17').innerText = "Sailor";
document.getElementById('description17').innerHTML = "A picture may be worth 1000 words, but 1000 words doesn't even begin to tell the whole story.";

document.getElementById('name18').innerText = "James";
document.getElementById('description18').innerHTML = "Age: 15.5" + "<br>" + "Fav color: Red" + "<br>" + "Fav #: 11" + "<br>" + "Fav animal: guinea pig" + "<br>" + "Fav food: Lumpia & tempura" + "<br>" + "Hobbies: video games";
var ding = document.getElementById('ding');
headshot18.addEventListener('mouseenter', function() {
    ding.play()
})

document.getElementById('name19').innerText = "Sasha";
document.getElementById('description19').innerHTML = "When one tugs at a single thing in nature, he finds it attached to the rest of the world. —John Muir";

document.getElementById('name20').innerText = "Christian";
document.getElementById('description20').innerHTML = "Hello my name is Christian and I enjoy hanging out with friends. I also like to make videos of my life.";

document.getElementById('name21').innerText = "Jackson";

document.getElementById('name22').innerText = "Hayden";
document.getElementById('description22').innerHTML = "'Keep walking.'";

document.getElementById('name23').innerText = "Hannah";
document.getElementById('description23').innerHTML = "your only limit is you";

document.getElementById('name24').innerText = "Chloe";
document.getElementById('description24').innerHTML = "I've got to make like a banana and split.";

document.getElementById('name25').innerText = "Aly";
document.getElementById('description25').innerHTML = "";

document.getElementById('name26').innerText = "Edgar";
document.getElementById('description26').innerHTML = "imagine a world like that";

document.getElementById('name27').innerText = "Emmalyhn";
document.getElementById('description27').innerHTML = "";

document.getElementById('name28').innerText = "Janea";
document.getElementById('description28').innerHTML = "How to get your hair to look like that??!!!!" + "<br>" + "...Water";
headshot28.addEventListener("mouseenter", function() { headshot28.classList.add("ThreePhotos") });
headshot28.addEventListener("mouseout", function() { headshot28.classList.remove("ThreePhotos") });


document.getElementById('name29').innerText = "Cami";
document.getElementById('description29').innerHTML = "How tall are you?" + "<br>" +
    "6 foot." + "<br>" +
    "How the weather up there?" + "<br>" +
    "Fine thanks." + "<br>" +
    "Why are you so tall?" + "<br>" +
    "Well there something called genes and you’ll learn the rest in bio class." +
    "<br>" +
    "Can you get that for me in the top shelf?" + "<br>" +
    "Yeah, happy to help";
document.getElementById('description29').style.fontSize = "10px";

document.getElementById('name30').innerText = "Junaid";
document.getElementById('description30').innerHTML = "'A fake with more power than the real thing is more dangerous than the real thing.'" + "<br>" +
    "-Hitagi Senjougahara, 2009";

document.getElementById('name31').innerText = "Zora";
document.getElementById('description31').innerHTML = "'Recollect your thoughts, don't get caught up in the mix. —2pac";

document.getElementById('name32').innerText = "Brandon";
document.getElementById('description32').innerHTML = "";

document.getElementById('name33').innerText = "Niah";
document.getElementById('description33').innerHTML = "I'm Niah. I'm super nice.";

document.getElementById('name34').innerText = "Keyana";
document.getElementById('description34').innerHTML = "Be careful who you trust and tell your problems to.";
headshot34.addEventListener("mouseenter", function() { headshot34.classList.add("keyanaChange") });
headshot34.addEventListener("mouseout", function() { headshot34.classList.remove("keyanaChange") });


document.getElementById('name35').innerText = "Anjaneya";
document.getElementById('description35').innerHTML = "";

document.getElementById('name36').innerText = "Antalya";
document.getElementById('description36').innerHTML = "Face your life, it's pain, it's pleasure,leave no path untaken.";

document.getElementById('name37').innerText = "Mara";
document.getElementById('description37').innerHTML = "beauty is not in the face; beauty is a light in the heart.";