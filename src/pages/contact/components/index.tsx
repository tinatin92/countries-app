import classes from "./index.module.css";
import { Container } from "@/components/UI/container";
import { Row } from "@/components/UI/row";

import backgroundImage from "@/assets/Groupglobe.svg";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const lastName = form.lastname.value;
    const email = form.email.value;
    const message = form.message.value;

    const contactInfo = {
      name,
      lastName,
      email,
      message,
    };

    console.log(contactInfo);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const form = event.currentTarget;

      const name = form.name.value;
      const lastName = form.lastname.value;
      const email = form.email.value;
      const message = form.message.value;

      const contactInfo = {
        name,
        lastName,
        email,
        message,
      };

      console.log(contactInfo);
    }
  };

  return (
    <section className={classes.contact}>
      <img src={backgroundImage} alt="Globe" />

      <Container>
        <Row>
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className={classes["input-box"]}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={classes["input-box"]}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className={classes["input-box"]}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={classes.textarea}>
              <label htmlFor="name">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button className={classes.button} type="submit">
              Send
            </button>
          </form>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
