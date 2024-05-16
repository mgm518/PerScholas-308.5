const btns = document.getElementsByClassName("btn");
const btn5 = btns[4];
function rotate() {
    currentPos.unshift(currentPos.pop());
    for (let i = 0; i < ids.length; i++) {
        btns[ids[i]].innerHTML = currentPos[i];
    }
};

btn5.addEventListener("click", rotate);

let currentPos = [1,2,3,6,9,8,7,4];
const ids = [0,1,2,5,8,7,6,3];

