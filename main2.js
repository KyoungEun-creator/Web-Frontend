// 난수 생성
var randomList = [];

randomList[0] = Math.floor(Math.random() * 10);   // 0~9
do {
    randomList[1] = Math.floor(Math.random() * 10)
} while (randomList[0] === randomList[1])
do {
    randomList[2] = Math.floor(Math.random() * 10)
} while (randomList[0] === randomList[2] || randomList[1] === randomList[2])

console.log(randomList)

// 유저가 누른 숫자 배열
var inputNumList = [];

document.querySelectorAll('.num-btns').forEach(function (button) {
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    var clickedBtn = event.target;
    var clickedNum = clickedBtn.innerHTML;

    if (inputNumList.length >= 3) {
        alert('더 이상 값을 추가할 수 없습니다.');
    }
    else if (inputNumList.includes(clickedNum)) {
        alert('중복된 숫자입니다. 다른 숫자를 선택해주세요.')
        inputNumList.pop(clickedNum);
    }

    inputNumList.push(clickedNum);

    document.querySelector('#num' + inputNumList.length).innerHTML = clickedNum;
    console.log(inputNumList);
}

// restart 버튼
document.querySelector('#restart-btn').addEventListener('click', handleRestart);

function handleRestart() {
    inputNumList = [];
    console.log(inputNumList);
    document.querySelector('#num1').innerHTML = '?'
    document.querySelector('#num2').innerHTML = '?'
    document.querySelector('#num3').innerHTML = '?'
}

// delete 버튼
document.querySelector('#delete-btn').addEventListener('click', handleDelete);

function handleDelete() {
    inputNumList.pop();
    console.log(inputNumList);
    if (inputNumList.length == 2) {
        document.querySelector('#num3').innerHTML = '?'
    } else if (inputNumList.length == 1) {
        document.querySelector('#num2').innerHTML = '?'
    } else if (inputNumList.length == 0) {
        document.querySelector('#num1').innerHTML = '?'
    }
}


for (var s = 0; s < 3; s++) {
    if (inputNumList[s] === randomList[s]) {
        s++
    }
}