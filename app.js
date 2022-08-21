var getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
    scrollpoint();
}

function scrollpoint(){
    // console.log('working');

    // scrolltop * 100 (projectHeight - currentHeight)
    var getscrolltop = document.documentElement.scrollTop;

    var getscrollheight = document.documentElement.scrollHeight;

    var getclientheight = document.documentElement.clientHeight;

    var calcheight = getscrollheight - getclientheight;


    // var getfinal = Math.round((getscrolltop * 100) / calcheight);
    var getfinal = Math.round((getscrolltop / calcheight) * 100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    window.print();
}