// #nav-open-btn click event
function navOpen() {

    var implicitNav = document.querySelector('#implicit-nav');
    var explicitNav = document.querySelector('#explicit-nav');

    if (implicitNav.style.display === 'block') {
        implicitNav.style.display = 'none';
        explicitNav.style.display = 'block';
    } else if (implicitNav.style.display === 'none') {
        implicitNav.style.display = 'block';
        explicitNav.style.display = 'none';
    }

    // #explicit-nav 열면 main의 margin-left가 220px로 변함
    if (document.querySelector('#explicit-nav').style.display === 'block') {
        document.querySelector('main').style.marginLeft = '220px';
    }
    // #implicit-nav 열면 main의 margin-left가 72px로 변함
    else if (document.querySelector('#implicit-nav').style.display === 'block') {
        document.querySelector('main').style.marginLeft = '72px';
    }
}

// .hover-btn mouseover하면 .hover-details의 display: block
// .hover-btn mouseout하면 .hover-details의 display: none
document.querySelectorAll('.hover-btn').forEach(function(button) {
    button.addEventListener('mouseover', hoverDetailsDisplayBlockEvent);
    button.addEventListener('mouseout', hoverDetailsDisplayNoneEvent);
});
function hoverDetailsDisplayBlockEvent(event) {
    var hoverDetails = event.currentTarget.querySelector('.hover-details');
    if (hoverDetails) {
        hoverDetails.style.display = 'block';
    }
    // var hoverDetailsComputedStyle = window.getComputedStyle(hoverDetails);
    // if (hoverDetailsComputedStyle.display === 'none') {
    //     hoverDetailsComputedStyle.style.display = 'block';
    // }
}
function hoverDetailsDisplayNoneEvent(event) {
    var hoverDetails = event.currentTarget.querySelector('.hover-details');
    if (hoverDetails) {
        hoverDetails.style.display = 'none';
    }
}

// .contents-details mouseover하면 .detail-btn의 display: block
// .contents-details mouseout하면 .detail-btn의 display: none
document.querySelectorAll('.contents-details').forEach(function (div) {
    div.addEventListener('mouseover', detailBtnDisplayBlockEvent);
    div.addEventListener('mouseout', detailBtnDisplayNoneEvent);
});
function detailBtnDisplayBlockEvent(event){
    // console.log(event.currentTarget)
    var detailBtn = event.currentTarget.querySelector('.detail-btn');
    // console.log(detailBtn);
    if (detailBtn) {
        // detailBtn이 존재한다면
        console.log('true');
        detailBtn.style.display = 'block';
    }
}
function detailBtnDisplayNoneEvent(event){
    // console.log(event.currentTarget)
    var detailBtn = event.currentTarget.querySelector('.detail-btn');
    // console.log(detailBtn);
    if (detailBtn) {
        detailBtn.style.display = 'none';
    }
}

// .contents-row-item에 mouseover하면 thumbnail의 display = 'none', thumbnail-video의 display = 'block'
// .contents-row-item에 mouseout하면 thumbnail의 display = 'block', thumbnail-video의 display = 'none'
document.querySelectorAll('.contents-row-item').forEach(function (div) {
    div.addEventListener('mouseover', thumbnailDisplayNoneEvent);
    div.addEventListener('mouseover', thumbnailVideoDisplayBlockEvent);
    div.addEventListener('mouseout', thumbnailDisplayBlockEvent);
    div.addEventListener('mouseout', thumbnailVideoDisplayNoneEvent);
});
function thumbnailDisplayNoneEvent(event){
    var thumbnail = event.currentTarget.querySelector('.thumbnail');
    if (thumbnail) {
        thumbnail.style.display = 'none';
    }
}
function thumbnailVideoDisplayBlockEvent(event){
    var thumbnailVideo = event.currentTarget.querySelector('.thumbnail-video');
    if (thumbnailVideo) {
        thumbnailVideo.style.display = 'block';
    }
}
function thumbnailDisplayBlockEvent(event){
    var thumbnail = event.currentTarget.querySelector('.thumbnail');
    if (thumbnail) {
        thumbnail.style.display = 'block';
    }
}
function thumbnailVideoDisplayNoneEvent(event){
    var thumbnailVideo = event.currentTarget.querySelector('.thumbnail-video');
    if (thumbnailVideo) {
        thumbnailVideo.style.display = 'none';
    }
}