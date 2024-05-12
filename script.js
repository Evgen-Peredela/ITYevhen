function WelcomeAnimSignIn(){
    document.getElementById('welcome').style = "animation: welcome 1s ease-out forwards; animation-play-state: running;"
    document.getElementById('logIn').style.display = 'block'
}

function WelcomeAnimSignUp(){
    document.getElementById('welcome').style = "animation: welcome 1s ease-out forwards; animation-play-state: running;"
    document.getElementById('logUp').style.display = 'block'
}

function wstecz(){
    document.getElementById('welcome').style = "animation: welcomeBack 0.7s ease-out forwards alternate; animation-play-state: running;"
    document.getElementById('logUp').style.display = 'none'
    document.getElementById('logIn').style.display = 'none'
}