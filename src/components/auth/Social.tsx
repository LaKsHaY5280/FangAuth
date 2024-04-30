"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
const socialIcons = [
  { icon: <FaFacebook className="h-5 w-5" />, onClick: () => {} },
  { icon: <FcGoogle className="h-5 w-5" />, onClick: () => {} },
  { icon: <FaGithub className="h-5 w-5" />, onClick: () => {} },
];

const Social = () => {
  return (
    <div className="w-full flex justify-center items-center gap-x-2">
      {socialIcons.map((socialIcon, index) => (
        <Button
          key={index}
          variant="outline"
          size="lg"
          className="w-full flex justify-center items-center gap-x-2"
          onClick={socialIcon.onClick}
        >
          {socialIcon.icon}
        </Button>
      ))}
    </div>
  );
};

export default Social;
