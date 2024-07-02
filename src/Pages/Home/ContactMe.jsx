import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const submit = data => {
    console.log(data);

    const serviceID = "service_isvc9zm";
    const templateID = "template_tzv3e5p";
    const userID = "WzWwQRW6Br7P-DWzK";

    emailjs
      .send(serviceID, templateID, data, userID)
      .then(response => {
        console.log("Email sent successfully:", response.status, response.text);
        reset();
      })
      .catch(error => {
        console.error("Failed to send email:", error);
      });

    reset();
  };

  const error = data => {
    console.log(data);
  };

  return (
    <section className="contact--section" id="Contact">
      <div>
        <p className="sub--title">Contact Me</p>
        <h2>Contact Me</h2>
      </div>
      <form
        action=""
        className="contact--form--container"
        onSubmit={handleSubmit(submit, error)}
      >
        <div className="container">
          <label htmlFor="form-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="form-name"
              id="form-name"
              {...register("form-name", { required: true })}
            />
          </label>
          <label htmlFor="company" className="contact--label">
            <span className="text-md">Company</span>
            <input
              type="text"
              className="contact--input text-md"
              name="company"
              id="company"
              {...register("company", { required: true })}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              {...register("phone-number")}
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            {...register("topic", { required: true })}
          >
            <option value="">Select One...</option>
            <option value="To offer a job">To offer a job</option>
            <option value="Invite for an interview">
              Invite for an interview
            </option>
            <option value="Unfortunately, we cannot offer you a job">
              Unfortunately, we cannot offer you a job
            </option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input contact--textarea text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            {...register("message")}
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms.</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
