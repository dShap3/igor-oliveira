const projects = 
[
    {
        company_name: "Salmon River Adventures",
        reason: "HTML5, CSS3 & Javascript",
        link_attribute: "https://igorcopa.github.io/salmon-river-adventures/"
    },
    {
        company_name: "Idaho State Weather",
        reason: "HTML5, CSS3 & Javascript",
        link_attribute: "https://igorcopa.github.io/lesson11/index.html"
    },
    {
        company_name: "Snake Game",
        reason: "HTML5 & Javascript",
        link_attribute: "https://igorcopa.github.io/snake-game/"
    },
    {
        company_name: "To Do List",
        reason: "HTML5, CSS3 & Javascript",
        link_attribute: "https://igorcopa.github.io/to-do-list/"
    },
    {
        company_name: "Calculator",
        reason: "HTML5, CSS3 & Javascript",
        link_attribute: "https://igorcopa.github.io/calculator/"
    },
    {
        company_name: "LDS Prophets",
        reason: "HTML5 & CSS3",
        link_attribute: "https://igorcopa.github.io/lesson9/prophets.html"
    },
    {
        company_name: "Bearded Ones",
        reason: "HTML5 & CSS3",
        link_attribute: "https://igorcopa.github.io/bearded-ones/"
    },
    {
        company_name: "Locked and Loaded",
        reason: "HTML5 & CSS3",
        link_attribute: "https://igorcopa.github.io/locked-and-loaded/"
    },
    {
        company_name: "Worldly Paradise",
        reason: "HTML5 & CSS3",
        link_attribute: "https://igorcopa.github.io/worldly-paradise/"
    },
    {
        company_name: "Brazilian Paradise",
        reason: "HTML5 & CSS3",
        link_attribute: "https://igorcopa.github.io/paraisos-brasileiros/"
    }
]

function renderOnScreen() {
    const overlays = document.querySelectorAll(".project-images-overlay");
    let count = 0;
    projects.map((project) => {
        overlays.forEach((overlay) => {
            
            const heading3 = document.createElement("h3");
            const h3Text = document.createTextNode(projects[count].company_name);
            heading3.appendChild(h3Text);

            const heading4 = document.createElement("h4");
            const h4Text = document.createTextNode(projects[count].reason);
            heading4.appendChild(h4Text);

            const aLink = document.createElement("a");
            aLink.setAttribute("href", projects[count].link_attribute);
            aLink.setAttribute("target", "_blank");
            const aLinkText = document.createTextNode("View Project");
            aLink.appendChild(aLinkText);

            overlay.appendChild(heading3);
            overlay.appendChild(heading4);
            overlay.appendChild(aLink);

            count++;

            overlay.onmouseover = () => {
                heading3.classList.add("show");
                heading4.classList.add("show");
                aLink.classList.add("show");
            }

            overlay.onmouseout = () => {
                heading3.classList.remove("show");
                heading4.classList.remove("show");
                aLink.classList.remove("show");
            }
        });
    });
}
window.addEventListener("load", renderOnScreen);