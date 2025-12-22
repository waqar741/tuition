import React, { useState } from 'react';
import { Send, ExternalLink } from 'lucide-react';
import './Contact.css';

export default function ContactPage() {
    const [result, setResult] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("");
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setShowSuccess(true);
                e.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page container">
            {/* Success Popup */}
            {showSuccess && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-icon-wrapper">
                            <Send size={32} />
                        </div>
                        <h3 className="popup-title">Doubt Sent!</h3>
                        <p className="popup-message">
                            Your doubt has been sent successfully. Sir will get back to you soon.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="popup-btn"
                        >
                            Okay, Got it
                        </button>
                    </div>
                </div>
            )}

            <div className="contact-form-card">
                <h2 className="text-2xl font-bold mb-2 text-center text-primary">Ask a Doubt</h2>
                <p className="text-center text-text-secondary mb-6 text-sm">
                    Stuck on a problem? Send your question directly to Sir.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="your@student.com"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Your Question/Doubt</label>
                        <textarea
                            name="message"
                            placeholder="Type your doubt here..."
                            className="form-textarea"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Sending...
                            </span>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Doubt
                            </>
                        )}
                    </button>

                    {result && !showSuccess && (
                        <div className="text-center mt-4 font-medium text-red-500">
                            {result}
                        </div>
                    )}
                </form>
            </div>

        </div>
    );
}
