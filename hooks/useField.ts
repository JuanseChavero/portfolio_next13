"use client";

import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export default function useField(type: HTMLInputTypeAttribute) {
  const [value, setValue] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [
    {
      value: value,
      onChange,
      type,
    },
    reset,
  ] as const;
}
