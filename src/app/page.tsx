import Image from "next/image";
export default function Home() {
  return (
    <div>
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
      <div className="h-screen bg-white grid grid-cols-2">
        <div className="w-3/4 h-3/4 m-12 mr-10 mx-auto flex items-center">
          <Image
            src="/image.png" 
            layout="responsive"
            width={200}
            height={100}
            alt="Image"
          />
        </div>
        <div className="flex flex-col items-start justify-center mr-60 text-black">
            <div>
              <h1 className="text-5xl text-emerald-600  font-extrabold">
                Welcome to
              </h1>
            </div>
            <div>
              <h1 className="text-5xl text-emerald-600 font-extrabold">
                WasteHeroes
              </h1>
            </div>
            <div className="flex justify-start items-center pt-3 pb-3">
              <hr className="w-20 h-1 bg-amber-600 border-0" />
            </div>
          <p className="text-gray-600">
            We are one of the largest recycling companies in the Usa serving the local community for over 30 years. We are committed to working with business and organization to help reduce the amount of waste. We are professionals in turning any waste products into profit. At WasteHeroes, we recycle any waste and have different options both for business and residential areas.
          </p>
        </div>
    </div>
    {/* <div className="h-screen bg-emerald-600"></div> */}

    </div>
  );
}
