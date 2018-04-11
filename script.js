function brakeChain(){
    let chain = document.getElementById('chain');
    chain.innerHTML ="&#xf0c1;";

    setTimeout(function(){
        chain.innerHTML ="&#xf127;";
    }, 1000);
}

brakeChain();

setInterval(brakeChain, 2000);

function moveArrow(){
    let arrow = document.getElementById('arrow');
    arrow.innerHTML = "&#xf060;";

    setTimeout(function(){
        arrow.innerHTML ="&#xf062;";
    },1000);
    setTimeout(function(){
        arrow.innerHTML ="&#xf061;";
    },2000);
    setTimeout(function(){
        arrow.innerHTML ="&#xf063;";
    },3000);
}

moveArrow();

setInterval(moveArrow, 4000);