import { useState, type ChangeEvent } from "react";

export default function Lab1() {
  const [name, setName] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };
  return (
    <div>
      <input value={name} onChange={handleChange} placeholder="Your Name..." />
      <p>Hello, {name}</p>
    </div>
  )
}