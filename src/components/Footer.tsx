// import Image from "next/image";

export default function Footer() {
    return (
      <footer className=" bottom-0 w-full bg-green-500 border-t border-white/20  pt-25" 
      style={{
        backgroundImage: 'url(/grass.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
  
        <div className="shadow-md flex justify-center items-center gap-10 font-bold text-white p-4">
          <div className="flex mx-7 ">
            {/* <Image
            src="/recycle.jpg"
            width={45}
            height={1}
            alt="logo"
            /> */}
      
              <ul className="font-black ">
              <li >Waste</li>
              <li className=" text-amber-600">Heroes</li>
              </ul>
            </div>
            <div className="flex mx-10">
                <ul className="flex gap-20">
                  <li className="flex flex-col items-center">
                    Call Us
                    <div className="text-sm text-gray-800">+123456789</div>
                  </li>
                  <li className="flex flex-col items-center">
                    Write Us
                    <div className="text-sm text-gray-800">abc@gmail.com/</div>
                  </li>
                  <li className="flex flex-col items-center">
                    Visit Us
                    <div className="text-sm text-gray-800">Manipur University</div>
                  </li>
                </ul>
            </div>

            <div className='text-white pt-10'>
            © 2025 Copyright. All rights reserved.
            </div>
        </div>
      </footer>
    );
}