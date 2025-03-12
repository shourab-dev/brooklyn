import React, { useRef } from "react";
import Input from "./utils/Input";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p54z30g", "template_97n071d", form.current, {
        publicKey: "gwNwYJxY-DlqteHuO",
      })
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: "Your form has been submitted",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <div className="container   rounded-2xl shadow-contact">
        <div className="grid lg:grid-cols-2 lg:gap-[100px] p-[88px] items-center">
          <div className="contactCnt">
            <h2>Let’s discuss your Project</h2>
            <p>
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
          </div>
          <div className="contactFrom">
            <p className="mb-[38px]">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <Input placeholder="Your Name *" name="user_name" />
              <Input
                placeholder="Your Email *"
                type="email"
                name="user_email"
              />
              <Input placeholder="Your Location" name="location" />
              <div className="grid md:grid-cols-3 md:gap-6">
                <Input placeholder="Budget *" name="budget" type="number" />
                <Input
                  placeholder="Subject *"
                  name="subject"
                  className="md:col-span-2"
                />
              </div>
              <Input placeholder="Message *" name="message" />
              <button type="submit" className="btn mt-[38px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
