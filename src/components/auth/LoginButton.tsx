"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    console.log("Login button clicked");
    router.push("/auth/login");
  };

  if ((mode = "modal")) {
    return (
      //   will be changed latter

      <span onClick={onClick} className={`btn btn-primary`}>
        {children}
      </span>
    );
  }

  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
