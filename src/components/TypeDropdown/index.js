import React from 'react';

export default function TypeDropdown() {
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
  </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Normal</a>
                <a class="dropdown-item" href="#">Fighting</a>
                <a class="dropdown-item" href="#">Flying</a>
                <a class="dropdown-item" href="#">Poison</a>
                <a class="dropdown-item" href="#">Ground</a>
                <a class="dropdown-item" href="#">Rock</a>
                <a class="dropdown-item" href="#">Bug</a>
                <a class="dropdown-item" href="#">Ghost</a>
                <a class="dropdown-item" href="#">Steel</a>
                <a class="dropdown-item" href="#">Fire</a>
                <a class="dropdown-item" href="#">Water</a>
                <a class="dropdown-item" href="#">Grass</a>
                <a class="dropdown-item" href="#">Electric</a>
                <a class="dropdown-item" href="#">Psychic</a>
                <a class="dropdown-item" href="#">Ice</a>
                <a class="dropdown-item" href="#">Dragon</a>
                <a class="dropdown-item" href="#">Dark</a>
                <a class="dropdown-item" href="#">Fairy</a>
            </div>
        </div>
    )
}