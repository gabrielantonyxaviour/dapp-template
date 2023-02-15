import React from "react";

import Chainlink from "../assets/sponsors/chainlink.png";
import Push from "../assets/sponsors/push.png";
import SuperFluid from "../assets/sponsors/superfluid.png";
import TheGraph from "../assets/sponsors/thegraph.png";
export default function Footer() {
  function Logo({ logo }) {
    return (
      <img
        src={logo}
        alt=""
        className="rounded-lg select-none mx-3"
        width={35}
        height={35}
      />
    );
  }
  return (
    <div className="select-custom h-[35px] flex  justify-between max-w-[900px] mx-auto mt-[50px]">
      <div className="flex">
        <p className="h-[25px] font-semibold  text-[#A9A9A9] align-middle text-md text-center mr-7 my-auto">
          Amazing Sponsors 💚
        </p>
        <div className="flex  w-[350px] justify-start">
          <Logo logo={SuperFluid} />
          <Logo logo={Chainlink} />
          <Logo logo={TheGraph} />
          <Logo logo={Push} />
        </div>
      </div>

      <p className="h-[25px]  font-semibold text-[#A9A9A9] text-md text-center my-auto ">
        © 2023 Gabriel. All rights reserved.
      </p>
    </div>
  );
}
