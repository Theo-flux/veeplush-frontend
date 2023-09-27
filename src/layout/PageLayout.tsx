import React from "react";
import { Nav, Footer } from "../components";
interface IPageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: IPageLayoutProps) {
  return (
    <main className="w-full relative top-0 left-0">
      <Nav />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default PageLayout;
