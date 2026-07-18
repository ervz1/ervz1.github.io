const winContents = {
    "info": {
        "title": "info",
        "icon": "info.svg",
        "content": {
            "en": "",
            "pl": "",
            "ru": ""
        } 
    },
    "ppo": {
        "title": "passwordpassword",
        "icon": "terminal.svg",
        "content": {
            "en": "",
            "pl": "",
            "ru": ""
        } 
    },
    "ppom": {
        "title": "ppmonitor",
        "icon": "fpga.svg",
        "content":{
            "en": "",
            "pl": "",
            "ru": ""
        } 
    },
    "flanki": {
        "title": "flanki 2d",
        "icon": "gamepad.svg",
        "content": {
            "en": "",
            "pl": "",
            "ru": ""
        }
    },
    "photoes": {
        "title": "photoes",
        "icon": "gallery.svg",
        "content": {
            "en": "oh very nice photo <img src='assets/img/ico.png'>",
            "pl": "o bardzo fajne zdjecie <img src='assets/img/ico.png'>",
            "ru": "очень крутая фотка <img src='assets/img/ico.png'>"
        }
    },
    "player": {
        "title": "player",
        "icon": "radio.svg",
        "content": {
            "nolang": `
                <div class='player'>
                    <div id="playerTitle">-</div>
                    <input id="playerSlider" type="range" max="1" value="0" step="any">
                    <div class="playerButtons">
                        <div class="playerTime" id="playerProgress">--:--</div>
                        <div class="img-button" onclick="playerControls('prev')"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="496 400 256 256 496 112 496 400"/><polygon points="256 400 16 256 256 112 256 400"/></svg></div>
                        <div class="img-button" id='playerPlayPause' onclick="playPause()">${document.getElementById("playerAudio").paused ? icons.get("play.svg") : icons.get("pause.svg")}</div>
                        <div class="img-button" onclick="playerControls('next')"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="16 400 256 256 16 112 16 400"/><polygon points="256 400 496 256 256 112 256 400"/></svg></div>
                        <div class="playerTime" id="playerDuration">--:--</div>
                    </div>
                </div>`
        },
        "properties": {
            "size": {x: 350, y: 160},
            "noresize": true,
            "nomaximize": true,
            "nodeskbutton": true,
            "preventclose": true
        }
    }
}

preparePlayer()