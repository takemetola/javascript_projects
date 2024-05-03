let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        e.target.classList.add("dragging");
    });

    list.addEventListener("dragend", function(e) {
        e.target.classList.remove("dragging");
    });
}

right.addEventListener("dragover", function(e) {
    e.preventDefault();
});

right.addEventListener("drop", function(e) {
    let selected = document.querySelector(".list.dragging");
    if (selected) {
        right.appendChild(selected);
    }
});

