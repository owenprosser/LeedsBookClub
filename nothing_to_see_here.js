window.addEventListener('load', function() {
    var paramFound = paramCheck();
    if(!paramFound){
        dateSystem();
    }
})

function start_fireworks(){
    var canvas = document.createElement('canvas');
    var container = document.getElementById('books-grid')
    container.appendChild(canvas);
    const fireworks = new Fireworks.default(canvas);
    fireworks.start();
}

function paramCheck(){
    var paramFound = false;
    var param = window.location.hash.substr(1);

    if(param == 'fw' || param == "fireworks")
    {
        paramFound = true;
        start_fireworks();
    }

    return paramFound;
}

function dateSystem(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var link = document.getElementById("footer-link");

    switch(dd+mm)
    {
        case("0101"):
            link.textContent = "🤕";
            link.title = "Hope you're not too hungover!"
            removeFooterIcon();
            break;
        case("1402"):
            link.textContent = "❤️";
            link.title = "Happy Valentines day!"
            removeFooterIcon();
            break;
        case("2902"):
            link.textContent = "🦘";
            link.title = "Happy leap day!"
            removeFooterIcon();
            break;
        case("0103"):
            link.textContent = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
            link.title = "Dydd Gŵyl Dewi Sant Hapus!"
            removeFooterIcon();
            break;
        case("1703"):
            link.textContent = "☘️";
            link.title = "What's the craic?"
            removeFooterIcon();
            break;
        case("2103"):
            link.textContent = "🌼";
            link.title = "Spring has sprung!"
            removeFooterIcon();
            break;
        case("0104"):
            link.textContent = "🎁";
            link.title = "Click me!"
            link.href = "https://youtu.be/dQw4w9WgXcQ?si=S755CMWUE4rlxwz_&t=1"
            removeFooterIcon();
            break;
        case("0504"):
            link.textContent = "👩‍🦰";
            link.title = "Happy birthday Katie! 🥳"
            link.href = "https://katiesquir.es"
            removeFooterIcon();
            break;
        case("2304"):
            link.textContent = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
            removeFooterIcon();
            break;
        case("0106"):
            link.textContent = "🏳️‍🌈";
            link.title = "Happy pride month! (rainbow-washing)"
            removeFooterIcon();
            break;
        case("0407"):
            link.textContent = "🇺🇸";
            link.title = "USA! USA! USA!"
            removeFooterIcon();
            break;
        case("1009"):
            link.textContent = "🥳"
            link.title = "Happy birthday me! 🥳"
            removeFooterIcon();
            break;
        case("3110"):
            link.textContent = "🎃";
            link.title = "BOO!"
            removeFooterIcon();
            break;
        case("0511"):
            link.textContent = "🎆";
            link.title = "BANG! BOOM!"
            removeFooterIcon();
            start_fireworks();
            break;
        case("3011"):
            link.textContent = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
            removeFooterIcon();
            break;
        case("2412"):
        case("2512"):
        case("2612"):
            link.textContent = "🎅🏻";
            link.title = "Merry Christmas! 🥳"
            removeFooterIcon();
            break;        
        case("3112"):
            link.textContent = "🍾";
            link.title = "Happy new year!"
            removeFooterIcon();
            start_fireworks();
            break;
    }
}

function removeFooterIcon(){
    element = document.getElementById('footer_icon');
    element.remove();
}

function start_fireworks(){
    var canvas = document.createElement('canvas');
    var container = document.getElementById('books-grid')
    container.appendChild(canvas);
    const fireworks = new Fireworks.default(canvas);
    fireworks.start();
}