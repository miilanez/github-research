import React from "react";

//import icon
import { DiGithubBadge } from "react-icons/di";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-20 bg-slate-700">
      <div className="bg-transparent text-slate-50 m-1 text-4xl md:text-6xl">{<DiGithubBadge />}</div>
      <h1 className="bg-transparent text-slate-50 font-semibold text-3xl md:text-5xl">
        Github Research
      </h1>
    </div>
  );
};

export default Header;
