import React from "react";

import { DiGithubBadge } from "react-icons/di";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-20 bg-slate-700">
      <div className="bg-transparent text-4xl text-slate-50 mr-1">{<DiGithubBadge />}</div>
      <h1 className="bg-transparent text-slate-50 font-semibold text-3xl">
        Github Research
      </h1>
    </div>
  );
};

export default Header;
