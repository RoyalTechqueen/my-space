const wrapper = document.querySelector(".wrapper")
const musicName = document.querySelector(".song-details .name");
const musicArtist = document.querySelector(".song-details .artist");
const mainAudio = document.querySelector("#main-audio");
const playPause = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".fa-step-backward");
const nextBtn = document.querySelector(".fa-step-forward");
const progressBar = document.querySelector(".progress-bar");
const progressArea = document.querySelector(".progress-area");
const repeatBtn = document.querySelector("#repeat-plist");

var index = 0;

window.addEventListener('load', () => {
    loadMusic(index)
});

function loadMusic(indexNumb) {
    musicArtist.innerText = allMusic[indexNumb].artist;
    musicName.innerText = allMusic[indexNumb].name;
    mainAudio.src = `./resources/audio-files/${allMusic[indexNumb].src}.mp3`;
}
function playMusic() {
  wrapper.classList.add("paused");
  playPause.querySelector("i").classList.remove("fa-play");
  playPause.querySelector("i").classList.add("fa-pause");
  mainAudio.play();
}
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPause.querySelector("i").classList.remove("fa-pause");
  playPause.querySelector("i").classList.add("fa-play");
  mainAudio.pause();
}

playPause.addEventListener("click", function () {
  const isMusicPaused = wrapper.classList.contains("paused");
  if (isMusicPaused == false) {
    playMusic();
  } else {
    pauseMusic();
  }
});
nextBtn.addEventListener('click', nextMusic)
prevBtn.addEventListener('click', prevMusic)

function nextMusic() {
    if (index > allMusic.length - 1) {
        index = 0;
        loadMusic(index);
        wrapper.classList.add('play');
        mainAudio.play();
        playPause.querySelector('i').setAttribute('class', 'fa fa-pause');
    } else {
        index++;
        loadMusic(index);
        wrapper.classList.add('play');
        mainAudio.play();
        playPause.querySelector('i').setAttribute('class', 'fa fa-pause');
    }
}

function prevMusic() {
    if (index < 0) {
        index = allMusic.length - 1;
        loadMusic(index);
        wrapper.classList.add('play');
        mainAudio.play();
        playPause.querySelector('i').setAttribute('class', 'fa fa-pause');
    }else {
        index--;
        loadMusic(index);
        wrapper.classList.add('play');
        mainAudio.play();
        playPause.querySelector('i').setAttribute('class', 'fa fa-pause');
    }
}

mainAudio.addEventListener("timeupdate", function (e) {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = document.querySelector(".current");
  let musicDuration = document.querySelector(".duration");

  mainAudio.addEventListener("loadeddata", function () {
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });

  let audioCurrentTime = mainAudio.currentTime;
  let currentMin = Math.floor(audioCurrentTime / 60);
  let currentSec = Math.floor(audioCurrentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click", function (e) {
  let progressWidthval = progressArea.clientWidth;
  let clickOffsetX = e.offsetX;
  let songDuration = mainAudio.duration;
  mainAudio.currentTime = (clickOffsetX / progressWidthval) * songDuration;
});
repeatBtn.addEventListener("click", () => {
  let getClass = repeatBtn.getAttribute("class");
  switch (getClass) {
    case "fa fa-repeat":
      repeatBtn.setAttribute("class", "fa fa-random");
      break;
    case "fa fa-random":
      repeatBtn.setAttribute("class", "fa fa-exchange");
      break;
    case "fa fa-exchange":
      repeatBtn.setAttribute("class", "fa fa-repeat");
      break;
  }
});

mainAudio.addEventListener("ended", () => {
  let getClass = repeatBtn.getAttribute("class");
  switch (getClass) {
    case "fa fa-repeat":
      mainAudio.currentTime = 0;
      loadMusic(index);
      playMusic();
      break;
    case "fa fa-random":
      let randIndex = Math.floor(Math.random() * allMusic.length);
      do {
        randIndex = Math.floor(Math.random() * allMusic.length);
      } while (index == randIndex);
      {
        musicIndex = randIndex;
        loadMusic(index);
        playMusic();
        break;
      }
    case "fa fa-exchange":
      nextMusic();
      loadMusic(index);
      playMusic();
      break;
  }
});