function setTimeoutWithArrow(){
    setTimeout(()=>{
        console.log('this >>> ', this)
    }, 500)
}

const p_arrow = new setTimeoutWithArrow()

function setTimeoutWithFunc(){
    setTimeout(function(){
        console.log('this >>> ', this);
    }, 500)
}

const p_func = new setTimeoutWithFunc()