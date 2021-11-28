window.onload = () => {

    const ul = document.getElementById('blogLinks');

    //#region - API request and create blog cards from result
    var request = new XMLHttpRequest();  //variable to use XML for a request to api 
    request.open('GET', 'https://p110136416-2.free.beeceptor.com/blogs', true); //use request to open channel
    request.onload = function() //when response loads, do function to follow in {}
    {
        var data = JSON.parse(this.response);  //load the response of request, and parse it as JSON
        if (request.status >= 200 && request.status < 400) //check in case of 404 not found etc
        {
            data.forEach(blog =>
            {
                const li = document.createElement('li');

                const link = document.createElement('a');
                link.setAttribute('href', "/blog?id="+blog.id);
                link.textContent = blog.date + ": "+blog.title;
                ul.appendChild(li);
                li.appendChild(link);
                console.log(link);
            })
        } 
        else
        {
            const message = document.createElement('marquee');
            message.textContent = "Apologies, blogs did not load.";
            ul.appendChild(message);
        }
    }
    request.send();
    //#endregion
}