import React from 'react';
import Dropdown from '../TypeDropdown'

export default function typeRow() {
    //make rows of two types a single component
    return (
        <div class='row'>
            <Dropdown />
            <Dropdown />
        </div>
    )
}