import {
  useRef
} from "react";
import { CustomInput } from "./lab12-1";

// TODO: สร้าง CustomInput ที่รับ ref<HTMLTextAreaElement>


export default function Lab12() {
  const textRef = useRef<HTMLTextAreaElement>(null)

  const focus = () => {
    if (textRef.current) {
      textRef.current.focus()
    }
  }
  // TODO: focus textarea


  return (
    <div>
      <CustomInput ref={textRef} placeholder="Type here..." />
      <button onClick={focus}>Focus</button>
    </div>
  );
}
