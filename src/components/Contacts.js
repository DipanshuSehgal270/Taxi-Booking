export default function Contacts() {
  return (
    <section id="contact" className="py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3" />
        <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3" />
        <textarea placeholder="Your Message" className="w-full border rounded-lg p-3"></textarea>
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
