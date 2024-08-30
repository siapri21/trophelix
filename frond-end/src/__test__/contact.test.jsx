import ContactForm from '@/composants/Contact';
import { render, screen ,fireEvent } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it, vi } from 'vitest';

// Mock axios pour éviter les appels réseau réels pendant les tests
vi.mock('axios');

describe('ContactForm', () => {
it('renders form fields correctly', () => {
    const component = renderer.create(<ContactForm />);
    const instance = component.root;
    
    expect(instance.findByProps({ name: 'nom' })).toBeTruthy();
    expect(instance.findByProps({ name: 'email' })).toBeTruthy();
    expect(instance.findByProps({ name: 'phone' })).toBeTruthy();
    expect(instance.findByProps({ name: 'subject' })).toBeTruthy();
    expect(instance.findByProps({ name: 'message' })).toBeTruthy();
  });

  it('updates form fields when typed into', async () => {
    render(<ContactForm/>);

   const nomInput = screen.findByText(/nom/i);
   const emailInput = screen.findByText(/email/i);
   const phoneInput = screen.findByText(/phone/i);
   const subjectInput = screen.findByText(/subject/i);
   const messageInput = screen.findByText(/message/i);

    // Sélection du bouton par son texte, sans rôle spécifique
    const submitButton = screen.findByText(/envoyer/i);

    


  })



});