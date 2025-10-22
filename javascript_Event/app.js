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

// function keyPress() {
//   document.getElementById("text").innerHTML = "Key Press";
// }

// function onLoad() {
//     alert("Testing JavaScript onLoad")
//   document.getElementById("text").innerHTML = 'Website Loaded';
// }

function checkFields() {
    const inputs = document.querySelectorAll(
        '#form input[type="text"], #form input[type="email"], #form textarea'
    );
    let hasValue = false;

    inputs.forEach((input) => {
        if (input.value.trim() !== "") {
            hasValue = true;
        }
    });

    document.getElementById("text").innerHTML = hasValue ? "Key Press" : "";
}
function windowResize() {
    document.getElementById("textarea").style.height = "100px";
}

function OnScroll() {
    document.getElementById("text").innerHTML = "Scrolling";
}

document.getElementById("btn").onclick = function () {
    document.getElementById("text").innerHTML = "Subcribed";
    document.getElementById("btn").innerHTML = "Subcribed";
};

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("btn").innerHTML = "Saddam";
});

// document.getElementById("ul").addEventListener("click", function (e) {
//     document.getElementById("btn").innerHTML = 'all ok'
// },
// true
// );

document.getElementById("li").addEventListener(
    "click",
    function (e) {
        document.getElementById("textarea").innerHTML = "all done";
    },
    true
);
