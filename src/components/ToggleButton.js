import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function ToggleButton({darkMode,setDarkMode}){
    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div>
            <button onClick={toggleMode} className="dark-mode-toggle">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
        </div>
    );
}