"use client";
import { useName } from "../../Providers/NameProvider";

export const NameInput = ({className} : {className ?: string}) => {
  const { name, setName } = useName();

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
      className={"text-black rounded-md p-1 sm:text-sm lg:text-lg w-full max-w-xs overflow-auto" + className}
      placeholder="Name"
    />
  );
};
