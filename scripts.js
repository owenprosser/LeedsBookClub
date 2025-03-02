window.addEventListener('load', function() {
        var request = new XMLHttpRequest();
        request.open("GET","data.json", false);
        request.send(null);
        var jsonData = JSON.parse(request.responseText);

        reloadContent(jsonData, true);
    })

function isDesktop() {
    let isMobile = '';
    
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        isMobile = true;
    } 
    else {
        isMobile = false;
    }
    return isMobile;
}

let bounds;
var book = null;
var glowDiv = null;
document.addEventListener('mousemove', e => {
    if(book != null && !isDesktop()){
        bounds = book.getBoundingClientRect();
        rotateToMouse(e)
    }
    }, {passive: true})

function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2 };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    book.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
        )`;

    glowDiv.style.backgroundImage = `
        radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
        )`;
}

function reloadContent(jsonData, reverseOrder)
{
    var parentDiv = document.getElementById("books-grid");

    if(reverseOrder)
    {
        jsonData.books = jsonData.books.reverse();
    }

    for (var bookIndex = 0; bookIndex < jsonData.books.length; bookIndex++)
    {
        var card = this.document.createElement("div");
        card.addEventListener("click", itemClicked, false);
        card.className = "book"
        card.style.backgroundImage = "url("+jsonData.books[bookIndex].image_url+")";
        var id = jsonData.books[bookIndex].image_url.split('/')[1].split('.')[0];
        card.id = id;

        glowDiv = document.createElement('div');
        card.addEventListener("click", itemClicked, false);
        glowDiv.className = "glow";
        glowDiv.id = id;
        card.append(glowDiv);

        card.addEventListener('mousemove', e => {
            var element = document.elementFromPoint(e.clientX, e.clientY);
            if(element.className == 'book'){
                this.book = element;
                this.glowDiv = book.children[0];
            }
            if(element.className == 'glow'){
                this.glowDiv = element;
                this.book = element.parentNode;
            }
          }, {passive: true});
          card.addEventListener('mouseleave', leave);

        parentDiv.append(card);
    }
}

function leave(){
    if(book != null && glowDiv != null){
        book.style.transform = '';
        glowDiv.style.backgroundImage = '';
    }
    book = null;
}

function itemClicked(){
    console.log("click");
    if(isInViewport(this) || spansViewport(this))
    {
        var id = this.id;
        window.location.href = "/book/#"+id;
    }
    else
    {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function spansViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right >= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function closeDetail(){
    var item = document.getElementById('detailPopup');
    item.style.display = "none";
}

