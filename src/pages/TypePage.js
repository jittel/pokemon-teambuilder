import React from 'react';
// import Dropdown from '../components/TypeDropdown';
import TypeRow from '../components/TypeRow'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


export default function TypePage() {
    return (
        <div>
            <Navbar />
                <TypeRow />
                <TypeRow />
                <TypeRow />
                <TypeRow />
                <TypeRow />
                <TypeRow />
            <Footer />
        </div>
    )
}