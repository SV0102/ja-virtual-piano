const definedArray = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'w', 'e', 't', 'y', 'u'];
let tempLetter = ''
document.addEventListener('keydown', (event) => {
    // console.log(event.code)

    for (tempLetter of definedArray){
        // console.log(typeof tempLetter)
        if (event.key === tempLetter){
            console.log(`The '${event.key}' key is pressed.`);
            let audioObject = document.createElement("AUDIO");
            audioObject.src = `${event.key.toUpperCase()}.mp3`;
            audioObject.play();
            // let audioObject = new Audio(`${event.key.toUpperCase()}.mp3`);
            console.log(audioObject);
            // document.getElementById(`sound_${event.key}`).play();
        }
    }

})