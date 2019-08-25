//below I'm adding an event listener so that when someone clicks on the on div with the class "your-name" div at the bottom of the headshot, a class is added to the *description* div called "description-apparent," and a class called "description-invisible" is removed. Because of the properties in the description-apparent class, when the div is assigned to this class, it becomes visible in the browser for 15 seconds. Because there is an animation property which, as I wrote it changes the opacity of the description div from 1 back to 0 — the divs with the description-apparent class become visible for 15s. //

// var yourName = document.getElementsByClassName("yourName");
var headshot = document.getElementsByClassName("headshot");
var description = document.getElementsByClassName("description");
// var headshot:hover = document.getElementsByClassName("headshot:hover");

function showDescription() {
    console.log(event);

    // var headshot = event.target.children;
    // for (let item of headshot) {
    //     console.log(item.id);
    //     item.style.display="block";



    var whoAmI = event.target.id;
    var containerDivChild = event.target.children;
    var containerGrandchild = event.target.lastElementChild.lastElementChild;
    var clicked;

    function f() { clicked = false }

    function t() { clicked = true }

    //if the classList of the containerChildDiv is headshot-flip, then to the child of headshot (dscription), add and remove classes)
    for (let item of containerDivChild) {
        item.classList.add("headshot-flip");
        setTimeout(function() {
            // item.id.remove()
            item.classList.remove("headshot")

        }, 500);
        console.log(item.id);
        console.log(containerGrandchild);


        containerGrandchild.classList.remove("description-invisible");
        containerGrandchild.classList.add("description-apparent");

containerGrandchild.addEventListener("mouseenter", function(){})



        // setTimeout(
        //     function() {
        //         console.log(event.target.lastElementChild.lastElementChild);
        //         // event.target.lastElementChild.lastElementChild.classList.remove("description-invisible")
        //     }, 200)
    };

};




// if (clicked == true) {
//     console.log(clicked);

//     //how do I refer to the child of the headshot div?//


// for (let item of containerGrandchild) {
//     setTimeout(
//         function() {
//             item.classList.add("description-apparent");
//             item.classList.remove("description-invisible")
//         }, 200);

//  }


// };
//below I'm adding an event listener so that when the animation ends, the div is re-assigned the class of"description-invisible" and the "description-apparent" class is removed//

for (let item of description) {
    item.addEventListener("animationend",
        function() {
            item.classList.remove("description-apparent");
            item.classList.add("description-invisible");
            console.log("ended!");

        })
};

for (let item of headshot) {
    item.addEventListener("animationend", function() {
        item.classList.remove("headshot-flip");
        item.classList.add("headshot");
    })
};

//for mollyj1 card specific code//

var badGuy = document.getElementById("bad-guy");

var molly = document.getElementById("mollyj-headshot1");
molly.addEventListener("mouseenter", function() {
    badGuy.play();

})

molly.addEventListener("mouseout", function() {
    badGuy.pause();

})

/////////Code for audio to play///////////
 
// browser.runtime.onMessage.addListener(message => {
//   console.log("background: onMessage", message);

//   // Add this line:
//   return Promise.resolve("Dummy response to keep the console quiet");
// });