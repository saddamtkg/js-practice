//JavaScript here

function subscribe() {
  document.getElementById("text").innerHTML = "Subcribed";
  document.getElementById("btn").innerHTML = "Subcribed";
  document.getElementById("btn").style.backgroundColor = "#262626";
}

function like() {
  document.getElementById("like").innerHTML =
    '<i class="fa-solid fa-thumbs-up"></i> liked';
}

function keyPress() {
  document.getElementById("text").innerHTML = "Key Press";
}

// function onLoad() {
//     alert("Testing JavaScript onLoad")
//   document.getElementById("text").innerHTML = 'Website Loaded';
// }


function windowResize() {
  document.getElementById("textarea").style.height = '100px';
}


function OnScroll() {
  document.getElementById("text").innerHTML = 'Scrolling';
}


document.getElementById("btn").onclick = function () {
    document.getElementById("text").innerHTML = 'Subcribed';
    document.getElementById("btn").innerHTML = 'Subcribed';
}


document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("btn").innerHTML = 'Saddam'
})


document.getElementById("ul").addEventListener("click", function (e) {
    console.log("ul run");
},
true
);


document.getElementById("li").addEventListener("click", function (e) {
    console.log("li run");
},
true
);
