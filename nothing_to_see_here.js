window.addEventListener('load', function() {
    secretFunc();
})

function secretFunc(){ //No peeking!
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var link = document.getElementById("footer-link");

    switch(dd+mm)
    {
        case("0101"):
            link.textContent = "🤕";
            link.title = "Hope you're not too hungover!"
            break;
        case("1402"):
            link.textContent = "❤️";
            link.title = "Happy Valentines day!"
            break;
        case("2902"):
            link.textContent = "🦘";
            link.title = "Happy leap day!"
            break;
        case("0103"):
            link.textContent = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
            link.title = "Dydd Gŵyl Dewi Sant Hapus!"
            break;
        case("1703"):
            link.textContent = "☘️";
            link.title = "What's the craic?"
            break;
        case("2103"):
            link.textContent = "🌼";
            link.title = "Spring has sprung!"
            break;
        case("0104"):
            link.textContent = "🎁";
            link.title = "Click me!"
            link.href = "https://youtu.be/dQw4w9WgXcQ?si=S755CMWUE4rlxwz_&t=1"
            break;
        case("0504"):
            link.textContent = "👩‍🦰";
            link.title = "Happy birthday Katie! 🥳"
            link.href = "https://katiesquir.es"
            break;
        case("2304"):
            link.textContent = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
            break;
        case("0106"):
            link.textContent = "🏳️‍🌈";
            link.title = "Happy pride month! (rainbow-washing)"
            break;
        case("0407"):
            link.textContent = "🇺🇸";
            link.title = "USA! USA! USA!"
            break;
        case("1009"):
            link.textContent = "🥳"
            link.title = "Happy birthday me! 🥳"
            break;
        case("3110"):
            link.textContent = "🎃";
            link.title = "BOO!"
            break;
        case("0511"):
            link.textContent = "🎆";
            link.title = "BANG! BOOM!"
            break;
        case("3011"):
            link.textContent = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
            break;
        case("2412"):
        case("2512"):
        case("2612"):
            link.textContent = "🎅🏻";
            link.title = "Merry Christmas! 🥳"
            break;        
        case("3112"):
            link.textContent = "🍾";
            link.title = "Happy new year!"
            break;
    }
}