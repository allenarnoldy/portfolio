import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import weatherapp from '../assets/images/weatherapp.jpg';
import Horisean from '../assets/images/Horisean.jpg';
import image3 from '../assets/images/employeeTracker.jpg';
import image4 from '../assets/images/vehicleBuilder.jpg';
import image5 from '../assets/images/WalletWatchers.jpg';
import image6 from '../assets/images/readMe.jpg';
import image7 from '../assets/images/portfolio.jpg';

export default function Portfolio() {
    return (
        <main>
        <section className="hero-banner">
            <h2>Current Projects</h2>
        </section>
        <section>
                <div className="flex-container">
                    <h2 className="side-heading">Work</h2>
                    <div className="flex-item-wrapper">
                        <a href="https://allenarnoldy.github.io/Horisean/" target="_blank" rel="noopener noreferrer" className="flex-item-link">
                            <figure className="page-section flex-item run-buddy" style={{ backgroundImage: `url(${Horisean})` }}>
                                <h3>Horisean</h3>
                                <a href="https://github.com/allenarnoldy/Horisean" target="_blank" rel="noopener noreferrer">
                                    <h3>GitHub</h3>
                                </a>
                            </figure>
                        </a>

                        <div className="container flex-container">
                            <a href="https://weather-dashboard-q8zr.onrender.com" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                                <figure className="page-section flex-item1" style={{ backgroundImage: `url(${weatherapp})` }}>
                                    <h3>Weather App</h3>
                                    <a href="https://github.com/allenarnoldy/weather_dashboard" target="_blank" rel="noopener noreferrer">
                                    <h3>Github</h3>
                                    </a>
                                </figure>
                            </a>
                            <a href="https://github.com/allenarnoldy/employee_tracker" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                            <figure className="page-section flex-item1 react-calc" style={{ backgroundImage: `url(${image3})` }}>
                                <h3>Employee Tracker GH</h3>
                            </figure>
                            </a>
                            <a href="https://github.com/allenarnoldy/vehicle_builder" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                            <figure className="page-section flex-item1 pastel-puzzles" style={{ backgroundImage: `url(${image4})` }}>
                                <h3>Vehicle Builder GH</h3>
                                <a href="https://github.com/allenarnoldy/weather_dashboard" target="_blank" rel="noopener noreferrer">
                                    <h3>Github</h3>
                                </a>
                            </figure>
                            </a>
                            <a href="https://allenarnoldy.github.io/project1/" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                            <figure className="page-section flex-item1 surf-report"style={{ backgroundImage: `url(${image5})` }}>
                                <h3>Waller Watchers</h3>
                                <a href="https://github.com/allenarnoldy/project1" target="_blank" rel="noopener noreferrer">
                                    <h3>Github</h3>
                                </a>
                            </figure>
                            </a>
                            <a href="https://allenarnoldy.github.io/project1/" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                            <figure className="page-section flex-item1 awesome_7"style={{ backgroundImage: `url(${image6})` }}>
                                <h3>ReadMe Generator</h3>
                            </figure>
                            </a>
                            <a href="https://allenarnoldy.github.io/project1/" target="_blank" rel="noopener noreferrer" className="flex-item-link flex2">
                            <figure className="page-section flex-item1 awesome_8"style={{ backgroundImage: `url(${image7})` }}>
                                <h3>Portfolio</h3>
                                <a href="https://github.com/allenarnoldy/portfolio" target="_blank" rel="noopener noreferrer">
                                    <h3>Github</h3>
                                </a>
                            </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
