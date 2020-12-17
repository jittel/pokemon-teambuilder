import React, { useState, useEffect } from 'react';
// const fs = require('fs');

// const mycomponent = React.FunctionComponent


export default function TypeDropdown() {
    const typesObject = {
        name: "",
        typeOne: "",
        typeTwo: ""
    }

    // maybe some usestate to replace this for show


    const getTypes = () => {
        //Json array of types
        const types = [
            { "id": "01", "type": "Normal" },
            { "id": "02", "type": "Fighting" },
            { "id": "03", "type": "Flying" },
            { "id": "04", "type": "Poison" },
            { "id": "05", "type": "Ground" },
            { "id": "06", "type": "Rock" },
            { "id": "07", "type": "Bug" },
            { "id": "08", "type": "Ghost" },
            { "id": "09", "type": "Steel" },
            { "id": "10", "type": "Fire" },
            { "id": "11", "type": "Water" },
            { "id": "12", "type": "Grass" },
            { "id": "13", "type": "Electric" },
            { "id": "14", "type": "Psychic" },
            { "id": "15", "type": "Ice" },
            { "id": "16", "type": "Dragon" },
            { "id": "17", "type": "Dark" },
            { "id": "18", "type": "Fairy" },
        ];

        var element = document.getElementById('sel');
        // if (element = "") {
        for (var i = 0; i < types.length; i++) {
            //populate element with json
            element.innerHTML = element.innerHTML +
                '<option value = "' + types[i]['id'] + '">' + types[i]['type'] + '</option>'
        }
        // }
    }

    function show(element) {
        // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
        const msg = document.getElementById('msg');
        msg.innerHTML = 'Selected Type: <b>' + element.options[element.selectedIndex].text + '</b> </br>' +
            'id: <b>' + element.value + '</b>';
    }

    // getTypes();

    return (
        <div>
            <p>
                <input type="button"
                    onClick={getTypes}
                    value="Click to Populate SELECT with JSON" />
            </p>
            <select id="sel" onChange={show}>
                <option value="">-- Select --</option>
            </select>

            <p id="msg"></p>
        </div>
    )

    //enter data from dropdowns into typeObject
    //store typeObject as a json file
    // const typesJSON = JSON.stringify(typesObject)
    // fs.writeFileSync('data.json', typesJSON)

    //     return (
    //         <div class="dropdown">
    //             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                 Dropdown
    //   </button>
    //             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                 <a class="dropdown-item" href="#">Normal</a>
    //                 <a class="dropdown-item" href="#">Fighting</a>
    //                 <a class="dropdown-item" href="#">Flying</a>
    //                 <a class="dropdown-item" href="#">Poison</a>
    //                 <a class="dropdown-item" href="#">Ground</a>
    //                 <a class="dropdown-item" href="#">Rock</a>
    //                 <a class="dropdown-item" href="#">Bug</a>
    //                 <a class="dropdown-item" href="#">Ghost</a>
    //                 <a class="dropdown-item" href="#">Steel</a>
    //                 <a class="dropdown-item" href="#">Fire</a>
    //                 <a class="dropdown-item" href="#">Water</a>
    //                 <a class="dropdown-item" href="#">Grass</a>
    //                 <a class="dropdown-item" href="#">Electric</a>
    //                 <a class="dropdown-item" href="#">Psychic</a>
    //                 <a class="dropdown-item" href="#">Ice</a>
    //                 <a class="dropdown-item" href="#">Dragon</a>
    //                 <a class="dropdown-item" href="#">Dark</a>
    //                 <a class="dropdown-item" href="#">Fairy</a>
    //             </div>
    //         </div>
    //     )
}