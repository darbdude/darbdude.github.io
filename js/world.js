room.onLoad = function() {
    StartMusic();
}

room.update = function(p_dt) {
    

}

function LightOff() 
{    
    room.objects["OmniLight01"].col = "#ff0000";
    room.objects["OmniLight01"].light_intensity = 16;


}

function LightOn() 
{    
    room.objects["OmniLight01"].col = "0 1 0";
    room.objects["OmniLight01"].light_intensity = 160;

}





function SetLightProperties()
{
    room.objects["OmniLight01"].col="#2668b2";
    room.objects["OmniLight01"].light_intensity = 16;
}

function StartMusic()
    {
        room.playSound("backgroundsound01");
}

function StartSphere() {
    room.playSound("backgroundsound01");
}