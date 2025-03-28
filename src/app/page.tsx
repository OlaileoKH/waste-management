export default function Home() {
  return (
    <div className="h-screen bg-[url('/landing.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center pb-7">
          <h3 className="text-lg text-slate-700">Junk removal made easy!</h3>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="text-5xl text-emerald-600 font-extrabold">
            Your Environmental
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-emerald-600 font-extrabold">
            Specialists
          </h1>
        </div>
        <div className="flex justify-center items-center pt-3">
          <hr className="w-20 h-1 bg-emerald-600 border-0" />
        </div>
        <div className="flex justify-center items-center pt-20">
          <button
            type="button"
            className="focus:outline-none text-white bg-amber-600 hover:bg-amber-800 focus:ring-1 focus:ring-amber-600 font-medium rounded-lg text-sm px-7 py-4"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
