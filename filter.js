var invert = function() {
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
var img = document.getElementById("output");
context.drawImage(img, 10, 10);
var imageData = context.getImageData(img.x, img.y, image.width, image.height);
var dataArr = imageData.data;

for(var i = 0; i < dataArr.length; i += 4)
{
    var r = dataArr[i]; // Red color lies between 0 and 255
    var g = dataArr[i + 1]; // Green color lies between 0 and 255
    var b = dataArr[i + 2]; // Blue color lies between 0 and 255
    var a = dataArr[i + 3]; // Transparency lies between 0 and 255

    var invertedRed = 255 - r;
    var invertedGreen = 255 - g;
    var invertedBlue = 255 - b;

    dataArr[i] = invertedRed;
    dataArr[i + 1] = invertedGreen;
    dataArr[i + 2] = invertedBlue;
}
        
context.putImageData(imageData, imageX, imageY);
}
