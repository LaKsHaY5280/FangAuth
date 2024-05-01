import { TriangleAlert } from "lucide-react";

interface FormErrorprops {
  msg?: string;
}

const FormError = ({
  msg = "There was an error with your submission",
}: FormErrorprops) => {
  // sourcery skip: use-braces
  if (!msg) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-destructive bg-destructive/15 p-3 rounded-md ">
      <TriangleAlert className=" h-4 w-4" />
      <p>{msg}</p>
    </div>
  );
};

export default FormError;
