let rimshotBtn = document.querySelector(".rimshot")

let rimShotAudio = document.querySelector(".rimshot-audio")

let crashOneBtn = document.querySelector(".crashOne")

let crashOneAudio = document.querySelector(".crash-one")

let crashTwoBtn = document.querySelector(".crashTwo")

let crashTwoAudio = document.querySelector(".crash-two")

let floorBtn = document.querySelector(".floor")

let floorAudio = document.querySelector(".floor-one")

let highTomBtn = document.querySelector(".hightom")

let highTomAudio = document.querySelector(".high-tom")

let lowTomBtn = document.querySelector(".lowtom")

let lowTomAudio = document.querySelector(".low-tom")

let midTomBtn = document.querySelector(".midtom")

let midTomAudio = document.querySelector(".mid-tom")


let kickOneBtn = document.querySelector(".kickone")

let kickTowBtn = document.querySelector(".kicktwo")

let kickAudio = document.querySelector(".kick-one")

let snareOneBtn = document.querySelector(".snareone")

let snareAudio = document.querySelector(".snare-one")


let rideOneBtn = document.querySelector(".rideone")

let rideOneAudio = document.querySelector(".ride-one")


let rideTwoBtn = document.querySelector(".ridetwo")

let rideTwoAudio = document.querySelector(".ride-two")

let splashOneBtn = document.querySelector(".splashone")

let splashOneAudio =document.querySelector(".splash-one")

let highOneBtn = document.querySelector(".highone")

let highOneAudio = document.querySelector(".high-one")

let highTwoBtn = document.querySelector(".hightwo")

let highTwoAudio = document.querySelector(".high-two")

rimshotBtn.addEventListener(
    "click" , ()=>{
        rimShotAudio.currentTime = 0 
        rimShotAudio.play()
    }
)


crashOneBtn.addEventListener(
    "click" , ()=>{
        crashOneAudio.currentTime = 0 
        crashOneAudio.play()
    }
)

crashTwoBtn.addEventListener(
    "click" , ()=>{
        crashTwoAudio.currentTime = 0 
        crashTwoAudio.play()
    }
)


floorBtn.addEventListener(
    "click" , ()=>{
        floorAudio.currentTime = 0 
        floorAudio.play()
    }
)


highTomBtn.addEventListener(
    "click" , ()=>{

        highTomAudio.currentTime = 0 
        highTomAudio.play()
    }
)


midTomBtn.addEventListener(
    "click" , ()=>{
        midTomAudio.currentTime = 0 
        midTomAudio.play()
    }
)

lowTomBtn.addEventListener(
    "click" , ()=>{

        lowTomAudio.currentTime = 0 
        lowTomAudio.play()
    }
)


kickOneBtn.addEventListener(
    "click" , ()=>{

        kickAudio.currentTime = 0 

        kickAudio.play()
    }
)

kickTowBtn.addEventListener(
    "click" , ()=>{

        kickAudio.currentTime = 0 

        kickAudio.play()
    }
)

snareOneBtn.addEventListener(
    "click" , ()=>{

        snareAudio.currentTime = 0 

        snareAudio.play()


    }
)


rideOneBtn.addEventListener(
    "click" , ()=>{

        rideOneAudio.currentTime = 0 
        rideOneAudio.play()
    }
)


rideTwoBtn.addEventListener(
    "click" , ()=>{

        rideTwoAudio.currentTime = 0 

        rideTwoAudio.play()
    }
)

splashOneBtn.addEventListener(
    "click" , ()=>{
        splashOneAudio.currentTime = 0 
        splashOneAudio.play()
    }
)


highOneBtn.addEventListener(
    "click" , ()=>{
        highOneAudio.currentTime = 0

        highOneAudio.play()
    }
)


highTwoBtn.addEventListener(
    "click" , ()=>{

        highTwoAudio.currentTime = 0 
        highTomAudio.play() 
    }
)