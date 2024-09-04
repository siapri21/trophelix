import { describe, expect, it, vi } from 'vitest';
import nodemailer from 'nodemailer';
import { sendEmail } from '../app.jsx'; // Assurez-vous que le chemin est correct

// Fonction utilitaire pour ajouter un délai (timeout) à une promesse
function withTimeout(promise, timeout = 5000) {
  let timer;
  const timeoutPromise = new Promise((_, reject) =>
    timer = setTimeout(() => reject(new Error('Operation timed out')), timeout)
  );

  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}

describe('sendEmail function', () => {
  it('should send an email to the admin and a confirmation email to the user', async () => {
    // Mock la fonction createTransport pour éviter de réellement envoyer des emails
    const sendMailMock = vi.fn().mockResolvedValue({ message: 'Email sent successfully' });

    // Création du mock pour createTransport
    vi.spyOn(nodemailer, 'createTransport').mockReturnValue({
      sendMail: sendMailMock,
    });

    const email = 'ouattara10siap@gmail.com';
    const subject = 'Test email';
    const message = 'This is a test email';

    // Ajoutez des logs pour vérifier l'exécution
    console.log('Starting test...');
    
    try {
      // Appel de la fonction sendEmail avec un délai de timeout
      const result = await withTimeout(sendEmail({ email, subject, message }), 10000);

      // Vérification du résultat
      console.log('Test result:', result);
      expect(result).toEqual({ message: 'Email sent successfully' });

      // Vérifie que la fonction sendMail a été appelée deux fois
      expect(sendMailMock).toHaveBeenCalledTimes(2);

      // Définir les configurations des emails attendues
      const mailConfigs = {
        from: email,
        to: 'ouattara10siap@gmail.com',
        subject,
        html: `
          <p>Bonjour, vous avez un mail de votre site reçu de :${email}</p>
          <p>${message}</p>
          <p>Best Regards</p>
        `,
      };

      const mailConfirmationConfigs = {
        from: 'ouattara10siap@gmail.com',
        to: email,
        subject,
        html: `
          <p>Bonjour ${email}, 
          Nous vous remercions pour votre message. Celui-ci a été reçu avec succès et sera traité dans les meilleurs délais. 
          Nous vous contacterons sous peu. Sincèrement, Trophelix :</p>
          <p>${message}</p>
          <p>Best Regards</p>
        `,
      };

      // Vérifie que sendMail a été appelé avec les bonnes configurations
      expect(sendMailMock).toHaveBeenCalledWith(mailConfigs);
      expect(sendMailMock).toHaveBeenCalledWith(mailConfirmationConfigs);

      console.log('Test completed successfully.');
    } catch (error) {
      console.error('Test failed with error:', error);
    }
  }, 20000); // Timeout du test (peut être ajusté)
});
