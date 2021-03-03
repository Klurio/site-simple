window.addEventListener("load", () => {
    let galleryRoot = document.getElementById("kluring-gallery");

    fetch("../assets/kluringar/data.json")
        .then(response => response.json())
        .then(dataList => {
            getComponent("gallery")
                .then(component => {
                    galleryRoot.appendChild(component);
                })
                .then(() => {
                    let content = galleryRoot.querySelector(".kluring-gallery").querySelector(".gallery-content");

                    getComponent("card")
                        .then(templateCard => {
                            for (data of dataList) {
                                let card = templateCard.cloneNode(deep = true);
                                populateCard(card, data);
                                content.appendChild(card);
                            }
                        })
                });
        })
});

const getComponent = (component) => {
    return new Promise((resolve, reject) => {
        fetch(`../modules/${component}.html`)
            .then(response => response.text())
            .then(text => getDOMFromString(text))
            .then(input => {
                resolve(input)
            });
    });
};

function getDOMFromString(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    let content = doc.querySelector(".auto-fetch");

    return content;
};

function populateCard(card, data) {
    let image = card.querySelector(".image").querySelector("img");
    let text = card.querySelector(".text");
    let link = card.querySelector(".card-url");

    image.src = `../assets/kluringar/images/${data.id}.svg`;
    text.querySelector("h2").innerText = data.title;
    text.querySelector("p").innerText = data.short_description;
    link.href = data.url;
};