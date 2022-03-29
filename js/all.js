function key(event){
    var x = event.key;
    if(x === "w"){
        w();
    }
    var x = event.key;
    if(x === "a"){
        a();
    }
    var x = event.key;
    if(x === "s"){
        s();
    }
    var x = event.key;
    if(x === "d"){
        d();
    }
    var x = event.key;
    if(x === "j"){
        j();
    }
    var x = event.key;
    if(x === "k"){
        k();
    }
    var x = event.key;
    if(x === "l"){
        l();
    }
}
function w(){
    var audio = new Audio('https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/tom-1.mp3?raw=true');
    audio.currentTime=0;
    audio.play();
}
function a(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/tom-2.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}
function s(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/tom-3.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}
function d(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/tom-4.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}
function j(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/snare.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}
function k(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/crash.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}
function l(){
    var audio = new Audio("https://github.com/Piyush-Chetwani/Drum-Kit/blob/main/sounds/kick-bass.mp3?raw=true"); 
    audio.currentTime=0;
    audio.play();
}