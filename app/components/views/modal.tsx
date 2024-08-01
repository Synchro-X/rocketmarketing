
import { Form } from "./form";
import { Dispatch, SetStateAction } from "react";

export const FormModal = ({
  open,
  setOpen,
}: {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
}) => {


    const handleBackgroundClick = () => {
    setOpen(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  
    if(!open) return null
  return (
    <>
      <div
        className="absolute z-[1000] top-0 left-0 w-full backdrop-blur-[6px] bg-[#12141d]/[0.5]"
        onClick={handleBackgroundClick}
      >
        <div className="flex justify-center w-full h-full items-center">
          <div className="" onClick={handleContentClick}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};


const Socials = [
  "/assets/Frame 1686552573.png",
  "/assets/Frame 1686552577.png",
  "/assets/Frame 1686552578.png",
  "/assets/Frame 1686552579.png",
];