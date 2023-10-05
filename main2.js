// 난수 생성
var randomList = [];

randomList[0] = Math.floor(Math.random() * 10);   // 0~9
do {
    randomList[1] = Math.floor(Math.random() * 10)
} while (randomList[0] === randomList[1]);
do {
    randomList[2] = Math.floor(Math.random() * 10)
} while (randomList[0] === randomList[2] || randomList[1] === randomList[2]);

console.log(randomList);

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

// 자리와 숫자가 모두 일치하면 strike
// 자리는 다르면서 숫자는 일치하면 ball
// 모두 다르면 out

var strike = 0;
var ball = 0;

function gameBegin() {
    // 아무것도 입력하지 않은 상태에서 '확인'버튼 눌렀을 때 3OUT 나오는 것 방지 위함
    if (inputNumList.length === 3) {
        // 매 게임마다 리셋 위함
        strike = 0;
        ball = 0;

        for (var a = 0; a < 3; a++) {
            if (parseInt(inputNumList[a]) === randomList[a]) {
                strike++;
            } else {
                for (var b = 0; b < 3; b++) {
                    if (a != b && parseInt(inputNumList[a]) === randomList[b]) {
                        ball++;
                    } else if ((a != b) && (parseInt(inputNumList[b]) === randomList[a])) {
                        ball++;
                    }
                }
            }
            if (strike === 3) {
                document.querySelector('#result').innerHTML = 'You WIN!!';
            } else if (strike === 0 && ball === 0) {
                document.querySelector('#result').innerHTML = '3 OUT';

            } else {
                document.querySelector('#result').innerHTML = strike + " STRIKE " + ball + " BALL";

            }
            inputNumList = [];
            document.querySelector('#num1').innerHTML = '?'
            document.querySelector('#num2').innerHTML = '?'
            document.querySelector('#num3').innerHTML = '?'
        }
    } else {
        document.querySelector('#result').innerHTML = '숫자 세 개를 입력하세요!';
        inputNumList = [];
        document.querySelector('#num1').innerHTML = '?'
        document.querySelector('#num2').innerHTML = '?'
        document.querySelector('#num3').innerHTML = '?'
    }

}

document.querySelector('#confirm-btn').addEventListener('click', gameBegin);

