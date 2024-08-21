import { m } from "framer-motion";
import { TextArea, Textfield } from "./Textfield";
import { Field } from "../../hooks/useField";
import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";

export default function ContactForm({
  name,
  email,
  message,
  onSubmit,
  isSending,
}: {
  name: Field;
  email: Field;
  message: Field;
  onSubmit: () => void;
  isSending: boolean;
}) {
  const isDisabled = !name.value || !email.value || !message.value;

  return (
    <>
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
      <m.button
        type="button"
        aria-label="Submit form"
        onClick={onSubmit}
        disabled={isDisabled}
        className={`flex h-12 w-full items-center justify-center rounded border-2 border-primary text-center text-lg font-bold uppercase tracking-widest text-primary outline-2 outline-offset-8 outline-primary transition-[background-color,outline-offset,color] hocus:bg-primary hocus:text-black hocus:outline hocus:outline-offset-4 dark:hocus:text-white ${
          isSending ? "cursor-default" : "cursor-pointer"
        } ${
          isDisabled && "pointer-events-none border-slate-500 text-slate-500"
        }`}
      >
        {isSending ? (
          <ArrowPathIcon className="w-8 h-8 animate-spin" />
        ) : (
          "Submit"
        )}
      </m.button>
    </>
  );
}
