import React from 'react';
// const fs = require('fs');

export default function TypeDropdown() {
    // const typesObject = {
    //     name: "",
    //     typeOne: "",
    //     typeTwo: ""
    // }

    // usestate to replace this for storeType
    // const [type, setType] = useState('');

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
        for (var i = 0; i < types.length; i++) {
            //populate dropdown with types
            element.innerHTML = element.innerHTML +
                '<a class="dropdown-item" href="#" value = "' + types[i]['id'] + '">' + types[i]['type'] + '</a>'

        }

    }

    function storeType(element) {
        //returns a tag in list
        const pokeType = element.target;
        console.log(pokeType.text);

        //enter data from dropdowns into typeObject
        //store typeObject as a json file
        // const typesJSON = JSON.stringify(typesObject)
        // fs.writeFileSync('data.json', typesJSON)
    }

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={getTypes}>
                Select Type
      </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={storeType} id="sel"></div>
        </div>
    )
}
