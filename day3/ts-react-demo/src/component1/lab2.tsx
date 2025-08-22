import type React from "react";

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean;
  OnClose?(): void;
}

export function Modal({ children, isOpen }: ModalProps) {
  if (isOpen) return null;
  return <div className="backdrop">
    {children}
  </div>
}