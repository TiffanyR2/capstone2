function option(text) {
    const o = document.createElement("option");
    o.innerText = text;
    return o;
}

document.addEventListener("DOMContentLoaded", () => {
    function radioChange() {
        if (searchByL.checked) {
            parkLabel.style.display = "none";
        locationLabel.style.display = "block";
        } else { 
            parkLabel.style.display = "block";
            locationLabel.style.display = "none";
        }
    }

    locationsArray.map(option).forEach(oe => locations.appendChild(oe));
    parkTypesArray.map(option).forEach(pto => parkType.appendChild(pto));
    locations.addEventListener("change", draw);
    parkType.addEventListener("change", draw);
    const radioList = document.querySelectorAll("input[name=searchBy]")
    radioList.forEach(r => r.addEventListener("change", radioChange))

    function draw() {

        result.innerHTML = ``;


        let filtered;

        if (searchByL.checked) {
            filtered = nationalParksArray.filter(p => p.State === locations.value)

        } else {
            filtered = nationalParksArray.filter(p => p.LocationName.includes(parkType.value))

        }

        for (p of filtered) {
            result.innerHTML += ` 
  <h1> ${p.LocationName}</h1>
Address: ${p.Address}
<br>
City: ${p.City}
<br>
State: ${p.State},
Zipcode: ${p.ZipCode}
<br>
Phone Number: ${p.Phone}
<br>
Fax: ${p.Fax}
<br>
    Location: (${p.Location.coordinates[0]}, ${p.Location.coordinates[1]}),
${p.Location.type}
  `;

        }
    }

})
