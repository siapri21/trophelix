import { describe, it, expect, vi } from 'vitest';
import nodemailer from 'nodemailer';
import { sendEmail } from './app';

vi.mock('nodemailer');

describe('sendEmail', () => {
    it('should send email with correct parameters', async () => {
        const mockSendMail = vi.fn((mailOptions, callback) => {
            callback(null, { response: '250 Message accepted' });
        });

        nodemailer.createTransport.mockReturnValue({
            sendMail: mockSendMail,
        });

        const emailData = {
            email: 'test@example.com',
            subject: 'Test Subject',
            message: 'Test Message',
        };

        const response = await sendEmail(emailData);

        expect(response.message).toMatch(/success/);

    });
});


