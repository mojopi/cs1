

//this is the code for ciara's wobble diagonal animation//
// var ciarab = document.getElementById('ciarab');

//     ciarab.addEventListener("click", function(){
//         // ciarab.style.animationName ="wobble-diagonal"

//         // console.log(box6.style);

//     })

    // var leftSide = eval(ciarab.style.left);
    // var rightSide = eval(ciarab.style.left + 100);


    // function () {
    //     ciarab.x = ci
    // }

//below I'm adding an event listener so that when someone clicks on the on div with the class "your-name" div at the bottom of the headshot, a class is added to the *description* div called "description-apparent," and a class called "description-invisible" is removed. Because of the properties in the description-apparent class, when the div is assigned to this class, it becomes visible in the browser for 15 seconds. Because there is an animation property which, as I wrote it changes the opacity of the description div from 1 back to 0 — the divs with the description-apparent class become visible for 15s. //


var headshot = document.getElementsByClassName("headshot");
var description = document.getElementsByClassName("description");

//this is the function I call in "onclick" which is referred to in the HTML//
function showDescription() {
    console.log("hi!");
    console.log(event);
    var whoAmI = event.target.id;
    var containerDivChild = event.target.children;
    var containerGrandchild = event.target.lastElementChild.lastElementChild;
   
    for (let item of containerDivChild) {
        item.classList.remove(item.id+"-effect");
        item.classList.add("headshot-flip");
        console.log(item.id);       
        setTimeout(function() {
            item.classList.remove("headshot")
        }, 500);
        containerGrandchild.classList.remove("description-invisible");
        containerGrandchild.classList.add("description-apparent");

    };


};




//below I'm adding an event listener so that when the animation ends, the div is re-assigned the class of "description-invisible" and the "description-apparent" class is removed//

for (let item of description) {
    item.addEventListener("animationend",
        function() {
            item.classList.remove("description-apparent");
            item.classList.add("description-invisible");
            console.log("ended!");

        })
};

for (let item of headshot) {
     item.classList.add(item.id+"-effect");
    item.addEventListener("animationend", function() {
        item.classList.remove("headshot-flip");
        item.classList.add("headshot");
    })
};

//for mollyj card specific code//

var badGuy = document.getElementById("bad-guy");

var molly = document.getElementById("mollyj");
molly.addEventListener("mouseenter", function() {
    badGuy.play();

})

molly.addEventListener("mouseout", function() {
    badGuy.pause();

})


/////////copied code for audio to play on promise — need to integrate///////////



// browser.runtime.onMessage.addListener(message => {
//   console.log("background: onMessage", message);

//   // Add this line:
//   return Promise.resolve("Dummy response to keep the console quiet");
// });