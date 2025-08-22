// import { type ChangeEvent, type MouseEvent, type FormEvent } from "react";


// function Example() {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     console.log("Value:", e.target.value); // SyntheticEvent<...>
//   };

//   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
//     console.log("Clicked!", e.currentTarget);
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // stop reload
//     console.log("Form submitted!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input onChange={handleChange} />
//       <button onClick={handleClick}>Submit</button>
//     </form>
//   );
// }

// keyboard
import { type ChangeEvent } from "react";

function TextInput() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return <input type="text" onChange={handleChange} />;
}


// mouse
import { type MouseEvent } from "react";

function ClickButton() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!");
  };
  return <button onClick={handleClick}>Click</button>;
}

// form
import { type FormEvent } from "react";

function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
