import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="container" style={{ background: "red" }}>
    {children}
  </div>;
}

export { Layout }
