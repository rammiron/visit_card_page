let soundClick = new Audio("static/sounds/click.mp3");
let via = GetReqData("ref");
let glppcnt = 0;
let glmzcnt = 0;
soundClick.volume = 0.2;

window.onload = function () {
    console.log('By Wertywin2353');
    if(via != undefined) {
        if(via == "tg") {
            window.location.href = "https://t.me/rammiron_bio";
        }
        else if(via == "github") {
            window.location.href = "https://github.com/rammiron";
        }
        else if(via == "steam") {
            window.location.href = "https://steamcommunity.com/id/rammiron666/";
        }
        else if(via == "discord") {
            window.location.href = "https://discordapp.com/users/1048600490562293850/";
        }
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("root").style.width = "94%";
        document.getElementById("window").style.width = "100%";
        document.getElementById("que").style.display = "none";
    }
    document.getElementById("window").style.scale = 1;
    setTimeout(
        function () {
            document.getElementById("queMark").style.opacity = "50%";
            document.getElementById("profile_photo").style.opacity = "100%";
            document.getElementById("description").style.opacity = "100%";
        }, 500
    );

}

function relink(linkID) {
    soundClick.play();
    setTimeout(
        function () {
            if(linkID == 1) {
                window.location.href = "https://github.com/rammiron";
            }
            else if(linkID == 2) {
                window.location.href = "https://t.me/rammiron_bio";
            }
            else if(linkID == 3) {
                window.location.href = "https://steamcommunity.com/id/rammiron666/";
            }
            else if(linkID == 4) {
                window.location.href = "https://discordapp.com/users/1048600490562293850/";
            }
        }, 600
    );
}

function showPopup() {
    soundClick.play();
    if(glppcnt == 0) {
        document.getElementById("subQue").style.opacity = "100%";
        document.getElementById("queMark").style.opacity = "100%";
        glppcnt++;
    }
    else if(glppcnt == 1) {
        document.getElementById("subQue").style.opacity = "0%";
        document.getElementById("queMark").style.opacity = "50%";
        glppcnt--;
    }
}

