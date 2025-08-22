// import { useRef } from "react";

// const inputRef = useRef<HTMLInputElement>(null); const focusInput = () => inputRef.current?.focus();


// function Form() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   );
// }

import { forwardRef, useRef } from "react";

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} />;
});

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
}

export default MyComponent;
