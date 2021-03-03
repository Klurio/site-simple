sectionCount = 2;

window.addEventListener("load", () => {
    let galleryRoot = document.getElementById("kluring-gallery");

    getComponent("gallery")
        .then(component => {
            galleryRoot.appendChild(component);
        })
        .then(() => {
            let gallery = galleryRoot.querySelector(".kluring-gallery").querySelector(".content");
            let sections = gallery.getElementsByClassName("section")

            getComponent("card")
                .then(card => {
                    populateCard(card, {
                        "id": 3,
                        "title": "Vridna former",
                        "short_description": "För att förstå sig på former är det bra att känna igen vad som faktiskt kännetecknar dem. Vilket av alternativen A–D har samma form som bilden till höger, fast vriden?"
                    })
                    sections[0].appendChild(card);
                })

            getComponent("card")
                .then(card => {
                    populateCard(card, {
                        "id": 3,
                        "title": "Vridna former",
                        "short_description": "För att förstå sig på former är det bra att känna igen vad som faktiskt kännetecknar dem. Vilket av alternativen A–D har samma form som bilden till höger, fast vriden?"
                    })
                    sections[0].appendChild(card);
                })

            getComponent("card")
                .then(card => {
                    populateCard(card, {
                        "id": 3,
                        "title": "Vridna former",
                        "short_description": "För att förstå sig på former är det bra att känna igen vad som faktiskt kännetecknar dem. Vilket av alternativen A–D har samma form som bilden till höger, fast vriden?"
                    })
                    sections[1].appendChild(card);
                })

            getComponent("card")
                .then(card => {
                    populateCard(card, {
                        "id": 3,
                        "title": "Vridna former",
                        "short_description": "För att förstå sig på former är det bra att känna igen vad som faktiskt kännetecknar dem. Vilket av alternativen A–D har samma form som bilden till höger, fast vriden?"
                    })
                    sections[1].appendChild(card);
                })
        });
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

    image.src = `../assets/kluringar/images/${data.id}.svg`;
    text.querySelector("h2").innerText = data.title;
    text.querySelector("p").innerText = data.short_description;

    return card
};