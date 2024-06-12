"use client";
import { useName } from "../../Providers/NameProvider";

export const NameInput = () => {
  const { name, setName } = useName();

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      className="text-black text-lg rounded-md p-1"
      placeholder="Enter your name"
    />
  );
};
