"use client";

import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { containerVariant, itemVariant } from "@/utils/motion";
import { waysOfContact } from "@/data/contact";
import ContactCard from "@/components/ContactCard";
import Heading from "@/components/Heading";
import emailjs from "@emailjs/browser";
import useField from "@/hooks/useField";
import EmailSuccess from "../../components/Forms/EmailSuccess";
import ContactForm from "../../components/Forms/ContactForm";

export default function Contact() {
  const [name, resetName] = useField("text");
  const [email, resetEmail] = useField("email");
  const [message, resetMessage] = useField("text");
  const [isSending, setIsSending] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function timeout(seconds: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, seconds * 1000);
    });
  }

  const resetFields = () => {
    resetName();
    resetEmail();
    resetMessage();
  };

  const onSubmit = async () => {
    if (!formRef.current) return;

    try {
      setIsSending(true);
      // Send the email through "EmailJS" using a ref and credentials
      await emailjs.sendForm(
        "service_ru8yprc",
        "contact_form",
        formRef.current,
        "9Guo4FsNB3WvWTb9h"
      );

      setIsSending(false);

      // Success timeout
      setSentEmail(true);
      await timeout(7);
      setSentEmail(false);

      // Reset the fields values
      resetFields();
    } catch (e) {
      setIsSending(false);
      setSentEmail(false);
    }
  };

  const contactCardVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.35,
        type: "spring",
        bounce: 0,
      },
    },
  };

  return (
    <m.div
      className="container flex flex-col max-w-5xl"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Heading title="Contact" variants={itemVariant} />
      <m.div
        className="mb-6 space-y-2 text-xl text-left lg:text-justify"
        variants={itemVariant}
      >
        <div className="text-xl">
          <p>
            I&apos;m open to hear about new opportunities, so please feel free
            to reach out anytime.{" "}
          </p>
        </div>
      </m.div>
      <m.form ref={formRef} variants={itemVariant}>
        <AnimatePresence mode="wait">
          {sentEmail ? (
            <EmailSuccess />
          ) : (
            <div className="flex flex-col gap-6 lg:flex-row">
              <m.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col flex-1 w-full gap-5"
              >
                <ContactForm
                  name={name}
                  email={email}
                  message={message}
                  isSending={isSending}
                  onSubmit={onSubmit}
                />
              </m.div>
              <m.div
                className="flex flex-col mb-6"
                variants={contactCardVariant}
              >
                <span className="mb-2 text-base">You can also find me at:</span>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {waysOfContact.map((wayToContact) => (
                    <ContactCard key={wayToContact.title} {...wayToContact} />
                  ))}
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </m.form>
    </m.div>
  );
}
