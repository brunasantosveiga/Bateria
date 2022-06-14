document.body.addEventListener('keyup', click); 
document.querySelector('.composer button').addEventListener('click', composer);

function composer () {
    let song = document.querySelector('#input').value; 
    if(song !== '') {
        let songArray = song.split(''); 
        playComposition(songArray);
    }
}
function click(event) {
    playSound(event.code.toLowerCase()); 
};
function playSound (sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`#${sound}`);
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.play(); 
    }
    if(keyElement) {
        keyElement.classList.add('active'); 
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300); 
    }
}
function playComposition(songArray) {
    let wait = 0;
    for(let songItem of songArray) { 
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250; 
    } 
} 