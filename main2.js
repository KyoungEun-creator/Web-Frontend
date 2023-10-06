// 난수 생성
// 그냥 while문으로 한번 처리해보기!!
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
    button.addEventListener('click', handleNumClickEvent);
});

function handleNumClickEvent(event) {
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

    // 확인 버튼을 누르지 않는다면 길이가 3일 때 check 로직 실행하도록 이 부분에 조건 추가
    
}

// restart 버튼
document.querySelector('#restart-btn').addEventListener('click', handleRestartEvent);

function handleRestartEvent() {
    inputNumList = [];
    console.log(inputNumList);
    document.querySelector('#num1').innerHTML = '?'
    document.querySelector('#num2').innerHTML = '?'
    document.querySelector('#num3').innerHTML = '?'
    window.location.reload();
}

// delete 버튼
document.querySelector('#delete-btn').addEventListener('click', handleDeleteEvent);

function handleDeleteEvent() {
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

        // for문 두개 이용, 컴퓨터(a)랑 유저(b)의 각자 위치를 하나씩 
        for (var a = 0; a < 3; a++) {
            if (parseInt(inputNumList[a]) === randomList[a]) {
                strike++;
            } else {
                for (var b = 0; b < 3; b++) {
                    console.log(a,b)
                    if (a != b && parseInt(inputNumList[a]) === randomList[b]) {
                        ball++;
                    } else if ((a != b) && (parseInt(inputNumList[b]) === randomList[a])) {
                        ball++;
                    }
                }
            }
        }

        var tmp = document.createElement('button');

        if (strike === 3) {
            document.querySelector('#result').innerHTML = 'You WIN!!';
        }
        else if (strike === 0 && ball === 0) {
            tmp.innerText = '3O'
            tmp.setAttribute("class", "events");
            tmp.setAttribute("id", "out-btn");
            document.querySelector('#result-board').appendChild(tmp);
        }
        else if (0 < strike < 3) {
            tmp.innerText = `${strike}S`
            tmp.setAttribute("class", "events");
            tmp.setAttribute("id", "strike-btn");
            document.querySelector('#result-board').appendChild(tmp);
        }
        else if (0 < ball <= 3) {
            tmp.innerText = `${ball}B`
            tmp.setAttribute("class","events");
            tmp.setAttribute("id","ball-btn");
            document.querySelector('#result-board').appendChild(tmp);
        }
        
        inputNumList = [];
        document.querySelector('#num1').innerHTML = '?'
        document.querySelector('#num2').innerHTML = '?'
        document.querySelector('#num3').innerHTML = '?'
    } 

    else {
        document.querySelector('#result').innerHTML = '숫자 세 개를 입력하세요!';
        inputNumList = [];
        document.querySelector('#num1').innerHTML = '?'
        document.querySelector('#num2').innerHTML = '?'
        document.querySelector('#num3').innerHTML = '?'
    }

}

document.querySelector('#confirm-btn').addEventListener('click', gameBegin);

