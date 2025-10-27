import React, { useRef, useState } from 'react';
import styles from './ContactStyles.module.scss';
import contactData from '../../JSON/contactFields.json';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_zk9zr3r',
        'template_8lw44rm',
        form.current,
        'BP3U08DtExjrPyEBD'
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message. Try again later.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1 className={styles.sectionTitle}>{contactData.title}</h1>
          <p className={styles.description}>Whether you have a question, feedback, or just want to say hello — feel free to reach out! I’m always open to connecting and would love to hear from you.</p>
          <div className={styles.infoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <p>Mehdipatnam, Hyderabad,India</p>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-phone"></i>
            <p>+91 7793979301</p>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-envelope"></i>
            <p>palemkotanaveen@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          {contactData.fields.map((field, index) => (
            <div className={styles.formGroup} key={index}>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-label={field.placeholder}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-label={field.placeholder}
                />
              )}
            </div>
          ))}
          <input className={`${styles.btn} hover`} type="submit" value={contactData.submitText} />
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
