export default function Header() {
  return (
    <div className="bg-white font-bold text-black p-4 fixed top-0 left-0 w-full z-50 shadow-md flex justify-center items-center gap-10">
      <div className="flex mx-7">
        <h1>Waste Heroes</h1>
      </div>
      <div className="flex mx-7">
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
