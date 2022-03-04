import React, { useRef, useState, useEffect } from "react";
import { ContactForm } from "../style-components/Contact";
import Modal from "../components/Modal";
import { SectionContainer } from "../style-components/SectionContainer";
import {
  SectionTitle,
  SectionText,
} from "../style-components/GlobalStyles";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";

const Contact = () => {
  const initialState = {
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const formRef = useRef();

  const [isSubmit, setIsSubmit] = useState(false);

  const [isModal, setModal] = useState(false);

  const [transparent, setTransparent] = useState(true);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTransparent(false);
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors.constructor === Object
    ) {
      console.log("is empty");
      emailjs
        .sendForm(
          process.env.SERVICE,
          process.env.TEMPLATE,
          formRef.current,
          process.env.USER
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmit(true);
            setFormValues(initialState);
          },
          (error) => {
            console.log(error.text);
          }
        );

      showModal();
      setTransparent(true);
    } else {
      console.log("is not empty");
      setTransparent(false);
    }
  };

  useEffect(() => {
    setFormErrors(validate(formValues));
  }, [formValues]);

  useEffect(() => {
    setTransparent(true);
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^\S+@\S+\.\S+$/;
    if (!values.user_name) {
      errors.user_name = " is required!";
    } else if (values.user_name.length < 2) {
      errors.user_name = " must have minimum 2 characters";
    }
    if (!values.user_email) {
      errors.user_email = " is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = " is not in valid format";
    }
    if (!values.user_subject) {
      errors.user_subject = " is required!";
    }
    if (!values.message) {
      errors.message = " is required!";
    }
    return errors;
  };

  function showModal() {
    setModal(!isModal);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <SectionContainer>
      <SectionTitle>Let's Connect</SectionTitle>
      <SectionText>Get in touch</SectionText>
      <Fade duration={1500}>
        <ContactForm variant={transparent}>
          <div className="contact__container">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone contact__icon"></i>
                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">+48 793 155 457</span>
                  <br />
                  <span className="contact__subtitle">+353 085 1040 929</span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">
                    <a
                      className="contact__mailto"
                      href="mailto:przemekstarostka@gmail.com"
                    >
                      przemekstarostka@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Dublin - Ireland</span>
                  <br />
                  <span className="contact__subtitle">Wroclaw - Poland</span>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact__form"
            >
              <div className="contact__inputs">
                <div className="contact__content">
                  <label className="contact__label">
                    Name
                    <span className="contact__validation">
                      {formErrors.user_name}
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="contact__input"
                    value={formValues.user_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__content">
                  <label className="contact__label">
                    Email
                    <span className="contact__validation">
                      {formErrors.user_email}
                    </span>
                  </label>
                  <input
                    type="text"
                    //noValidate
                    name="user_email"
                    className="contact__input"
                    value={formValues.user_email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact__content">
                <label className="contact__label">
                  Subject
                  <span className="contact__validation">
                    {formErrors.user_subject}
                  </span>
                </label>
                <input
                  type="text"
                  name="user_subject"
                  className="contact__input"
                  value={formValues.user_subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__content">
                <label className="contact__label">
                  Message
                  <span className="contact__validation">
                    {formErrors.message}
                  </span>
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="0"
                  rows="7"
                  className="contact__input"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="contact__button">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
              {isSubmit && "Thank you ..."}
            </form>
          </div>
          {isModal ? <Modal showModal={showModal} /> : null}
        </ContactForm>
      </Fade>
    </SectionContainer>
  );
};

export default Contact;
