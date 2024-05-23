document.addEventListener("DOMContentLoaded", () => {

    function option(text) {
        const o = document.createElement("option");
        o.innerText = text;
        return o;
    }

    for (m of mountainsArray) {
        const name = m.name;
        const o = option(name)
        mList.appendChild(o);
    }
    function pick() {
        const m = mountainsArray[mList.selectedIndex - 1];

        mountainResult.innerHTML = `
     <h2>${m.name}</h2>
     Elevation: ( ${m.elevation} )
     <br>
     Effort: ${m.effort}
     <br>
     (Latitude & Longitude): ${m.coords.lat}, ${m.coords.lng}
     <br>
     <p>Description: ${m.desc}</p>
     <img src="./images/${m.img}">
     `;
    }

    mountainsArray.map(option).forEach(oe => mList.appendChild(oe));
    mList.addEventListener("change", pick);

})
