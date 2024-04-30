"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import BackButton from "./BackButton";
import Header from "./Header";
import Social from "./Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonlabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = (
  {
    children,
    headerLabel,
    backButtonlabel,
    backButtonHref,
    showSocial = true,
  }: CardWrapperProps = {
    children: null,
    headerLabel: "",
    backButtonlabel: "",
    backButtonHref: "",
    showSocial: true,
  }
) => {
  return (
    <Card className=" w-[400px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonlabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
