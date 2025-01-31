export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h2>Connect with me</h2>
      <form>
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
