import { useRef } from "react";

export default function Lab9() {
  const boxRef = useRef<HTMLInputElement>(null)


  const scrollBottom = () => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight
      console.log(boxRef)
      console.log(boxRef.current?.scrollTop)
      console.log(boxRef.current?.scrollHeight)
      console.log(boxRef.current.clientHeight)
    }
  }
  // TODO: ใช้ boxRef.current.scrollTop และ scrollHeight

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          border: "1px solid #ccc",
          height: "100px",
          overflowY: "scroll",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
      <button onClick={scrollBottom}>Scroll to Bottom</button>
    </div>
  );
}

