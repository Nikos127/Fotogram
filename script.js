function resp_overlay(event){
    document.getElementById('resp_image').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
     event.stopPropagation();
}

function overlay_close(event){
    document.getElementById('resp_image').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
    event.stopPropagation();
}
