import Link from "next/link";
import React from "react";

const Destination = () => {
  return (
    <section className="mt-16">
      <div className="text-center">
        <p class="text-3xl  css-family css-color-2 section-title">
          TOP STUDY DESTINATIONS AROUND THE WORLD
        </p>
        <p className="text-md css-family css-color-2 mt-4 section-subtitle">
          Discover which Top Destinations are PERFECT for You to Actually Make
          Your Dreams a Reality
        </p>
      </div>

      <div className="flex items-center justify-center mt-11">
        <div className="w-4/5">
          <div className="grid desitinations grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Link href={"/study-in-uk"}>
              <div className="item h-72  relative text-center flex flex-col justify-end rounded-2xl overflow-hidden">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1560580184-2f022cabec4a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                    UK
                  </h5>
                </div>
              </div>
            </Link>
            <Link href={"/study-in-usa"}>
              <div className="item h-72 col-span-2  relative text-center flex flex-col justify-end rounded-2xl overflow-hidden">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                    USA
                  </h5>
                </div>
              </div>
            </Link>
            <Link href={"/study-in-dubai"}>
              <div className="item h-72  relative text-center flex flex-col justify-end rounded-2xl overflow-hidden">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/dubai.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Dubai
                  </h5>
                </div>
              </div>
            </Link>
            <Link href={"/study-in-malta"}>
              <div className="item h-72  relative text-center flex flex-col justify-end rounded-2xl overflow-hidden">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/malta.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                    Malta
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
