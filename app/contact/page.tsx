'use client';

import { useRef, useState } from 'react';
import Header from '../../components/Header';
import { TextArea, Textfield } from '../../components/Textfield';
import useField from '../../hooks/useField';
import emailjs from '@emailjs/browser';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Contact() {
  const [name, resetName] = useField('text');
  const [email, resetEmail] = useField('email');
  const [message, resetMessage] = useField('text');
  const [isSending, setIsSending] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: 'spring',
          bounce: 0,
        },
      },
    },
  };

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
      const response = await emailjs.sendForm(
        'service_ru8yprc',
        'contact_form',
        formRef.current,
        '9Guo4FsNB3WvWTb9h',
      );

      setIsSending(false);

      // For a "Correct" dialog
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

  return (
    <div className="flex min-h-[calc(100vh-128px-72px)] flex-col items-center justify-center px-6 lg:px-0">
      <motion.div
        className="container flex max-w-5xl flex-col py-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="my-4 font-header text-5xl font-bold text-orange"
          variants={item}
        >
          Contact
        </motion.h3>
        <motion.div
          className="mb-6 text-left text-xl lg:text-justify"
          variants={item}
        >
          <p>Thank you for visiting my portfolio!</p>
          <p>
            I&apos;m excited to hear about your project and see how I can help
            bring your ideas to life. Please fill out the contact form and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.form ref={formRef} variants={item}>
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
                  <CheckCircleIcon className="h-24 w-24 fill-green-500" />
                </motion.div>
                <div className="max-w-sm">
                  <p className="mt-4 text-center text-lg text-green-500">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-4 text-center text-lg text-green-500">
                    I have received your message and will get back to you as
                    soon as possible.
                  </p>
                  <p className="mt-4 text-center text-lg text-green-500">
                    I appreciate your interest and look forward to discussing
                    your project with you!
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex w-full flex-1 flex-col gap-5"
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
                  onClick={onSubmit}
                  className={`flex h-12 w-full items-center justify-center rounded border-2 border-orange text-center text-lg font-bold uppercase tracking-widest text-orange outline-2 outline-offset-8 outline-orange transition-[background-color,outline-offset,color] hocus:bg-orange hocus:text-black hocus:outline hocus:outline-offset-4 dark:hocus:text-white ${
                    isSending ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  {isSending ? (
                    <ArrowPathIcon className="h-8 w-8 animate-spin" />
                  ) : (
                    'Submit'
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </div>
  );
}
