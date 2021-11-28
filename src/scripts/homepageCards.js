window.onload = () => {

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const cardRow = document.getElementById('cardRow');

    //#region - API request and create blog cards from result
    var request = new XMLHttpRequest();  //variable to use XML for a request to api 
    request.open('GET', 'https://p110136416-2.free.beeceptor.com/blogs', true); //use request to open channel
    request.onload = function() //when response loads, do function to follow in {}
    {
        var data = JSON.parse(this.response);  //load the response of request, and parse it as JSON
        if (request.status >= 200 && request.status < 400) //check in case of 404 not found etc
        {
            data = shuffle(data);
            let count = 0;

            if (data.length >= 3) { count = 3; }
            else { count = data.length }

            for (let i = 0; i < count; i++)
            {
                //#region - create variables and elements
                const cardContainer = document.createElement('div');
                cardContainer.setAttribute('class', 'col s12 m4');

                const card = document.createElement('div');
                card.setAttribute('class', 'card medium hoverable yellow lighten-4');
                
                const cardContent = document.createElement('div');
                cardContent.setAttribute('class', 'card-content deep-purple-text');

                const cardTitle = document.createElement('span');
                cardTitle.setAttribute('class', 'card-title');

                const cardTitleBold = document.createElement('b');

                const cardDescription = document.createElement('p');
                //#endregion

                cardTitleBold.textContent = data[i].title;
                data[i].content = data[i].content.substring(0, 497);  //overwrite the locally stored version of response data
                cardDescription.textContent = data[i].content+"...";

                cardRow.appendChild(cardContainer);
                cardContainer.appendChild(card);
                card.appendChild(cardContent);
                cardContent.appendChild(cardTitle);
                cardTitle.appendChild(cardTitleBold);
                cardContent.appendChild(cardDescription);
            }
        } 

        else
        {
            const message = document.createElement('marquee');
            message.textContent = "Apologies, blogs did not load.";
            cardRow.appendChild(message);
        }
    }
    request.send();
    //#endregion
}