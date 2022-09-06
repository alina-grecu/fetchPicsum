// let dataApi = fetch("https://jsonplaceholder.typicode.com/todos/1")
let url = fetch("https://picsum.photos/v2/list?limit=10");

url.then(async(response) => {
    console.log(response);
    const rep = await response.json();
    console.log(rep);

    try {
        var image = rep;
        image.forEach(image => {
            let card = new Card(image.author, image.download_url, image.url, image.height, image.width);
            card.createCard();
            let imageUrl = card.imageSize(card.imageUrl, card.imageHeight, card.imageWidth);
            card.fillCard(imageUrl, card.imageAuthor, card.imageDldUrl);
            card.appendCard();
        });
    }
    catch(err){
        console.log(err)
    }
});

let main, author, button, side, img, aside, originalUrl;
let globalSection = document.querySelector(".globalSection");

class Card {
    constructor(imageAuthor, imageUrl, imageDldUrl, imageHeight, imageWidth) {
        this.imageAuthor = imageAuthor,
        this.imageUrl = imageUrl,
        this.imageDldUrl = imageDldUrl,
        this.imageHeight = imageHeight,
        this.imageWidth = imageWidth
    }

    imageSize(imageUrl, imageHeight, imageWidth) {
        imageUrl = imageUrl.replace(imageHeight, 600).replace(imageWidth, 600);
        return imageUrl;
    }

    createCard() {
        main = document.querySelector(".card");
        author = document.querySelector(".author");
        button = document.querySelector(".visit");
        aside = document.querySelector(".photo");
        img = document.querySelector("img");
        originalUrl = document.querySelector("a");
    }

    fillCard(imageUrl, imageAuthor, imageDldUrl) {
        img.setAttribute("src", imageUrl);
        author.textContent = imageAuthor;
        originalUrl.setAttribute("href", imageDldUrl);
        button.textContent = "Visit";
    }

    appendCard() {
        globalSection.append(main);
    }
}
