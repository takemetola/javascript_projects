let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(let list of lists){
    list.addEventListener("dragstart", e => {
        let selected = e.target;
        e.dataTransfer.setData('text/plain', ''); // Required for Firefox compatibility

        rightBox.addEventListener("dragover", dragOver);
        rightBox.addEventListener("drop", dropRight);
        
        leftBox.addEventListener("dragover", dragOver);
        leftBox.addEventListener("drop", dropLeft);
    });
}

function dragOver(e) {
    e.preventDefault();
}

function dropRight(e) {
    e.preventDefault();
    let selected = document.querySelector('.list.dragging');
    rightBox.appendChild(selected);
    removeListeners();
}

function dropLeft(e) {
    e.preventDefault();
    let selected = document.querySelector('.list.dragging');
    leftBox.appendChild(selected);
    removeListeners();
}

function removeListeners() {
    rightBox.removeEventListener("dragover", dragOver);
    rightBox.removeEventListener("drop", dropRight);
    leftBox.removeEventListener("dragover", dragOver);
    leftBox.removeEventListener("drop", dropLeft);
}
