import React, { useState, useEffect } from 'react'; // Added useEffect
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, Download, Users, Loader2 } from 'lucide-react'; // Added Loader2
import { dataService } from '../services/dataService'; // Import dataService
import './ClassPage.css';

const subjects = ['Science', 'Math', 'English', 'Social Science'];

export default function ClassPage() {
    const { standard } = useParams();
    const [activeSubject, setActiveSubject] = useState(subjects[0]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNotes() {
            setLoading(true);
            const data = await dataService.getNotes(standard, activeSubject);
            setNotes(data);
            setLoading(false);
        }
        fetchNotes();
    }, [standard, activeSubject]);

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
            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 size={40} className="animate-spin text-blue-600" />
                </div>
            ) : (
                <div className="notes-grid">
                    {notes.length === 0 ? (
                        <div className="col-span-full text-center py-10 text-text-tertiary">
                            No materials found for this subject yet.
                        </div>
                    ) : (
                        notes.map((note) => (
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
                                <a
                                    href={note.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="download-btn"
                                    title="Download"
                                >
                                    <Download size={20} />
                                </a>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
