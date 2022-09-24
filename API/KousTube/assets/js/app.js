function searchClicked(){
    var search=document.getElementById("search").value
    // console.log(search);

    let youtube1 = /youtu\.be/gm;
    let youtube2 = /youtube\.com/gm;
    let facebook = /facebook\.com/gm;
    let insta = /instagram\.com/gm;
    let twitter = /twitter\.com/gm;

    let yresult1 = search.search(youtube1);
    let yresult2 = search.search(youtube2);

    let fresult = search.search(facebook);

    let iresult = search.search(insta);

    let tresult = search.search(twitter);

    if (yresult1>=0 || yresult2>=0){
        console.log("youtube");
        document.getElementById("download-btn").removeAttribute('disabled')
        youtubeTheme()
    }else if(fresult>=0){
        console.log("facebook");
        document.getElementById("download-btn").removeAttribute('disabled')
        facebookTheme()
    }else if(iresult>=0){
        console.log("insta");
        document.getElementById("download-btn").removeAttribute('disabled')
        instaTheme()
    }else if(tresult>=0){
        console.log("twitter");
        document.getElementById("download-btn").removeAttribute('disabled')
        twitterTheme()
    }else if(search!=""){
        console.log("unknown");
        document.getElementById("download-btn").disabled="true";
        unknownTheme()
    }else{
        console.log("restore");
        document.getElementById("download-btn").disabled="true";
        restoreTheme()
    }
}


// Themes

function youtubeTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="logo-youtube";
    icon.style.color="red";

    downloadBtn("red")
    
    var wave1=document.getElementById("wave1");
    var wave2=document.getElementById("wave2");
    var wave3=document.getElementById("wave3");
    var wave4=document.getElementById("wave4");
    wave1.style.backgroundImage = "url('./assets/images/wave-yt.png')";
    wave2.style.backgroundImage = "url('./assets/images/wave-yt.png')";
    wave3.style.backgroundImage = "url('./assets/images/wave-yt.png')";
    wave4.style.backgroundImage = "url('./assets/images/wave-yt.png')";

    document.getElementById("footer").style.background="red";

}

function facebookTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="logo-facebook";
    icon.style.color="#1977F2";
    
    downloadBtn("#1977F2")

    var wave1=document.getElementById("wave1");
    var wave2=document.getElementById("wave2");
    var wave3=document.getElementById("wave3");
    var wave4=document.getElementById("wave4");
    wave1.style.backgroundImage = "url('./assets/images/wave-fb.png')";
    wave2.style.backgroundImage = "url('./assets/images/wave-fb.png')";
    wave3.style.backgroundImage = "url('./assets/images/wave-fb.png')";
    wave4.style.backgroundImage = "url('./assets/images/wave-fb.png')";

    document.getElementById("footer").style.background="#1977F2";
}   

function instaTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="logo-instagram";
    icon.style.color="#FE095F";
    
    downloadBtn("#FE095F")
    
    var wave1=document.getElementById("wave1");
        var wave2=document.getElementById("wave2");
        var wave3=document.getElementById("wave3");
        var wave4=document.getElementById("wave4");
        wave1.style.backgroundImage = "url('./assets/images/wave-ig-y.png')";
        wave2.style.backgroundImage = "url('./assets/images/wave-ig-r.png')";
        wave3.style.backgroundImage = "url('./assets/images/wave-ig-p.png')";
        wave4.style.backgroundImage = "url('./assets/images/wave-ig-v.png')";

        document.getElementById("footer").style.background="#FFA350";
}

function twitterTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="logo-twitter";
    icon.style.color="#179CF0";

    downloadBtn("#179CF0")
    
    var wave1=document.getElementById("wave1");
    var wave2=document.getElementById("wave2");
    var wave3=document.getElementById("wave3");
    var wave4=document.getElementById("wave4");
    wave1.style.backgroundImage = "url('./assets/images/wave-tw.png')";
    wave2.style.backgroundImage = "url('./assets/images/wave-tw.png')";
    wave3.style.backgroundImage = "url('./assets/images/wave-tw.png')";
    wave4.style.backgroundImage = "url('./assets/images/wave-tw.png')";

    document.getElementById("footer").style.background="#179CF0";
}   

function unknownTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="alert";
    icon.style.color="#820AFC";

    downloadBtn("#820AFC")
    
    var wave1=document.getElementById("wave1");
    var wave2=document.getElementById("wave2");
    var wave3=document.getElementById("wave3");
    var wave4=document.getElementById("wave4");
    wave1.style.backgroundImage = "url('./assets/images/wave-ig-v.png')";
    wave2.style.backgroundImage = "url('./assets/images/wave-ig-v.png')";
    wave3.style.backgroundImage = "url('./assets/images/wave-ig-v.png')";
    wave4.style.backgroundImage = "url('./assets/images/wave-ig-v.png')";
    document.getElementById("footer").style.background="#820AFC";
}

function restoreTheme(){
    var icon=document.getElementById("video_icon");
    icon.name="no";

    downloadBtn("#3586ff")

    var wave1=document.getElementById("wave1");
    var wave2=document.getElementById("wave2");
    var wave3=document.getElementById("wave3");
    var wave4=document.getElementById("wave4");
    wave1.style.backgroundImage = "url('./assets/images/wave.png')";
    wave2.style.backgroundImage = "url('./assets/images/wave.png')";
    wave3.style.backgroundImage = "url('./assets/images/wave.png')";
    wave4.style.backgroundImage = "url('./assets/images/wave.png')";

    document.getElementById("footer").style.background="#3586ff";
}



function downloadBtn(color){
    var btn=document.getElementById("download-btn")
    btn.style.color=color
    btn.style.border="3px solid "+color
    btn.style.boxShadow=" 0 0 5px "+ color;
}