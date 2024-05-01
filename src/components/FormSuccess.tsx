import { CircleCheckBig, TriangleAlert } from "lucide-react";

interface FormSuccessprops {
  msg?: string;
}

const FormSuccess = ({
  msg = "There was an error with your submission",
}: FormSuccessprops) => {
  // sourcery skip: use-braces
  if (!msg) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-emerald-500 bg-emerald-500/15 p-3 rounded-md ">
      <CircleCheckBig className=" h-4 w-4" />
      <p>{msg}</p>
    </div>
  );
};

export default FormSuccess;
