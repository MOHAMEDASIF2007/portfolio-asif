import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', 'empty_fields', 'invalid_email'

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e) => {
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

    emailjs.sendForm(
      "service_hnb0pdr",
      "template_g7kqopw",
      form.current,
      "EYIRrqv93sEtkg05S"
    )
    .then((result) => {
      setLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setLoading(false);
      setStatus('error');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Name field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-grey)' }}>Full Name *</label>
            <input
              type="text"
              name="name"
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
              name="email"
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
            name="subject"
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
            name="message"
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
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.85rem' }}
            >
              <AlertCircle size={16} />
              <span>Failed to send the message. Please try again.</span>
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
