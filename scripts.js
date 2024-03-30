function showFrogImage() {
    var imageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Yogi_Bear_Yogi_Bear.png/220px-Yogi_Bear_Yogi_Bear.png";
    document.getElementById("myImage1").src = imageUrl;
    document.getElementById("imageContainer1").style.display = "block";
}

function hideFrogImage() {
    document.getElementById("imageContainer1").style.display = "none";
}

function showKermitImage() {
    var imageUrl = "https://historicmissourians.shsmo.org/wp-content/uploads/2020/07/berra1-1.jpg";
    document.getElementById("myImage2").src = imageUrl;
    document.getElementById("imageContainer2").style.display = "block";
}

function hideKermitImage() {
    document.getElementById("imageContainer2").style.display = "none";
}

