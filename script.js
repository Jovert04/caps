function changeChannel(channelNumber) {
    var iframe = document.getElementById('liveVideo');
    var channelTitle = document.getElementById('channelTitle');
    
    switch(channelNumber) {
        case 1:
            iframe.src = "http://your-channel-1-url";
            channelTitle.textContent = "Channel No.1";
            break;
        case 2:
            iframe.src = "http://your-channel-2-url";
            channelTitle.textContent = "Channel No.2";
            break;
        case 3:
            iframe.src = "http://your-channel-3-url";
            channelTitle.textContent = "Channel No.3";
            break;
        default:
            iframe.src = "http://default-channel-url";
            channelTitle.textContent = "Channel No.1";
    }
}

function toggleFullScreen() {
    var iframe = document.getElementById('liveVideo');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}
