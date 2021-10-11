// for(var i=0; i<document.querySelectorAll(".drum").length; i++){
//     document.addEventListener("click",function(){
//         var audio=new Audio("sounds/crash.mp3");
//         audio.play();
//     });
// }

// for(var i=0; i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         this.style.color="white";
//     });
// }

//Detecting Button Press

var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var exp=this.innerHTML;
        makeSound(exp);
        anim(exp);
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    anim(event.key);
});

function makeSound(event){
    switch (event) {
        case "w":
            var kick=new Audio("kick-bass.mp3");
            kick.play();
            break;
        case "a":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;        
        case "d":
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
            break;        
        case "j":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;  
        case "k":
            var snare=new Audio("snare.mp3");
            snare.play();
            break;                   
        case "l":
            var crash=new Audio("crash.mp3");
            crash.play();
            break;                    
        default:
            console.log(exp);
            break;
    }
}

//Animations

function anim(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}