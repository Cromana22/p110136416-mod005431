window.onload = () => {

    const div = document.getElementById('blogMain');

    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));

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
                if (blog.id === id)
                {
                    const p = document.createElement('p');
                    p.setAttribute('class', "flow-text left-align");
                    p.textContent = blog.content;
                    div.appendChild(p);
                }
            })
        } 
        else
        {
        const message = document.createElement('marquee');
        message.textContent = "Apologies, blog did not load.";
        div.appendChild(message);
        }
    }
    request.send();
    //#endregion
}