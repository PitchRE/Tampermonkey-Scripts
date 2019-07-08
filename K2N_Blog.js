


Find_A_Tag();



function Find_Mirrored() {

    var imgs = Array.prototype.slice.apply(document.getElementsByTagName('img')),

        resultImgs = [];
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].src.indexOf('https://www.mirrorcreator.com/templates/mirror/images/logo.png') !== -1) {
            resultImgs.push(imgs[i]);
        }
    }

    if (resultImgs.length <= 0) {
        return false;
    } else {
        return resultImgs
    }

}

function Find_A_Tag() {

    var Mirrored = Find_Mirrored()

    if (Mirrored != false) {

        var Sibling = Mirrored[0].nextSibling;


        var found = false;

        while (found == false) {


            if (Sibling.nodeName == "A" && Sibling.innerHTML == 'ADF.LY') {
                found = true;
                window.open(Sibling.href, '_blank');
            } else {

                var Sibling = Sibling.nextSibling
            }
           
                window.close();
    
           

        }

    }
}


/// K2N Blog Skip 5 Second thing.

if (window.location.href.indexOf("https://k2nblog.com/goto.html") > -1) {

    decodedlink();
    window.close();
}


/// Mirrored

if (window.location.href.indexOf("mirrored") > -1) {
    document.getElementsByClassName("borderedbtn")[0].click();
    setTimeout(function () {
        window.close();

    }, 2500);
    setTimeout(function () {
        document.getElementsByClassName("get_btn")[0].click();
        setTimeout(function () {
            window.close();

        }, 600);
    }, 2000);

}

// Download from zippyshare.

if (window.location.href.indexOf("zippyshare") > -1) {
    document.getElementsByClassName("download")[0].click();
    setTimeout(function () {
        window.close();

    }, 800);
}

// Download from Mediafire

if (window.location.href.indexOf("mediafire") > -1) {
    document.querySelector('[aria-label="Download file"]').click();

    setTimeout(function () {
        window.close();

    }, 800);
}