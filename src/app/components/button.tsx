const Button = ({ name, bgcolor }: { name: string; bgcolor: string }) => {
  return (
    <button
      className={`px-10 py-3 rounded-[4px] font-poppinsmedium ${
        bgcolor === "bg-white" ? "text-black" : "text-white"
      } ${
        bgcolor === "bg-white" ? "border-[1px] border-black" : ""
      } ${bgcolor}`}
    >
      {name}
    </button>
  );
};

export default Button;
