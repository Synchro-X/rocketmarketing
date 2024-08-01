import { SetStateAction, Dispatch } from "react";

export const Input = ({
  value,
  change,
  placeholder,
  type,
}: {
  value: string;
  change: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
}) => {

    if(type === "textarea"){
        return (
          <div>
            <textarea
              value={value}
              onChange={(e) => change(e.target.value)}
              placeholder={placeholder}
              className="min-h-[134px] block rounded-[24px] border-[1px] border-white/[0.2] px-[22px] font-outfit text-base font-medium bg-transparent w-full"
            ></textarea>
          </div>
        );
    }
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={placeholder}
        className="min-h-[48px] block rounded-[24px] border-[1px] border-white/[0.2] px-[22px] font-outfit text-base font-medium bg-transparent w-full"
      />
    </div>
  );
};


