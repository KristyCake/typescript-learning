import { useState } from "react";

interface ToggleSwitch {
  initailOn?: boolean
}

export function ToggleSwitch({ initailOn = false }: ToggleSwitch) {
  const [on, setOn] = useState<boolean>(initailOn);
  return (
    <button aria-pressed={on}
      onClick={() => setOn(!on)}>
      {on ? "ON" : "OFF"}
    </button>
  )
} 