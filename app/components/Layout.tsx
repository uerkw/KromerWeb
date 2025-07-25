import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <div className="drawer lg:drawer-open min-h-screen bg-base-100">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex">{children}</div>
        <Sidebar />
      </div>
    </div>
  );
}
