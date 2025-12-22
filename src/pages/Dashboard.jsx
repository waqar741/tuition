import React, { useState } from 'react';
import { dataService } from '../services/dataService';
import { FileText, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import './Dashboard.css';

const subjects = ['Science', 'Math', 'English', 'Social Science'];
const standards = ['6', '7', '8', '9', '10'];

export default function Dashboard() {
    const [formData, setFormData] = useState({
        standard: '10',
        subject: 'Science',
        title: '',
        fileName: ''
    });
    const [jsonResult, setJsonResult] = useState(null);
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.fileName) {
            setStatus('error');
            return;
        }

        const entry = await dataService.generateEntry(formData);
        setJsonResult(JSON.stringify(entry, null, 2));
        setStatus('success');
    };

    const copyToClipboard = () => {
        if (jsonResult) {
            navigator.clipboard.writeText(jsonResult + ',');
            alert('Copied! Now paste this into src/data/materials.json');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">JSON Generator</h1>
                <p className="dashboard-subtitle">Generate code for materials.json</p>
            </div>

            <div className="dashboard-form-card">
                <form onSubmit={handleSubmit} className="form-layout">
                    {/* Standard Selection */}
                    <div className="form-group">
                        <label className="form-label">Class</label>
                        <div className="class-selector-group" style={{ flexWrap: 'wrap' }}>
                            {standards.map(std => (
                                <button
                                    type="button"
                                    key={std}
                                    onClick={() => setFormData({ ...formData, standard: std })}
                                    className={`selection-btn ${formData.standard === std ? 'active' : ''}`}
                                >
                                    {std}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subject Selection */}
                    <div className="form-group">
                        <label className="form-label">Subject</label>
                        <div className="subject-selector-group">
                            {subjects.map(sub => (
                                <button
                                    type="button"
                                    key={sub}
                                    onClick={() => setFormData({ ...formData, subject: sub })}
                                    className={`selection-btn ${formData.subject === sub ? 'active' : ''}`}
                                >
                                    {sub}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Title Input */}
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g. Chapter 1: Chemical Reactions"
                            className="form-input"
                        />
                    </div>

                    {/* Filename Input */}
                    <div className="form-group">
                        <label className="form-label">Filename (Drag file to public/materials first)</label>
                        <input
                            type="text"
                            value={formData.fileName}
                            onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
                            placeholder="e.g. science_ch1.pdf"
                            className="form-input"
                        />
                    </div>

                    {/* Generate Button */}
                    <button type="submit" className="submit-btn" style={{ marginTop: '1rem' }}>
                        <FileText size={18} />
                        Generate Code
                    </button>

                </form>

                {/* Result Area */}
                {status === 'success' && (
                    <div className="result-area">
                        <div className="status-card">
                            <CheckCircle size={16} />
                            <span>Entry Generated!</span>
                        </div>
                        <div className="code-block-container">
                            <textarea
                                readOnly
                                className="code-textarea"
                                value={jsonResult + ','}
                            />
                            <button
                                onClick={copyToClipboard}
                                className="copy-btn"
                                title="Copy to Clipboard"
                            >
                                <Copy size={14} />
                            </button>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', textAlign: 'center' }}>
                            Paste into <code>src/data/materials.json</code>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
