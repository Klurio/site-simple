sectionCount = 2;

window.onload = () => {
    let galleryRoot = document.getElementById("kluring-gallery");

    getComponent("gallery")
        .then(component => {
            galleryRoot.appendChild(component);
        })
        .then(() => {
            let gallery = galleryRoot.querySelector(".kluring-gallery").querySelector(".content");
            let sections = gallery.getElementsByClassName("section")

            getComponent("card")
                .then(component => {
                    sections[0].appendChild(component);
                })

            getComponent("card")
                .then(component => {
                    sections[1].appendChild(component);
                })
        });
};

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