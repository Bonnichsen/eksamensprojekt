let jSonUrl = "http://benjaminbonnichsen.dk/food8/wordpress/wp-json/wp/v2/restauranter";
        let display = document.querySelector("[data-templatedisplay]");
        let template = document.querySelector("[data-template]");
        let steder = [];


        document.addEventListener("DOMContentLoaded", hentJson);

        async function hentJson() {
            let dataJson = await fetch(jSonUrl);
            steder = await dataJson.json();
            console.log("Stop making fetch happen Gretchen!");
            visSteder();
        };


        function visSteder() {
            steder.forEach(sted => {
                console.log(sted);
                let templateModtager = document.querySelector("[data-container]");
                let klon = template.cloneNode(true).content;

                // klon.querySelector("[data-overskrift]").textContent = sted.title.rendered;
                klon.querySelector("[data-billede]").src = sted.acf.billede;
                klon.querySelector("[data-stedlogo]").src = sted.acf.stedlogo.url;
                klon.querySelector("[data-button]").addEventListener("click", () => {
                    location.href = "sted.html?id=" + sted.id;
                });
                klon.querySelector("[data-button-img]").addEventListener("click", () => {
                    location.href = "sted.html?id=" + sted.id;
                });
                klon.querySelector("[data-button-tekst]").addEventListener("click", () => {
                    location.href = "sted.html?id=" + sted.id;
                });

                templateModtager.appendChild(klon);
                console.log("The Klon War is over!")
            });
        }
