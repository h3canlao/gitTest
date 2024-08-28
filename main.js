// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd')
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn= $('.btn-toggle-play')
const player = $('.player')


const app = {
    isPlaying :false,
    currentIndex : 0,
    song:[
        {
            name: 'MAESTRO',
            singer: 'JHIN',
            path:'./assets/music/MAESTRO.mp3',
            image:'./assets/img/maestro.jpg'
        },
        {
            name: 'True-Damage',
            singer: 'TrueDamage Bangs',
            path:'./assets/music/TrueDamage.mp3',
            image:'./assets/img/truedame.webp'
        },
        {
            name: 'HEARTSTEAL',
            singer: 'HeartSteal Bangs',
            path:'./assets/music/HEARTSTEEL.mp3',
            image:'./assets/img/heartsteal.webp'
        },
        {
            name: '沦陷 - 王靖雯不胖',
            singer: '楚明玉',
            path:'./assets/music/VG.mp3',
            image:'./assets/img/VG.jpg'
        },
        {
            name: 'CHAMPION 2023',
            singer: 'Grabbitz & bbno$',
            path:'./assets/music/champion2023.mp3',
            image:'./assets/img/champion2023.webp'
        },
        {
            name: 'FNAF 1',
            singer: 'The Living Tombstone',
            path:'./assets/music/fnaf1.mp3',
            image:'./assets/img/fnaf1.jpg'
        },
    ],
    render: function() {
        const htmls = this.song.map( song => {
            return `
            <div class="song">
                <div class="thumb" 
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
           </div>
        `
        })
    $('.playlist').innerHTML= htmls.join('')
        
        
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.song[this.currentIndex];  // Đổi 'songs' thành 'song'
            }
        });
    },
    

    HandleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const cdNewWidth= cdWidth - scrollTop
            cd.style.width = cdNewWidth > 0 ? cdNewWidth + 'px' :0
            cd.style.opacity = cdNewWidth / cdWidth
        }

        playBtn.onclick = function() {      

            playBtn.onclick = function() {
                if (_this.isPlaying) {
                    _this.isPlaying = false; 
                    audio.pause();
                    player.classList.remove('playing');
                } else {
                    _this.isPlaying = true;
                    audio.play();
                    player.classList.add('playing');
                }
            }
            
        }
    },
    LoadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    start: function() {
        this.defineProperties();
        this.LoadCurrentSong();
        this.render();
        this.HandleEvents();
    }

}
app.start();
