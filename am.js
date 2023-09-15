const app = Vue.createApp({
    data() {
      return {
        isPlaying: false,
        isDown: false,
      };
    },
    methods: {
      openNav() {
        document.getElementById('sidenav').style.width = '250px';
        console.log("done");
      },
      closeNav() {
        document.getElementById('sidenav').style.width = '0px';
      },
      playMusic() {
        this.isPlaying = true;
        const music = document.querySelector('audio');
        const play = document.getElementById('play');
        const cover = document.getElementById('cover');
  
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        cover.classList.add('anime');
        
      },
      pauseMusic() {
        this.isPlaying = false;
        const music = document.querySelector('audio');
        const play = document.getElementById('play');
        const cover = document.getElementById('cover');
  
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        cover.classList.remove('anime');
      },
      toggleMusic() {
        this.isPlaying ? this.pauseMusic() : this.playMusic();
        console.log("22");
      },
      toggleBar() {
        const down = document.getElementById('down');
        const aNames = document.getElementById('aNames');
  
        if (this.isDown) {
          this.isDown = false;
          this.upBar(aNames, down);
        } else {
          this.isDown = true;
          this.downBar(aNames, down);
        }
      },
      upBar(aNames, down) {
        down.classList.replace('fa-caret-up', 'fa-caret-down');
        aNames.style.display = 'none';
      },
      downBar(aNames, down) {
        down.classList.replace('fa-caret-down', 'fa-caret-up');
        aNames.style.display = 'block';
      },
    },
  });
  
app.mount('#app');
  