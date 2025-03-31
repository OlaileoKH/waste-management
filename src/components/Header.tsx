import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white text-gray-800 font-bold  p-4 fixed top-0 left-0 w-full z-50 shadow-md flex justify-center items-center gap-10">
      <div className="flex mx-7 ">
      <Image
      src="/recycle.jpg"
      width={65}
      height={10}
      alt="logo"
    />

        <ul className="font-black ">
        <li >Waste</li>
        <li className=" text-amber-600">Heroes</li>
        </ul>
      </div>
      <div className="flex mx-7 text-gray-600">
        <ul className="flex gap-4">
          <li>Solution</li>
          <li>Services</li>
          <li>About us</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
}
