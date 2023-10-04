// #explicit-nav 열면 main의 margin-left가 220px로 변함
if (document.querySelector('#explicit-nav').style.display == 'block') {
    document.querySelector('main').style.marginLeft = '220px';
}
// #implicit-nav 열면 main의 margin-left가 72px로 변함
else if (document.querySelector('#implicit-nav').style.display == 'block') {
    document.querySelector('main').style.marginLeft = '72px';
}

// #nav-open-btn click event
function navOpen() {

    var implicitNav = document.querySelector('#implicit-nav');
    var explicitNav = document.querySelector('#explicit-nav');

    if (implicitNav.style.display == 'block') {
        implicitNav.style.display = 'none';
        explicitNav.style.display = 'block';
    } else if (implicitNav.style.display == 'none') {
        implicitNav.style.display = 'block';
        explicitNav.style.display = 'none';
    }
}

// header hover event
document.querySelector('#magnifyingGlass-btn').addEventListener('mouseover', function () {
    document.querySelector('#magnifyingGlass-hover').style.display = 'block';
});
document.querySelector('#magnifyingGlass-btn').addEventListener('mouseout', function () {
    document.querySelector('#magnifyingGlass-hover').style.display = 'none';
})
document.querySelector('#microphone-btn').addEventListener('mouseover', function () {
    document.querySelector('#microphone-hover').style.display = 'block';
});
document.querySelector('#microphone-btn').addEventListener('mouseout', function () {
    document.querySelector('#microphone-hover').style.display = 'none';
})
document.querySelector('#upload-btn').addEventListener('mouseover', function () {
    document.querySelector('#upload-hover').style.display = 'block';
});
document.querySelector('#upload-btn').addEventListener('mouseout', function () {
    document.querySelector('#upload-hover').style.display = 'none';
})
document.querySelector('#alarm-btn').addEventListener('mouseover', function () {
    document.querySelector('#alarm-hover').style.display = 'block';
});
document.querySelector('#alarm-btn').addEventListener('mouseout', function () {
    document.querySelector('#alarm-hover').style.display = 'none';
})

// .contents-details hover하면 .detail-btn의 display: block
document.querySelector('.a').addEventListener('mouseover', function () {
    document.querySelector('.a-detail').style.display = 'block'
});
document.querySelector('.a').addEventListener('mouseout', function () {
    document.querySelector('.a-detail').style.display = 'none'
});
document.querySelector('.b').addEventListener('mouseover', function () {
    document.querySelector('.b-detail').style.display = 'block'
});
document.querySelector('.b').addEventListener('mouseout', function () {
    document.querySelector('.b-detail').style.display = 'none'
});
document.querySelector('.c').addEventListener('mouseover', function () {
    document.querySelector('.c-detail').style.display = 'block'
});
document.querySelector('.c').addEventListener('mouseout', function () {
    document.querySelector('.c-detail').style.display = 'none'
});
document.querySelector('.d').addEventListener('mouseover', function () {
    document.querySelector('.d-detail').style.display = 'block'
});
document.querySelector('.d').addEventListener('mouseout', function () {
    document.querySelector('.d-detail').style.display = 'none'
});
document.querySelector('.e').addEventListener('mouseover', function () {
    document.querySelector('.e-detail').style.display = 'block'
});
document.querySelector('.e').addEventListener('mouseout', function () {
    document.querySelector('.e-detail').style.display = 'none'
});
document.querySelector('.f').addEventListener('mouseover', function () {
    document.querySelector('.f-detail').style.display = 'block'
});
document.querySelector('.f').addEventListener('mouseout', function () {
    document.querySelector('.f-detail').style.display = 'none'
});
document.querySelector('.g').addEventListener('mouseover', function () {
    document.querySelector('.g-detail').style.display = 'block'
});
document.querySelector('.g').addEventListener('mouseout', function () {
    document.querySelector('.g-detail').style.display = 'none'
});
document.querySelector('.h').addEventListener('mouseover', function () {
    document.querySelector('.h-detail').style.display = 'block'
});
document.querySelector('.h').addEventListener('mouseout', function () {
    document.querySelector('.h-detail').style.display = 'none'
});


// .contents-row-item에 mouseover하면 해당 비디오 자동재생, 음소거
document.querySelector('#a-content').addEventListener('mouseover', function () {
    document.querySelector('#a-video').style.display = 'block'
    document.querySelector('#a-thumbnail').style.display = 'none'
});
document.querySelector('#a-content').addEventListener('mouseout', function () {
    document.querySelector('#a-video').style.display = 'none'
    document.querySelector('#a-thumbnail').style.display = 'block'
});
document.querySelector('#b-content').addEventListener('mouseover', function () {
    document.querySelector('#b-video').style.display = 'block'
    document.querySelector('#b-thumbnail').style.display = 'none'
});
document.querySelector('#b-content').addEventListener('mouseout', function () {
    document.querySelector('#b-video').style.display = 'none'
    document.querySelector('#b-thumbnail').style.display = 'block'
});
document.querySelector('#c-content').addEventListener('mouseover', function () {
    document.querySelector('#c-video').style.display = 'block'
    document.querySelector('#c-thumbnail').style.display = 'none'
});
document.querySelector('#c-content').addEventListener('mouseout', function () {
    document.querySelector('#c-video').style.display = 'none'
    document.querySelector('#c-thumbnail').style.display = 'block'
});
document.querySelector('#d-content').addEventListener('mouseover', function () {
    document.querySelector('#d-video').style.display = 'block'
    document.querySelector('#d-thumbnail').style.display = 'none'
});
document.querySelector('#d-content').addEventListener('mouseout', function () {
    document.querySelector('#d-video').style.display = 'none'
    document.querySelector('#d-thumbnail').style.display = 'block'
});
document.querySelector('#e-content').addEventListener('mouseover', function () {
    document.querySelector('#e-video').style.display = 'block'
    document.querySelector('#e-thumbnail').style.display = 'none'
});
document.querySelector('#e-content').addEventListener('mouseout', function () {
    document.querySelector('#e-video').style.display = 'none'
    document.querySelector('#e-thumbnail').style.display = 'block'
});
document.querySelector('#f-content').addEventListener('mouseover', function () {
    document.querySelector('#f-video').style.display = 'block'
    document.querySelector('#f-thumbnail').style.display = 'none'
});
document.querySelector('#f-content').addEventListener('mouseout', function () {
    document.querySelector('#f-video').style.display = 'none'
    document.querySelector('#f-thumbnail').style.display = 'block'
});
document.querySelector('#g-content').addEventListener('mouseover', function () {
    document.querySelector('#g-video').style.display = 'block'
    document.querySelector('#g-thumbnail').style.display = 'none'
});
document.querySelector('#g-content').addEventListener('mouseout', function () {
    document.querySelector('#g-video').style.display = 'none'
    document.querySelector('#g-thumbnail').style.display = 'block'
});
document.querySelector('#h-content').addEventListener('mouseover', function () {
    document.querySelector('#h-video').style.display = 'block'
    document.querySelector('#h-thumbnail').style.display = 'none'
});
document.querySelector('#h-content').addEventListener('mouseout', function () {
    document.querySelector('#h-video').style.display = 'none'
    document.querySelector('#h-thumbnail').style.display = 'block'
});
