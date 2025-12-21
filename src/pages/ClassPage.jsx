import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, Download } from 'lucide-react';
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
            <div className="flex items-center gap-4 mb-8">
                <Link to="/" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-primary">Class {standard}</h1>
                    <p className="text-text-secondary">Study Material & Resources</p>
                </div>
            </div>

            {/* Subject Tabs */}
            <div className="tabs-container mb-8">
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
