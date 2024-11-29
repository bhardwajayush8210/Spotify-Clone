console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "cielo", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "My heart", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Heroes-tonight", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Rabba", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Tum hi ho", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Tera ishq", filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "phir milenge", filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "phir milenge", filePath: "songs/9.mp3",coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
   audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
  })
})