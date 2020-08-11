window.addEventListener('online',updateStatus);
window.addEventListener('offline',updateStatus);
window.addEventListener('DOMContentLoaded',updateStatus);
let statusIdentifier = document.querySelector("#status-identifier");
function updateStatus(e)
{
    if(navigator.onLine){
        statusIdentifier.setAttribute('src','/img/online.png');
    }else{
        statusIdentifier.setAttribute('src','/img/offline.png');

    }
}