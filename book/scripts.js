window.addEventListener('load', function() {
    var request = new XMLHttpRequest();
    request.open("GET","../data.json", false);
    request.send(null);
    var jsonData = JSON.parse(request.responseText);
    reloadContent(jsonData);
})

function reloadContent(jsonData)
{
    var img = document.getElementById("image");
    var author = document.getElementById("author");
    var title = document.getElementById("title");
    var synopsis = document.getElementById("synopsis");
    var selector_date = document.getElementById("selector-date");

    var bookIndex = +window.location.hash.substr(1);
    bookIndex -= 1;

    img.src =  "../" + jsonData.books[bookIndex].image_url;
    author.textContent = jsonData.books[bookIndex].author;
    title.textContent = jsonData.books[bookIndex].title;
    synopsis.textContent = jsonData.books[bookIndex].synopsis;
    selector_date.textContent = jsonData.books[bookIndex].selector + " - " + jsonData.books[bookIndex].date;
}