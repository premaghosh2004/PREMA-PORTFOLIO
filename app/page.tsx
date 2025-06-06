import ContactForm from './api/contact/contactForm';
// Adjust path as needed

export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
