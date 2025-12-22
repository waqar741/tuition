import React, { useState } from 'react';
import { dataService } from '../services/dataService';
import {
    FileText, Copy, CheckCircle, Database,
    FilePlus, ClipboardCheck, Code, Upload
} from 'lucide-react';
import './Dashboard.css';

const subjects = ['Science', 'Maths', 'English', 'Social Science'];
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
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.fileName) {
            setStatus('error');
            return;
        }

        const entry = await dataService.generateEntry(formData);
        const result = JSON.stringify(entry, null, 2);
        setJsonResult(result);
        setStatus('success');
    };

    const copyToClipboard = () => {
        if (jsonResult) {
            navigator.clipboard.writeText(',' + jsonResult);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const resetForm = () => {
        setFormData({
            standard: '10',
            subject: 'Science',
            title: '',
            fileName: ''
        });
        setJsonResult(null);
        setStatus('idle');
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            {/* <header className="dashboard-header">
                <div className="dashboard-header-content">
                    <div className="dashboard-header-main">
                        <div className="dashboard-title-section">
                            <div className="dashboard-icon">
                                <Database size={28} />
                            </div>
                            <div>
                                <h1 className="dashboard-title">JSON Generator</h1>
                                <p className="dashboard-subtitle">Create study materials metadata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}

            <div className="dashboard-content">
                <div className="dashboard-main">
                    {/* Form Card */}
                    <div className="form-section">
                        <div className="form-card">
                            <div className="form-card-header">
                                <div className="form-card-title">
                                    <FilePlus size={24} />
                                    <h2>Create New Entry</h2>
                                </div>
                                <p className="form-card-description">
                                    Enter details to generate the JSON code.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="form-content">
                                {/* Class Selection */}
                                <div className="form-group">
                                    <label className="form-label">Class Standard</label>
                                    <div className="selection-grid">
                                        {standards.map(std => (
                                            <button
                                                type="button"
                                                key={std}
                                                onClick={() => setFormData({ ...formData, standard: std })}
                                                className={`selection-option ${formData.standard === std ? 'active' : ''}`}
                                            >
                                                <span className="selection-label">Class</span>
                                                <span className="selection-value">{std}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Subject Selection */}
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <div className="selection-grid">
                                        {subjects.map(sub => (
                                            <button
                                                type="button"
                                                key={sub}
                                                onClick={() => setFormData({ ...formData, subject: sub })}
                                                className={`selection-option ${formData.subject === sub ? 'active' : ''}`}
                                            >
                                                {sub}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Title Input */}
                                <div className="form-group">
                                    <label className="form-label">Document Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="e.g., Chemical Reactions: Chapter 1"
                                        className="form-input"
                                    />
                                </div>

                                {/* Filename Input */}
                                <div className="form-group">
                                    <label className="form-label">
                                        Filename
                                        <span className="form-hint">(Upload to public/materials first)</span>
                                    </label>
                                    <div className="file-input-group">
                                        <input
                                            type="text"
                                            value={formData.fileName}
                                            onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
                                            placeholder="e.g., science_ch1"
                                            className="form-input file-input"
                                        />
                                        <button type="button" className="file-hint-btn" disabled>
                                            .pdf
                                        </button>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="form-actions">
                                    <button type="submit" className="submit-btn-primary">
                                        <Code size={18} />
                                        Generate JSON
                                    </button>
                                    <button type="button" className="submit-btn-secondary" onClick={resetForm}>
                                        Clear Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Result Preview */}
                    <div className="preview-section">
                        <div className="preview-card">
                            <div className="preview-header">
                                <div className="preview-title">
                                    <CheckCircle size={24} />
                                    <h2>JSON Output</h2>
                                </div>
                                <div className="preview-actions">
                                    <button
                                        className={`copy-btn-main ${copied ? 'copied' : ''}`}
                                        onClick={copyToClipboard}
                                        disabled={!jsonResult}
                                    >
                                        {copied ? (
                                            <>
                                                <ClipboardCheck size={16} />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={16} />
                                                Copy Code
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {status === 'success' && jsonResult && (
                                <div className="preview-content">
                                    <div className="success-banner">
                                        <CheckCircle size={20} />
                                        <div>
                                            <strong>Ready to Copy!</strong>
                                            <p>Paste this into <code>src/data/materials.json</code></p>
                                        </div>
                                    </div>

                                    <div className="code-container">
                                        <pre className="code-block">
                                            <code>,{jsonResult}</code>
                                        </pre>
                                    </div>
                                </div>
                            )}

                            {!jsonResult && (
                                <div className="empty-state">
                                    <Code size={48} />
                                    <h3>No Code Yet</h3>
                                    <p>Fill the form to generate the JSON entry</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}