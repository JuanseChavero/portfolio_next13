'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { TextArea, Textfield } from '../../components/Textfield';
import { containerVariant, itemVariant } from '../../utils/motion';
import { waysOfContact } from '../../data/contact';
import ContactCard from '../../components/ContactCard';
import PageWrapper from '../../components/PageWrapper';
import Heading from '../../components/Heading';
import emailjs from '@emailjs/browser';
import useField from '../../hooks/useField';

export default function Contact() {
  const [name, resetName] = useField('text');
  const [email, resetEmail] = useField('email');
  const [message, resetMessage] = useField('text');
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
        'service_ru8yprc',
        'contact_form',
        formRef.current,
        '9Guo4FsNB3WvWTb9h',
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
        type: 'spring',
        bounce: 0,
      },
    },
  };
  return (
    <PageWrapper>
      <motion.div
        className="container flex flex-col max-w-5xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <Heading title="Contact" variants={itemVariant} />
        <motion.div
          className="mb-6 space-y-2 text-xl text-left lg:text-justify"
          variants={itemVariant}
        >
          <p>
            I&apos;m excited to hear about your project and see how I can help
            bring your ideas to life.
          </p>
          <p>
            Please fill out the contact form and I&apos;ll get back to you as
            soon as possible.
          </p>
        </motion.div>
        <motion.form ref={formRef} variants={itemVariant}>
          <AnimatePresence mode="wait">
            {sentEmail ? (
              <motion.div
                key="message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`flex h-[460px] w-full flex-col items-center justify-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircleIcon className="w-24 h-24 fill-green-500" />
                </motion.div>
                <div className="max-w-sm">
                  <p className="mt-4 text-lg text-center text-green-500">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-4 text-lg text-center text-green-500">
                    I have received your message and will get back to you as
                    soon as possible.
                  </p>
                  <p className="mt-4 text-lg text-center text-green-500">
                    I appreciate your interest and look forward to discussing
                    your project with you!
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-6 lg:flex-row">
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col flex-1 w-full gap-5"
                >
                  <Textfield
                    name="user_name"
                    placeholder="Your name"
                    label="Name"
                    {...name}
                  />
                  <Textfield
                    name="user_email"
                    placeholder="Your email address"
                    label="Email"
                    {...email}
                  />
                  <TextArea
                    name="message"
                    placeholder="What's on your mind?"
                    label="Message"
                    {...message}
                  />
                  <motion.button
                    type="button"
                    aria-label="Submit form"
                    onClick={onSubmit}
                    className={`flex h-12 w-full items-center justify-center rounded border-2 border-primary text-center text-lg font-bold uppercase tracking-widest text-primary outline-2 outline-offset-8 outline-primary transition-[background-color,outline-offset,color] hocus:bg-primary hocus:text-black hocus:outline hocus:outline-offset-4 dark:hocus:text-white ${
                      isSending ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    {isSending ? (
                      <ArrowPathIcon className="w-8 h-8 animate-spin" />
                    ) : (
                      'Submit'
                    )}
                  </motion.button>
                </motion.div>
                <motion.div
                  className="flex flex-col mb-6"
                  variants={contactCardVariant}
                >
                  <span className="mb-2 text-base">
                    You can also find me at:
                  </span>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {waysOfContact.map((wayToContact) => (
                      <ContactCard key={wayToContact.title} {...wayToContact} />
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </PageWrapper>
  );
}
