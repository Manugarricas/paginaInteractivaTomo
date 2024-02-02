let audio = new Audio('audio/Musica_sin_copyright_editada.mp3')
let button = document.getElementById('button')
let img = document.getElementById("img")
let imgs = document.getElementsByClassName("imgs")
playing = false;

button.addEventListener('click', () => {
    if (playing == false) {
        audio.play();
        playing = true;
        button.textContent = 'Stop the song!';
        Array.from(imgs).forEach(img => {
            img.classList = 'imgs'
        });
    }
    else {
        audio.pause();
        playing = false;
        button.textContent = 'Play the song!';
        Array.from(imgs).forEach(img => {
            img.classList = 'hidden imgs'
        });
    }
})
