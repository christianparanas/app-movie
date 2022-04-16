import React from "react";
import FadeIn from "react-fade-in";

import Header from "./header";

function Page({ children }) {
  return (
    <div>
      <Header />

      <FadeIn>
        <div className="">{children}</div>
        <div className="footer"></div>
      </FadeIn>
    </div>
  );
}

export default Page;
