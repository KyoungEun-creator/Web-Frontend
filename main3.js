// 변수 생성
const imgContainer = document.querySelector('#img_container');
const finishTxt = document.querySelector('#finish_txt');
const hintBtn = document.querySelector('#hint_btn');
const shuffleBtn = document.querySelector('#shuffle_btn');
const startBtn = document.querySelector('#start_btn');
const puzzleSize = 16;


// 퍼즐들을 담을 배열 생성
let puzzles = [];
// 드래그된 퍼즐의 정보 담을 객체 생성
let draggedPuzzle = {
    element: null,
    class: null,
    index: null
}


puzzleStart();

// 게임 시작 
function puzzleStart() {
    imgContainer.innerHTML="";

    // 정답 위치를 가진 퍼즐들의 배열 생성
    puzzles = createPuzzle();
    // console.log(puzzles);

    // imgContainer(<ul>) 안에 정답위치의 퍼즐(<li>) 하나씩 넣음
    puzzles.forEach( puzzle => imgContainer.appendChild(puzzle) );

    // 2초 후에 imgContainer(<ul>) 안에 셔플된 퍼즐(<li>) 하나씩 넣음
    setTimeout(() => {
        // appendChild 또 하면 안 되므로 초기화
        imgContainer.innerHTML="";
        shufflePuzzle(puzzles).forEach( puzzle => imgContainer.appendChild(puzzle) );
    }, 2000);

}


// 퍼즐(<li>) 생성 
function createPuzzle() {
    const tempArray = [];

    Array(puzzleSize).fill().forEach( (v, i) => {
        const li = document.createElement("li");
        li.setAttribute('img-idx', i)
        li.classList.add(`img${i}`)     // css 클래스 이름을 따르기 위함(이미지 위치 지정이 되기 때문) 
        // console.log(li)
        li.setAttribute('draggable', 'true');   // drag 이벤트 가능하도록 함
        tempArray.push(li);
    } );
    return tempArray;
}


// 퍼즐들의 배열 섞어줌
function shufflePuzzle(array) {
    let index = array.length - 1;

    while (index > 0) {
        const randomIdx = Math.floor(Math.random()*array.length);
        [array[index], array[randomIdx]] = [array[randomIdx], array[index]]     // 두 위치를 switch 하기 위함
        index--;
    }
    return array;   // shufflePuzzle 함수를 호출하면 뒤섞인 배열이 생성됨
}


// 게임 종료(성공) 여부 파악
function checkStatus() {
    const currentList = [...imgContainer.children];

    // 정답 위치(img-idx 속성값)와 현위치(index)가 매칭이 안 된 퍼즐들의 리스트
    const unmatchedList = currentList.filter( (child, index)=> {
        // Number 통해 문자열을 숫자로 변환시켜줌
        return Number(child.getAttribute('img-idx')) !== index;
    } );
    // console.log(unmatchedList);

    // 매칭 안 된 퍼즐이 더이상 없을 때 게임 종료
    if (unmatchedList.length === 0) {
        finishTxt.style.display = 'block';
    }
}


// 드래그 드랍 이벤트
imgContainer.addEventListener('dragstart', function(e) {
    // console.log(e);     // 드래그 된 요소의 정답 속성들 알 수 있음
    const target = e.target;

    draggedPuzzle.element = target;
    // console.log({target})
    draggedPuzzle.class = target.className;
    draggedPuzzle.index = [...target.parentNode.children].indexOf(target);
    // console.log(draggedPuzzleInfo.index)
})
imgContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
})
imgContainer.addEventListener('drop', function(e) {
    const target = e.target;

    // 서로 다를 때
    if (draggedPuzzle.class !== target.className) {

        let originPlace;
        let isLast = false;
    
        // 마지막 퍼즐이 아니라면
        if (draggedPuzzle.element.nextSibling) {
            originPlace = draggedPuzzle.element.nextSibling;
        }
        // 인덱스가 14인 마지막 퍼즐이라면
        else {
            isLast = true;
            originPlace = draggedPuzzle.element.previousSibling;
        }

        const droppedPuzzleIndex = [...target.parentNode.children].indexOf(target);

        // 드래그한 요소가 드랍된 요소보다 뒤에 있었으면 (우->좌, 하->상)
        if (draggedPuzzle.index > droppedPuzzleIndex) {
            target.before(draggedPuzzle.element);
        } 
        // 드래그한 요소가 드랍된 요소보다 앞에 있었으면 (좌->우, 상->하)
        else {
            target.after(draggedPuzzle.element);
        }
        // 인덱스가 14인 마지막 퍼즐이라면
        if (isLast) {
            originPlace.after(target);
        } 
        // 마지막 퍼즐이 아니라면 
        else {
            originPlace.before(target);
        }
    }
    checkStatus();
})


// 힌트 버튼 누르면 정답 이미지 공개, 3초 후 다시 사라짐
hintBtn.addEventListener('click', function() {
    const hintImg = document.querySelector('#hint_img');
    hintImg.style.display = 'block';
    setTimeout(() => {
        hintImg.style.display = 'none';
    }, 3000);

})


// 셔플 버튼 누르면 이미지 다시 섞김
shuffleBtn.addEventListener('click', function (){
    imgContainer.innerHTML="";
    shufflePuzzle(puzzles).forEach( puzzle => imgContainer.appendChild(puzzle) );
})