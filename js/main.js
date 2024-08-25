window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("root").style.width = "94%";
        document.getElementById("window").style.width = "100%";
    }
    else { console.log('By Wertywin2353)'); }
    document.getElementById("window").style.scale = 1;
    setTimeout(
        function () {
            document.getElementById("profile_photo").style.opacity = "100%";
        }, 500
    );

}

function relink(linkID) {
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
}