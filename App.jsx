import React, { useState, useEffect } from 'react';
import './styles/global.css';
import { useScrollFade, useCursor, useToast } from './hooks';
import { Toast, Modal, Input, Button } from './components/UI';
import Navbar from './components/Navbar';
import AppShowcase from './components/AppShowcase';
import {
  Hero, Ticker, Problem, HowItWorks,
  Comparison, Testimonials, PricingSection, CTA, Footer
} from './components/Sections';

export default function App() {
  const [modal, setModal] = useState(null); // 'signup' | 'login' | null
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '' });
  const { toast, showToast } = useToast();

  useScrollFade();
  

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  const handleSignup = () => {
    if (!signupForm.email) return;
    closeModal();
    showToast('🎉 Welcome ' + (signupForm.name || 'there') + '! Check your email.');
    setSignupForm({ name: '', email: '', phone: '' });
  };

  return (
    <>
      {/* Custom cursor */}
      <div id="cur" />
      <div id="cur2" />

      {/* Navigation */}
      <Navbar onSignup={() => openModal('signup')} onLogin={() => openModal('login')} />

      {/* Page sections */}
      <main>
        <Hero onSignup={() => openModal('signup')} />
        <Ticker />
        <Problem />
        <HowItWorks />
        <AppShowcase onSignup={() => openModal('signup')} />
        <Comparison />
        <Testimonials />
        <PricingSection onSignup={() => openModal('signup')} />
        <CTA onSignup={() => openModal('signup')} />
      </main>

      <Footer />

      {/* Sign Up Modal */}
      {modal === 'signup' && (
        <Modal
          id="signup"
          title="Join CommentCRM"
          subtitle="Start free. No credit card needed."
          onClose={closeModal}
        >
          <Input placeholder="Your Name" value={signupForm.name} onChange={e => setSignupForm(f => ({ ...f, name: e.target.value }))} />
          <Input placeholder="Email address" type="email" value={signupForm.email} onChange={e => setSignupForm(f => ({ ...f, email: e.target.value }))} />
          <Input placeholder="WhatsApp number" type="tel" value={signupForm.phone} onChange={e => setSignupForm(f => ({ ...f, phone: e.target.value }))} />
          <Button variant="primary" fullWidth onClick={handleSignup} style={{ marginTop: 6 }}>
            Create Free Account →
          </Button>
          <p style={{ fontSize: 11, color: '#44446a', marginTop: 14, textAlign: 'center' }}>
            Already have an account?{' '}
            <span onClick={() => setModal('login')} style={{ color: '#7c6dff', cursor: 'pointer' }}>Log in</span>
          </p>
        </Modal>
      )}

      {/* Login Modal */}
      {modal === 'login' && (
        <Modal
          id="login"
          title="Welcome Back"
          subtitle="Log in to your CommentCRM account."
          onClose={closeModal}
        >
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Password" type="password" />
          <Button variant="primary" fullWidth onClick={() => { closeModal(); showToast('Welcome back! 👋'); }} style={{ marginTop: 6 }}>
            Log In →
          </Button>
          <p style={{ fontSize: 11, color: '#44446a', marginTop: 14, textAlign: 'center' }}>
            No account?{' '}
            <span onClick={() => setModal('signup')} style={{ color: '#7c6dff', cursor: 'pointer' }}>Sign up free</span>
          </p>
        </Modal>
      )}

      <Toast toast={toast} />
    </>
  );
}
