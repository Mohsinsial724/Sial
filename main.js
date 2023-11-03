
   /*--------Mohsin Sheikhana 724-------*/
const container = document.querySelector('.container');

const hour = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const days = document.getElementById('days');
const month = document.getElementById('month');
const date = document.getElementById('date');


           /* ----Music----- */
const song1 = new Audio('music/song1.mp3');
const song2 = new Audio('music/song2.mp3');
const song3 = new Audio('music/song3.mp3');
const play = document.getElementById('play');
const back = document.getElementById('back');
const next = document.getElementById('next');
const songImg = document.getElementById('song_img');
const img = document.querySelector('img');
const title = document.getElementById('title');
const changeIcon = document.getElementById('change');
      
        /* ---FingerPrint + locked--- */
        
const fingerprint = document.getElementById('fingerprint');
const locked = document.getElementById('locked');


setInterval(function(){
    let today = new Date();
    let hr = today.getHours();
    if (hr == 0, hr<10) {
        hour.innerHTML = "0"+hr;
    }else {
        hour.innerHTML = hr;
    }
    
    let min = today.getMinutes();
    if (min == 0, min <10) {
        minutes.innerHTML = "0"+ min;
    }else {
        minutes.innerHTML = min;
    }
    
    let sec = today.getSeconds()+1;
    if (sec == 0, sec <10) {
        seconds.innerHTML = "0"+sec;
    }else {
        seconds.innerHTML = sec;
    }
    
    
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    days.innerHTML = weekDays[today.getDay()]+",";
    
    month.innerHTML = allMonth[today.getMonth()];
    
    date.innerHTML = today.getDate();
    
    
    
},1000);
           
           /* ------Music----- */
           
const songs = [
    {ele: song1,
    songName: 'Badal Reha Hain Hauli Hauli',
    songImage: 'img1.jpg'
    },
    {ele: song2,
    songName: 'Kahani Suno',
    songImage: 'img2.jpg'
    },
    {ele: song3,
    songName: 'Naina',
    songImage: 'img3.jpg'
    }];
    
let current = 0;
let currentSong = songs[current].ele;
    title.innerHTML = songs[current].songName;
    img.src ="images/"+songs[current].songImage;
    
    for(const song of songs){
    song.ele.addEventListener('ended', () =>{
        currentSong.pause()
        currentSong.currentTime =0;
    current = (current + 1) % songs.length;
    currentSong = songs[current].ele;
    title.innerHTML = songs[current].songName;
    img.src ="images/"+songs[current].songImage;
    playPause()
    });
    };
    

play.addEventListener('click', () =>{
    playPause()
})

next.addEventListener('click', () =>{
    currentSong.pause()
    currentSong.currentTime =0;
    current = (current + 1) % songs.length;
    currentSong = songs[current].ele;
    title.innerHTML = songs[current].songName;
    img.src ="images/"+songs[current].songImage;
    playPause()
})

back.addEventListener('click', () =>{
    currentSong.pause()
    currentSong.currentTime =0;
    current = (current - 1 + songs.length)% songs.length;
    currentSong = songs[current].ele;
    title.innerHTML = songs[current].songName;
    img.src ="images/"+songs[current].songImage;
    playPause()
})

function playPause(){
    if (currentSong.paused) {
        currentSong.play();
        songImg.classList.add('anime');
      changeIcon.classList.replace('fa-play', 'fa-pause')
    }else {
        currentSong.pause();
        songImg.classList.remove('anime')
        changeIcon.classList.replace('fa-pause', 'fa-play')
    }
};

container.addEventListener('touchstart', () =>{
    locked.style.display = "block";
    setTimeout(() =>{
    locked.style.display = "none";
},4000)

});



