window.addEventListener('load', function() {
    var request = new XMLHttpRequest();
    request.open("GET","../data.json", false);
    request.send(null);
    var jsonData = JSON.parse(request.responseText);
    reloadContent(jsonData);
})

function reloadContent(jsonData)
{
    var bookCount = Object.keys(jsonData.books).length;

    var bookIndex = window.location.hash.substr(1);
    bookIndex -= 1;

    var img = document.getElementById("image");
    var author = document.getElementById("author");
    var title = document.getElementById("title");
    var synopsis = document.getElementById("synopsis");
    var selector = document.getElementById("selector");
    var date = document.getElementById("date");  

    if(bookIndex < bookCount)
    {
        img.src =  "../" + jsonData.books[bookIndex].image_url;
        author.textContent = jsonData.books[bookIndex].author;
        title.textContent = jsonData.books[bookIndex].title;
        synopsis.textContent = jsonData.books[bookIndex].synopsis;
        selector.textContent = jsonData.books[bookIndex].selector;
        date.textContent = jsonData.books[bookIndex].date;
    }
    else
    {
        img.src =  "../" + "covers/404.jpg";
        author.textContent = "Book not found";
        title.textContent = "index out of range";
        synopsis.textContent = "Check URL ID";
        selector.textContent = "";
        date.textContent = "";
    }
}