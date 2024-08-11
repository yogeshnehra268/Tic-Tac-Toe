const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const button=document.querySelector(".button");
const turn=document.querySelector(".turn");

const game=document.querySelector(".game");
const play=document.querySelectorAll(".play");

let player = 1;
let chance=9;
let flag=false;

function startGame(){
    player = 1;
    chance=8;
    turn.innerHTML="<span>P1</span> Turn";
    button.style.display= 'none';
    play.forEach(function(div){
        div.innerHTML=div.id;
        div.style.pointerEvents="auto";
        div.style.opacity= "0";
    });
    flag=false;
}
    
    game.addEventListener('click',function(e) {
        if(e.target.classList.contains('play'))
        {
            if(player===1){
                e.target.innerText="\u00d7";
                e.target.style.pointerEvents="none";
                e.target.style.opacity="100";
                check();
                flag=!flag;
            }
            else if(player===2){
                e.target.innerText="\u25EF";
                e.target.style.pointerEvents="none";
                e.target.style.opacity="100";
                check();
                flag=!flag;
            }
        }
        
        })

    game.addEventListener('mouseover', function(e) {
        if(!flag){
            if(e.target.classList.contains('play'))
                {
                    if(player===1){
                        e.target.innerText="\u00d7";
                        e.target.style.opacity="100";
                    }
                    else if(player===2){
                        e.target.innerText="\u25EF";
                        e.target.style.opacity="100";
                    }
                }
        flag=!flag;
        } 
    });

    game.addEventListener('mouseout', function(e) {
        if(flag){
            if(e.target.classList.contains('play'))
                {
                    e.target.innerHTML=e.target.id;
                    e.target.style.opacity= "0";
                }
        flag=!flag;
        }
    });
    



function changePlayer(){
    if(player==1){
        player=2;
        turn.innerHTML="<span>P2</span> Turn";
    }
    else{
        player=1;
        turn.innerHTML="<span>P1</span> Turn";
    }
}

function check(){
    console.log(one.innerText);
    if(one.innerText===two.innerText && two.innerText===three.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(four.innerText===five.innerText && five.innerText===six.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(seven.innerText===eight.innerText && eight.innerText===nine.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(one.innerText===four.innerText && four.innerText===seven.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(two.innerText===five.innerText && five.innerText===eight.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(three.innerText===six.innerText && six.innerText===nine.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(one.innerText===five.innerText && five.innerText===nine.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(seven.innerText===five.innerText && five.innerText===three.innerText){
        turn.innerHTML=`<span>Player ${player}</span> has WON!!!`;
        resetIt();
    }
    else if(chance===0){
        turn.innerHTML=`It is a DRAW...`;
        resetIt();
    } else{
        chance--;
    changePlayer();
    }
    
}
function resetIt(){
    play.forEach(function(e){
        e.style.pointerEvents="none";
    })

    button.style.display="block";

}

startGame();

