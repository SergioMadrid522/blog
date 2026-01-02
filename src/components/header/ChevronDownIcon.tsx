import { GLOBAL } from "@/data";
export default function ChevronDownIcon() {
  const { chevronIcon } = GLOBAL;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 16 16"
        className="fill-[#edededa1]"
      >
        <path fillRule="evenodd" d={chevronIcon} />
      </svg>
    </>
  );
}
