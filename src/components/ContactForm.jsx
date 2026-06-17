import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error'

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('empty_fields');
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus('invalid_email');
      return;
    }

    setLoading(true);
    setStatus(null);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Name field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-grey)' }}>Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Mohamed Asif"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid var(--border-glass)',
                borderRadius: '6px',
                padding: '12px 16px',
                color: 'var(--accent-white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'var(--transition-smooth)'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-muted)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.02)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>

          {/* Email field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-grey)' }}>Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. mohamedasif@example.com"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid var(--border-glass)',
                borderRadius: '6px',
                padding: '12px 16px',
                color: 'var(--accent-white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'var(--transition-smooth)'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-muted)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.02)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>
        </div>

        {/* Subject field */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-grey)' }}>Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="How can we collaborate?"
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid var(--border-glass)',
              borderRadius: '6px',
              padding: '12px 16px',
              color: 'var(--accent-white)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'var(--transition-smooth)'
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-muted)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.02)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
        </div>

        {/* Message field */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-grey)' }}>Message *</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Type your message here..."
            rows={5}
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid var(--border-glass)',
              borderRadius: '6px',
              padding: '12px 16px',
              color: 'var(--accent-white)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              outline: 'none',
              resize: 'vertical',
              transition: 'var(--transition-smooth)'
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-muted)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.02)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
        </div>

        {/* Status messages */}
        <AnimatePresence mode="wait">
          {status === 'empty_fields' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.85rem' }}
            >
              <AlertCircle size={16} />
              <span>Please fill in all required (*) fields.</span>
            </motion.div>
          )}
          {status === 'invalid_email' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.85rem' }}
            >
              <AlertCircle size={16} />
              <span>Please enter a valid email address.</span>
            </motion.div>
          )}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '0.85rem' }}
            >
              <CheckCircle size={16} />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
