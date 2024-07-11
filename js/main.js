function btn_click(el){
    let op = document.querySelector("#pronostico > input:checked").value;

    function cambiarColor(target, color){
        target.style.fill = color;
    }

    colores = {
        "fractura" : getComputedStyle(document.documentElement).getPropertyValue("--fractura-color"),
        "extraccion": getComputedStyle(document.documentElement).getPropertyValue("--extraccion-color"),
        "restauracion": getComputedStyle(document.documentElement).getPropertyValue("--restauracion-color")
    }


    cambiarColor(el.target, colores[op])
}


(() => {
    async function getTemplate() {
        let templates = document.createElement("template");
        templates.innerHTML = await( await fetch("html/diente.html") ).text();
        let template = templates.content.getElementById("diente-template").content;
        return document.importNode(template, true);
    }

    async function crearMandibula(idx) {
        let mandibula = document.createElement("tr");
        for(let i=0; i<16; i++){
            let diente = await getTemplate();
            diente.querySelector(".numero").innerHTML = i + 16*idx + 1;
            mandibula.appendChild(diente);
        }
        document.getElementById("dentadura").appendChild(mandibula);
    }
    
    crearMandibula(0);
    crearMandibula(1);

})();
