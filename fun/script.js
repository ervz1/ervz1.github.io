let bgPos = {x: 0, y: 0}
var speed = -0.04
var lang = ['en', 'pl', 'ru']
let windowList = [];
const deskBar = document.getElementById("deskBar")
const playerAudio = document.getElementById('playerAudio')
let playerSlider
let player = {
    Q: ["A-D_converted_thoughts.mp3", "absence_music.mp3", "access_denied.mp3", "b_rainfree_ze.mp3", "cloud_music.mp3", "command_line.mp3", "decrypted_decepted.mp3", "fumei.mp3", "I_am_okay.mp3", "I_never_left.mp3", "merge_conflict.mp3", "multilevel_parking_music.mp3", "non_static.mp3", "omnipresent_v2.mp3", "petrol_stain_patterns.mp3", "plug_me_in_reconnect.mp3", "recycle_bin_music.mp3", "scatter_me_rearrange.mp3", "shutdown_music.mp3", "silent_mode.mp3", "stopmotion_music.mp3", "stuck_in_the.mp3", "synapse_signups.mp3", "taking_my_body_elsewhere.mp3", "tetsudou_no_uta.mp3", "thank_you_for_always_being_with_me.mp3", "third_death.mp3", "update_music.mp3", "waterfall_music.mp3"],
    seeking: false,
    titleOverflow: {x: 0, delta: 0, wait:0}
}
playerAudio.volume = 0.2
let highlightBarButton

document.addEventListener("mousemove", () => {
    bgPos = {x: (event.clientX - window.innerWidth / 2) * speed, y: (event.clientY - window.innerHeight / 2) * speed}
    document.querySelector('body').style.backgroundPosition = `${bgPos.x}px ${bgPos.y}px, ${bgPos.x}px ${bgPos.y}px, ${bgPos.x/3}px ${bgPos.y/3}px, ${bgPos.x/3}px ${bgPos.y/3}px`;
});

function langchange(el=null) {
    lang.push(lang.shift())
    if (el) {
        el.innerHTML = lang[0].toUpperCase()
    }
    windowList.forEach(element => {
        if (winContents[element.id] && !winContents[element.id].content.nolang) {
            element.querySelector('.window-content').innerHTML = winContents[element.id].content[lang[0]]
        }
    });
}

function playPause(force=null) {
    let icon
    if (force=="pause") {
        icon = icons.get("play.svg")
        playerAudio.pause()
    } else if (force == "play") {
        icon = icons.get("pause.svg")
        playerAudio.play()
    } else if (playerAudio.paused) {
        icon = icons.get("pause.svg")
        playerAudio.play()
    } else {
        icon = icons.get("play.svg")
        playerAudio.pause()
    }
    document.getElementById('deskPlayPause').innerHTML = icon
    if (document.getElementById('playerPlayPause')) document.getElementById('playerPlayPause').innerHTML = icon
}

function updatePlayer(ignoreSlider = false) {
    let progressDiv = document.getElementById("playerProgress")
    let durationDiv = document.getElementById("playerDuration")
    let title = document.getElementById("playerTitle")
    let delta = 0.1
    if (player.titleOverflow.x > 0) {
        if (player.titleOverflow.wait > 0) {
            player.titleOverflow.wait -= 10 * delta
        } else {
            let twidth = parseFloat(title.style.left)
            title.style.left = twidth + (player.titleOverflow.delta * delta * 30) + "px"
            if (Math.abs(twidth) > player.titleOverflow.x) {
                title.style.left =  player.titleOverflow.x * player.titleOverflow.delta + "px"
                player.titleOverflow.delta *= -1 
                player.titleOverflow.wait = 10
            }
        }
    }
    durationDiv.innerHTML = playerTime(playerAudio.duration)
    progressDiv.innerHTML = playerTime(playerAudio.currentTime)
    if (!ignoreSlider) playerSlider.value = (playerAudio.currentTime/playerAudio.duration)
    
}

function preparePlayer() {
    deskButton("player")
    let playerDiv = document.getElementById('player')
    playerDiv.querySelector(".maxeffect").style.display = "none"
    updatePlayerTitle()
    minimize("player")
    playerDiv.querySelector(".maxeffect").style.display = "block"
    playerSlider = document.getElementById("playerSlider")
    playerAudio.src = "../assets/sound/" +player.Q[0]
    playerAudio.addEventListener('loadedmetadata', () => {
        updatePlayer()
        const seekableAmount = playerAudio.seekable.end(playerAudio.seekable.length-0.0001)
    })
    playerAudio.addEventListener("timeupdate", () => {
        if (playerAudio.readyState > 0) {
            updatePlayer(player.seeking)
        } else {
            playerSlider.value = 0
        }
    })
    playerSlider.addEventListener('change', () => {
        playerAudio.currentTime = playerSlider.value*playerAudio.duration
    })
    playerSlider.addEventListener('input', () => {
        player.seeking = true
    })
    playerAudio.addEventListener('ended', () => {
        playerControls('next')
    })
    document.addEventListener("mouseup", () => {
        player.seeking = false
    })
    
    deskButton("settings")
    let settings = document.getElementById("settings")
    settings.querySelector(".maxeffect").style.display = "none"
    minimize("settings")
    settings.querySelector(".maxeffect").style.display = "block"
    let volumeSlider = settings.querySelector("#volumeSlider")
    volumeSlider.value = playerAudio.volume
    volumeSlider.addEventListener("input", () => {
        playerAudio.volume = volumeSlider.value
    }) 
}

function updatePlayerTitle() {
    let container = document.getElementById('player')
    let title = document.getElementById("playerTitle")
    title.innerHTML = player.Q[0]
    let x = container.clientWidth
    let y = title.clientWidth
    if (x < y) {
        player.titleOverflow.x = Math.ceil((y - x)/2) + 7
        player.titleOverflow.delta = -1
        player.titleOverflow.wait = 10
    } else {
        player.titleOverflow.x = 0
        player.titleOverflow.delta = 0
        player.titleOverflow.wait = 0
    }
    title.style.left = player.titleOverflow.x + 'px'
}

function playerControls(c) {
    switch (c){
        case "next":
            player.Q.push(player.Q.shift())
            break
        case "prev":
            player.Q.unshift(player.Q.pop())
            break
    }
    updatePlayerTitle()
    playerAudio.src = "../assets/sound/" + player.Q[0]
    playerAudio.play()
}

function playerTime(time) {
    let m = (time/60) < 10 ? "0" + (Math.floor(time/60)) : (Math.floor(time/60))
    let s = (time%60) < 10 ? "0" + (Math.floor(time%60)) : (Math.floor(time%60))
    if (Number.isNaN(m) || Number.isNaN(s)) return "--:--"
    return m + ":" + s
}

function updateClock() {
    let time = new Date() 
    let h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    let m = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    let d = time.getDate() < 10 ? "0" + time.getDate() : time.getDate()
    let mt = time.getMonth()+1 < 10 ? "0" + (time.getMonth()+1) : (time.getMonth()+1)
    let y = time.getFullYear() 
    document.getElementById("clock").innerHTML = h + ":" + m
    document.getElementById("cal").innerHTML = d + "/" + mt + "/" + y
    setTimeout(updateClock, 1000)
} updateClock()

function deskButton(entry) {
    let data = winContents[entry]
    if (document.getElementById(entry)) {
        let contentWindow = document.getElementById(entry)
        onTop(contentWindow, (data.properties && data.properties.nodeskbutton))
        if (contentWindow.style.visibility == "hidden") {
            contentWindow.style.visibility = "visible"
            let maxeff = contentWindow.querySelector('.maxeffect')
            maxeff.style.left = 0
            maxeff.style.top = 0
            maxeff.style.width = "100%"
            maxeff.style.height = "100%"
        }
    } else {
        if ((data.properties && !data.properties.nodeskbutton) || !data.properties) newBarButton(entry, data.icon)
        if (data.content.nolang) {
            newWindow(entry, data.title, data.icon, data.content.nolang, data.properties)
        } else {
            newWindow(entry, data.title, data.icon, data.content[lang[0]], data.properties)
        }
    }
}

function newBarButton(entry, icon) {
    let newButton = document.createElement("div")
    newButton.className = 'img-button'
    newButton.onclick = (e) => {deskButton(entry)}
    newButton.id = entry + "_DB"
    newButton.draggable = "false"
    newButton.innerHTML = icons.get(icon)
    deskBar.appendChild(newButton)
}

function newWindow(id, title, icon, content, properties={}) {
    let newWindow = document.createElement("div")
    newWindow.onmousedown = function(e) { 
        if (!e.target.dataset.preventtop) { 
            onTop(this, properties.nodeskbutton)
        }
    }
    newWindow.classList.add("window")
    newWindow.id = id;
    if (!properties.size) {
        properties.size = {x: 450, y: 300}
    }
    if (!properties.pos) {
        properties.pos = {x:100 + 25*windowList.length, y: (50+25*windowList.length)%(window.innerHeight-70)}
    }
    windowList.push(newWindow)
    console.log(properties.pos)
    newWindow.style.width = properties.size.x + "px"
    newWindow.style.height = properties.size.y + "px"
    newWindow.dataset.max = "false"
    newWindow.style.left = properties.pos.x + "px"
    newWindow.style.top = properties.pos.y + "px"
    newWindow.dataset.minpos = `[${properties.pos.x}, ${properties.pos.y}]`
    if (properties.nomaximize) newWindow.dataset.nomaximize = "true"
    document.body.appendChild(newWindow);
    newWindow.innerHTML = `${properties.noresize ? "" :
        `<div class="windowresizebox ns" style="top: -5px; left: 5px; width: calc(100% - 10px); height: 8px;" onmousedown="resizeWindow(event, '${id}', 0, -1)"></div>
        <div class="windowresizebox ns" style="bottom: -5px; left: 5px; width: calc(100% - 10px); height: 8px;" onmousedown="resizeWindow(event, '${id}', 0, 1)"></div>
        <div class="windowresizebox ew" style="top: 5px; right: -5px; width: 8px; height: calc(100% - 10px);" onmousedown="resizeWindow(event, '${id}', 1, 0)"></div>
        <div class="windowresizebox ew" style="top: 5px; left: -5px; width: 8px; height: calc(100% - 10px);" onmousedown="resizeWindow(event, '${id}', -1, 0)"></div>
        <div class="windowresizebox nesw" style="top: -5px; right: -5px; width: 10px; height: 10px;" onmousedown="resizeWindow(event, '${id}', 1, -1)"></div>
        <div class="windowresizebox nesw" style="bottom: -5px; left: -5px; width: 10px; height: 10px;" onmousedown="resizeWindow(event, '${id}', -1, 1)"></div>
        <div class="windowresizebox nwse" style="top: -5px; left: -5px; width: 10px; height: 10px;" onmousedown="resizeWindow(event, '${id}', -1, -1)"></div>
        <div class="windowresizebox nwse" style="bottom: -5px; right: -5px; width: 10px; height: 10px;" onmousedown="resizeWindow(event, '${id}', 1, 1)"></div>`}
        <div class="maxeffect"></div>
        <div class="windowbg"></div>
        <div class="window-header" onmousedown="dragWindow(event, '${id}')">
            <div style="min-width:24px; height:24px" >${icons.get(icon)}</div>
            <div class="window-title">${title}</div>
            <div class="window-buttons">
                <div class="img-button" data-preventtop="true" onclick="minimize('${id}')"><svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"/></svg></div>
                ${properties.nomaximize ? '' : `<div class="img-button minmax" onclick="minMaxWindow('${id}')">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M388,466H320V422h68a34,34,0,0,0,34-34V320h44v68A78.09,78.09,0,0,1,388,466Z" style="transform-origin: 75% 75%;"/><path d="M466,192H422V124a34,34,0,0,0-34-34H320V46h68a78.09,78.09,0,0,1,78,78Z" style="transform-origin: 75% 25%;"/><path d="M192,466H124a78.09,78.09,0,0,1-78-78V320H90v68a34,34,0,0,0,34,34h68Z" style="transform-origin: 25% 75%;"/><path d="M90,192H46V124a78.09,78.09,0,0,1,78-78h68V90H124a34,34,0,0,0-34,34Z" style="transform-origin: 25% 25%;"/></svg>
                </div>`}
                <div class="img-button close" data-preventtop="true" ${properties.preventclose ? `onclick="minimize('${id}', true)` : `onclick="closeWindow('${id}')`}">
                    <svg>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="window-content">
            ${content}
        </div>
    `
    onTop(newWindow, properties.nodeskbutton)
}

function closeWindow(title) {
    let window = document.getElementById(title)
    if (window) {
        windowList.splice(windowList.indexOf(window), 1)
        document.getElementById(window.id+"_DB").remove()
        document.body.removeChild(window)
        highlightBarButton = null
    }
}

function minMaxWindow(id, ignoreRes = false, ignorePos = false) {
    let contentWindow = document.getElementById(id);
    let maxeff = contentWindow.querySelector(".maxeffect")
    if (contentWindow.getAttribute("data-max") === "true") {
        if (!ignoreRes) changeWindowRes(id, ignorePos)
        contentWindow.setAttribute("data-max", "false")
        maxeff.style.left = 0
        maxeff.style.top = 0
        maxeff.style.width = 0
        maxeff.style.height = 0
    } else {
        if (!ignoreRes) changeWindowRes(id)
        contentWindow.style.width = `${window.innerWidth+2}px`
        contentWindow.style.height = `${window.innerHeight-55}px`
        contentWindow.style.top = "-2px"
        contentWindow.style.left = "-2px"
        contentWindow.setAttribute("data-max", "true")
        maxeff.style.left = 0
        maxeff.style.top = 0
        maxeff.style.width = 0
        maxeff.style.height = 0
    }
}

function dragWindow(event, id) {
    if (event.target.classList.contains("img-button")) return
    let contentWindow = document.getElementById(id)
    let rect = contentWindow.getBoundingClientRect()
    let offset = {x: event.clientX - rect.x, y: event.clientY - rect.y}
    if (contentWindow.getAttribute("data-max") == "true") {
        let newRect = JSON.parse(contentWindow.getAttribute("data-minres"))
        offset.x = Math.max(Math.min(event.clientX/rect.width*newRect[0], newRect[0]-100), 30)
        minMaxWindow(id, false, true)
    }
    changeWindowRes(id)
    event.preventDefault()
    document.onmousemove = (e) => {
        let newPos = {x: Math.max(0, Math.min(window.innerWidth-30, e.clientX - offset.x)), y: Math.max(0, Math.min(window.innerHeight-85, e.clientY - offset.y))}
        let maxeff = contentWindow.querySelector(".maxeffect")
        if (e.clientY < 50 && !contentWindow.dataset.nomaximize) {
            maxeff.style.left = -Math.max(0 ,e.clientX) + offset.x + 'px'
            maxeff.style.top = -Math.max(0, e.clientY) - offset.y + 'px'
            maxeff.style.width = window.innerWidth + 'px'
            maxeff.style.height = window.innerHeight + 'px'
        } else {
            maxeff.style.left = 0
            maxeff.style.top = 0
            maxeff.style.width = "100%"
            maxeff.style.height = "100%"
        }
        contentWindow.style.top = newPos.y + 'px'
        contentWindow.style.left = newPos.x + 'px'
    }
    document.onmouseup = (e) => {
        if (e.clientY < 50 && !contentWindow.dataset.nomaximize) {
            minMaxWindow(id, true)
        }
        document.onmousemove = null
        document.onmouseup = null
    }
}

function resizeWindow(event, title, xDir, yDir) {
    let contentWindow = document.getElementById(title)
    if (contentWindow.getAttribute("data-max") == "true") return
    let rect = contentWindow.getBoundingClientRect()
    let offset = {x: event.clientX - rect.x, y: event.clientY - rect.y}
    let winSize = {x: parseInt(contentWindow.style.width.split('px')[0]), y: parseInt(contentWindow.style.height.split('px')[0])}
    event.preventDefault()
    document.onmousemove = (e) => {
        let newHeight
        let newWidth
        switch (xDir) {
            case -1:
                newWidth = winSize.x + event.clientX - e.clientX
                if (newWidth >= 300 && newWidth <= window.innerWidth && e.clientX < window.innerWidth && e.clientX > 0) {
                    contentWindow.style.width = `${newWidth}px`
                    contentWindow.style.left = `${e.clientX - offset.x}px`
                }
                break
            case 1:
                newWidth = winSize.x - (event.clientX - e.clientX)
                if (newWidth >= 300 && newWidth <= window.innerWidth && e.clientX < window.innerWidth && e.clientX > 0) {
                    contentWindow.style.width = `${newWidth}px`
                }
                break
        }
        switch (yDir) {
            case -1:
                newHeight = winSize.y + event.clientY - e.clientY
                if (newHeight >= 300 && newHeight <= window.innerHeight && e.clientY < window.innerHeight && e.clientY > 0) {
                    contentWindow.style.height = `${newHeight}px`
                    contentWindow.style.top = `${e.clientY - offset.y}px`
                }
                break
            case 1:
                newHeight = winSize.y - (event.clientY - e.clientY)
                if (newHeight >= 300 && newHeight <= window.innerHeight && e.clientY < (window.innerHeight-55) && e.clientY > 0) {
                    contentWindow.style.height = `${newHeight}px`
                }
                break
        }
    }
    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
    }
}

function minimize(id, onclose = false) {
    let contentWindow = document.getElementById(id)
    if (onclose) {
        if (id=="player") playPause("pause")
    }
    let rect = contentWindow.getBoundingClientRect()
    contentWindow.querySelector(".maxeffect").style.left = rect.width/2 + 'px'
    contentWindow.querySelector(".maxeffect").style.top = rect.height/2 + 'px'
    contentWindow.querySelector(".maxeffect").style.width = "0"
    contentWindow.querySelector(".maxeffect").style.height = "0"
    contentWindow.style.visibility = 'hidden'
    windowList.splice(windowList.indexOf(contentWindow), 1)
    windowList.unshift(contentWindow)
    windowList.forEach((wlEl, i) => {
        wlEl.style.zIndex = i
    })
    if (highlightBarButton) {
        document.getElementById(highlightBarButton).dataset.highlit = "false"
    } 
}

function dehighlight(e) {
    if (e.target.dataset.dehighlight && highlightBarButton) {
        document.getElementById(highlightBarButton).dataset.highlit = "false"
    }
}

function onTop(el, ignoreHighlight = false) {
    windowList.splice(windowList.indexOf(el), 1)
    windowList.push(el)
    windowList.forEach((wlEl, i) => {
        wlEl.style.zIndex = i
    })

    if (highlightBarButton) {
        document.getElementById(highlightBarButton).dataset.highlit = "false"
    }
    if (ignoreHighlight) return
    highlightBarButton = el.id + '_DB'
    document.getElementById(highlightBarButton).dataset.highlit = "true"

} 

function changeWindowRes(id, ignorePos = false) {
    let contWin = document.getElementById(id)
    if (contWin.getAttribute("data-max") == "true") {
        let res = JSON.parse(contWin.getAttribute("data-minres"))
        let pos = JSON.parse(contWin.getAttribute("data-minpos"))
        contWin.style.width = res[0] + 'px'
        contWin.style.height = res[1] + 'px'
        if (!ignorePos) {
            contWin.style.left = pos[0] + 'px'
            contWin.style.top = pos[1] + 'px'
        }
    } else {
        let res = [contWin.style.width.slice(0, -2), contWin.style.height.slice(0, -2)]
        let pos = [contWin.style.left.slice(0, -2), contWin.style.top.slice(0, -2)]
        contWin.setAttribute("data-minres", JSON.stringify(res))
        contWin.setAttribute("data-minpos", JSON.stringify(pos))
    }
}

function openImg(img) {
    if (document.getElementById(img)) {
        let contentWindow = document.getElementById(img)
        onTop(contentWindow)
        if (contentWindow.style.visibility == "hidden") {
            contentWindow.style.visibility = "visible"
            let maxeff = contentWindow.querySelector('.maxeffect')
            maxeff.style.left = 0
            maxeff.style.top = 0
            maxeff.style.width = "100%"
            maxeff.style.height = "100%"
        }
    } else {
        let newButton = document.createElement("div")
        newButton.className = 'img-button'
        newButton.onclick = (e) => {openImg(img)}
        newButton.id = img + "_DB"
        newButton.draggable = "false"
        newButton.innerHTML = icons.get("gallery.svg")
        deskBar.appendChild(newButton)
        newWindow(img, img, 'gallery.svg', `<img class=fullImgContent src=/assets/photos/${img}>`)
    }
}

function changeColor(el, c='main') {
    switch (c) {
        case "main":
            document.documentElement.style.setProperty("--acc", `oklch(from ${el.value} l c h)`)
            document.documentElement.style.setProperty("--acc-d", `oklch(from ${el.value} l calc(c - 0.07) h)`)
            document.documentElement.style.setProperty("--acc-dt", `oklch(from ${el.value} l calc(c - 0.07) h / 0.3)`)
            document.documentElement.style.setProperty("--acc-t", `oklch(from ${el.value} calc(l - 0.36) c h)`)
            document.documentElement.style.setProperty("--acc-t2", `oklch(from ${el.value} calc(l - 0.43) calc(c - 0.09) h)`)
            break
        case "bg":
            document.documentElement.style.setProperty("--bg", el.value)
            break
        case "reset":
            document.documentElement.style.setProperty("--acc", `oklch(0.61 0.16 135.33)`)
            document.documentElement.style.setProperty("--acc-d", `oklch(0.61 0.09 135.33)`)
            document.documentElement.style.setProperty("--acc-dt", `oklch(0.61 0.09 135.33 / 0.3)`)
            document.documentElement.style.setProperty("--acc-t", `oklch(0.25 0.16 135.33)`)
            document.documentElement.style.setProperty("--acc-t2", `oklch(0.18 0.16 135.33)`)
            document.documentElement.style.setProperty("--bg", '#090c13')
            document.getElementById("bgColPick").value = '#090c13'
            document.getElementById('accColPick').value = "oklch(0.61 0.16 135.33)"
            break
    }
}

function setGrid(el, g="") {
    switch (g) {
        case "back":
            document.documentElement.style.setProperty("--grid-size2", `${el.value}px`)
            break
        case "front":
            document.documentElement.style.setProperty("--grid-size", `${el.value}px`)
            break
        case "reset":
            document.documentElement.style.setProperty("--grid-size", `210px`)
            document.documentElement.style.setProperty("--grid-size2", `130px`)
            document.getElementById("g1").value = "210"
            document.getElementById("g2").value = "130"
            break
    }
}


deskButton('info')
preparePlayer()
