export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact-page" id="contact">
      <h2>Connect with me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your fullname" />
        <input type="text" placeholder="Your email" />
        <textarea
          name="message"
          id="msg"
          placeholder="Write a message"
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}
