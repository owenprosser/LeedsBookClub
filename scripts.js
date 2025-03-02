window.addEventListener('load', function() {
        var request = new XMLHttpRequest();
        request.open("GET","data.json", false);
        request.send(null);
        var jsonData = JSON.parse(request.responseText);

        reloadContent(jsonData, true);
    })

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
        image.src = jsonData.books[bookIndex].image_url;
        parentDiv.append(image);
    }

    secretFunc();
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
