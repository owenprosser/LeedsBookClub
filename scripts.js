window.addEventListener('load', function() {
        var request = new XMLHttpRequest();
        request.open("GET","data.json", false);
        request.send(null);
        var jsonData = JSON.parse(request.responseText);

        reloadContent(jsonData, true);
    })

let bounds;
var book = null;    
document.addEventListener('mousemove', e => {
    if(book != null){
        bounds = book.getBoundingClientRect();
        rotateToMouse(e)
    }
    }, {passive: true})

function rotateToMouse(e) {
    console.log("rotate");
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2 };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    book.style.transform = `
        scale3d(1.03, 1.03, 1.03)
        rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
        )`;

    book.style.backgroundImage = `
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
        var image = this.document.createElement("img");
        image.addEventListener("click", itemClicked, false);
        image.className = "book"
        //image.src = jsonData.books[bookIndex].image_url;
        var id = jsonData.books[bookIndex].image_url.split('/')[1].split('.')[0];
        image.id = id;

        image.addEventListener('mousemove', e => {
            var element = document.elementFromPoint(e.clientX, e.clientY);
            if(element.className == 'book'){
                this.book = element;
            }
          }, {passive: true});
        image.addEventListener('mouseleave', leave);

        parentDiv.append(image);
    }
}

function leave(){
    if(book != null){
        book.style.transform = '';
        book.style.backgroundImage = '';
    }
    book = null;
}

function itemClicked(){
    if(isInViewport(this) || spansViewport(this))
    {
        var id = this.src.split("/")[4].split(".")[0];
        console.log("/book/#"+id);
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

