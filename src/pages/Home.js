import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div class="container">
                <div style={{ 'margin-top': '80px' }} class="jumbotron text-center">
                    <h1 class="display-4">Type Matchup Assistant <span role="img" aria-label="Memo">📝</span></h1>
                    <h4 class="mt-4">Enter your team's current types to get suggestions to balance out your team.</h4>
                    <a class="btn btn-primary btn-lg mt-4" href="/types" >Get Started</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}