import React from 'react';
import Dropdown from '../components/TypeDropdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


export default function TypePage() {
    return (
        <div>
            <Navbar />
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <div class='row'>
                <Dropdown />
                <Dropdown />
            </div>
            <Footer />
        </div>
    )
}