import React from "react";
import FadeIn from "react-fade-in";

import { Header } from "components";

function Page({ children }) {
  return (
    <div className="pt-20">
      <Header />

      <FadeIn>
        <div className="w-full md:max-w-[1500px] mx-auto">
          <div className="">{children}</div>
          <div className="footer"></div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Page;
