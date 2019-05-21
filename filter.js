var name = prompt("Enter the name of the file", "backdrop.jpg");
img.src = 'images/' + name;

var img = new Image();
img.onload = function() {
    var ctx = document.getElementById('ctx').getContext('2d');
    ctx.drawImage(img, 0, 0);
}
img.src = 'images/backdrop.jpg';
