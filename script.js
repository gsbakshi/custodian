var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'https://images.unsplash.com/photo-1600251899164-a74444168f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

imgArray[1] = new Image();
imgArray[1].src = 'https://images.unsplash.com/photo-1600102975337-e66752d32557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

imgArray[2] = new Image();
imgArray[2].src = 'https://images.unsplash.com/photo-1600096252269-b73dbc724be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80';

imgArray[3] = new Image();
imgArray[3].src = 'https://images.unsplash.com/photo-1600255940000-324ee8804c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

imgArray[4] = new Image();
imgArray[4].src = 'https://images.unsplash.com/photo-1600250589841-15019e10a12c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

imgArray[5] = new Image();
imgArray[5].src = 'https://images.unsplash.com/photo-1600205045567-145c5b32cdf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

function nextImage(element) {
    var img = document.getElementById(element);

    for (var i = 0; i < imgArray.length; i++) {
        if (i == imgArray.length) {
            i = 0;
        }
        if (imgArray[i].src == img.src) // << check this
        {
            if (i === imgArray.length) {
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i + 1].src;
            break;
        }
    }
}