import React from 'react';
import { Home, Info, Smartphone, BookOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="dock-container">
            <nav className="dock glass">
                <NavLink
                    to="/"
                    className={({ isActive }) => `dock-item ${isActive ? 'active' : ''}`}
                    title="Home"
                >
                    <Home size={16} />
                </NavLink>

                <a href="#about" className="dock-item" title="About">
                    <Info size={16} />
                </a>

                <a href="#resources" className="dock-item" title="Resource Hub">
                    <BookOpen size={16} />
                </a>

                <div className="dock-divider"></div>

                <button
                    onClick={toggleTheme}
                    className="dock-item"
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </button>
            </nav>
        </div>
    );
}
