function contactEmailTemplate({ firstName, lastName, email, phone, subject, message }) {
    return `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;
  }
  
  function confirmationEmailTemplate({ firstName, lastName }) {
    return `
      <h2>Thank You for Contacting Us!</h2>
      <p>Dear ${firstName} ${lastName},</p>
      <p>We have received your message and will get back to you soon.</p>
      <p>Best regards,<br/>The Le Hayaa Team</p>
    `;
  }
  
  export {
    contactEmailTemplate,
    confirmationEmailTemplate,
  };