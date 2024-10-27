import classes from "./index.module.css";
import { Container } from "@/components/UI/container";
import { Row } from "@/components/UI/row";

import backgroundImage from "@/assets/Groupglobe.svg";
import { useState } from "react";

const Contact: React.FC = () => {
  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    message: false,
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim().length > 0) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formError = {
      name: contactForm.name.trim().length === 0,
      lastName: contactForm.lastName.trim().length === 0,
      email: contactForm.email.trim().length === 0,
      message: contactForm.message.trim().length === 0,
    };

    setErrors(formError);

    if (Object.values(formError).some((error) => error)) {
      return;
    }

    setContactForm({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });

    console.log(contactForm);
  };

  return (
    <section className={classes.contact}>
      <img src={backgroundImage} alt="Globe" />

      <Container>
        <Row>
          <form onSubmit={handleSubmit}>
            <div className={classes["input-box"]}>
              <label htmlFor="name">Name</label>
              <input
                value={contactForm.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
              />
              {errors.name && (
                <p className={classes.error}>please enter name</p>
              )}
            </div>
            <div className={classes["input-box"]}>
              <label htmlFor="lastname">Last Name</label>
              <input
                value={contactForm.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                id="lastname"
              />
              {errors.lastName && (
                <p className={classes.error}>please enter Last Name</p>
              )}
            </div>
            <div className={classes["input-box"]}>
              <label htmlFor="email">Email</label>
              <input
                value={contactForm.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
              />
              {errors.email && (
                <p className={classes.error}>please enter Email</p>
              )}
            </div>
            <div className={classes.textarea}>
              <label htmlFor="message">Message</label>
              <textarea
                value={contactForm.message}
                onChange={handleChange}
                name="message"
                id="message"
              ></textarea>
              {errors.message && (
                <p className={classes.error}>please enter Message</p>
              )}
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
