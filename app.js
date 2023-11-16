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
        rimShotAudio.pause()
        rimShotAudio.play()
    }
)


crashOneBtn.addEventListener(
    "click" , ()=>{
        crashOneAudio.pause()
        crashOneAudio.play()
    }
)

crashTwoBtn.addEventListener(
    "click" , ()=>{
        crashTwoAudio.pause()
        crashTwoAudio.play()
    }
)


floorBtn.addEventListener(
    "click" , ()=>{
        floorAudio.pause()
        floorAudio.play()
    }
)


highTomBtn.addEventListener(
    "click" , ()=>{

        highTomAudio.pause()
        highTomAudio.play()
    }
)


midTomBtn.addEventListener(
    "click" , ()=>{
        midTomAudio.pause()
        midTomAudio.play()
    }
)

lowTomBtn.addEventListener(
    "click" , ()=>{

        lowTomAudio.pause()
        lowTomAudio.play()
    }
)


kickOneBtn.addEventListener(
    "click" , ()=>{

        kickAudio.pause()

        kickAudio.play()
    }
)

kickTowBtn.addEventListener(
    "click" , ()=>{

        kickAudio.pause()

        kickAudio.play()
    }
)

snareOneBtn.addEventListener(
    "click" , ()=>{

        snareAudio.pause()

        snareAudio.play()


    }
)


rideOneBtn.addEventListener(
    "click" , ()=>{

        rideOneAudio.pause()
        rideOneAudio.play()
    }
)


rideTwoBtn.addEventListener(
    "click" , ()=>{

        rideTwoAudio.pause()

        rideTwoAudio.play()
    }
)

splashOneBtn.addEventListener(
    "click" , ()=>{
        splashOneAudio.pause()
        splashOneAudio.play()
    }
)


highOneBtn.addEventListener(
    "click" , ()=>{
        highOneAudio.pause()

        highOneAudio.play()
    }
)


highTwoBtn.addEventListener(
    "click" , ()=>{

        highTwoAudio.pause()
        highTomAudio.play() 
    }
)