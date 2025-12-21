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
                    <Home size={20} />
                </NavLink>

                <a href="#about" className="dock-item" title="About">
                    <Info size={20} />
                </a>

                <a href="#resources" className="dock-item" title="Resource Hub">
                    <BookOpen size={20} />
                </a>

                <div className="dock-divider"></div>

                <button
                    onClick={toggleTheme}
                    className="dock-item"
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </nav>
        </div>
    );
}
