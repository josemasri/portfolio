import { FunctionComponent } from "react";

import { SiNextdotjs, SiStrapi } from "react-icons/si";

const Footer: FunctionComponent = () => {
  return (
    <footer className="text-3xl p-5 font-bold">
      <div className="flex justify-center items-center">
        <h6 className="mr-5">Built using </h6>
        <SiNextdotjs className="mr-5" />
        <SiStrapi className="text-blue-500" />
      </div>
    </footer>
  );
};

export default Footer;
