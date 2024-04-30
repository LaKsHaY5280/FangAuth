interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-y-4">
      <h1 className=" text-3xl font-semibold drop-shadow-md">FangAuth</h1>
      <p className=" text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
