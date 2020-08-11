window.addEventListener('online',updateStatus);
window.addEventListener('offline',updateStatus);
window.addEventListener('DOMContentLoaded',updateStatus);
let statusIdentifier = document.querySelector("#status-identifier");
let status = document.querySelector("#status");
function updateStatus(e)
{
    if(navigator.onLine){
        statusIdentifier.setAttribute('src','/img/online.png');
        status.classList.remove('offline-status');
        status.classList.add('online-status');
        status.innerHTML = "ONLINE";
    }else{
        statusIdentifier.setAttribute('src','/img/offline.png');
        status.classList.remove('online-status');
        status.classList.add('offline-status');
        status.innerHTML = "OFFLINE";

    }
}