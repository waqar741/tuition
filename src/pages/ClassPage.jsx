import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, Download, Users } from 'lucide-react';
import './ClassPage.css';

// Dummy Data Generator
const subjects = ['Science', 'Math', 'English', 'Social Science'];
const generateNotes = (std, sub) => Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    title: `${sub} Chapter ${i + 1}: Notes & Q/A`,
    type: 'PDF',
    date: '2025-12-20'
}));

export default function ClassPage() {
    const { standard } = useParams();
    const [activeSubject, setActiveSubject] = useState(subjects[0]);

    // Mock Data
    const notes = generateNotes(standard, activeSubject);

    return (
        <div className="page-container container py-10 pb-24">
            {/* Header / Nav Back */}
            <div className="page-header">
                <Link to="/" className="back-btn">
                    <ArrowLeft size={24} />
                </Link>
                <div className="header-content">
                    <h1 className="page-title">Class {standard}</h1>
                    <p className="page-subtitle">Study Material & Resources</p>
                </div>
                <div className="header-contact-wrapper">
                    <Link to="/contact" className="contact-btn-small">
                        <Users size={18} />
                        Contact Sir
                    </Link>
                </div>
            </div>

            {/* Subject Tabs */}
            <div className="tabs-container">
                {subjects.map((sub) => (
                    <button
                        key={sub}
                        onClick={() => setActiveSubject(sub)}
                        className={`tab-btn ${activeSubject === sub ? 'active' : ''}`}
                    >
                        {sub}
                    </button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="notes-grid">
                {notes.map((note) => (
                    <div key={note.id} className="note-card glass">
                        <div className={`icon-box ${note.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                            {note.type === 'PDF' ? <FileText size={24} /> : <Video size={24} />}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
                            <div className="text-sm text-text-tertiary flex items-center gap-2">
                                <span>{note.type}</span>
                                <span>•</span>
                                <span>{note.date}</span>
                            </div>
                        </div>
                        <button className="download-btn" title="Download">
                            <Download size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
