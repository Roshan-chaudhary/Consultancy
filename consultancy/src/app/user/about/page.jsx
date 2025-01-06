import Image from "next/image";
import React from "react";
import Team from "./components/Team";

const page = () => {
  return (
    <div>
      <div class="relative bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-56">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        <div className="relative p-6 px-6 py-14 md:px-12 flex items-center h-full">
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Home / About Us
          </h5>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-20 w-11/12">
          <div className="lg:grid lg:grid-cols-2 gap-5">
            <Image src={"/mission.jpeg"} width={500} height={500} />

            <div className="mt-5 text-justify">
              <p className=" text-left text-[#fe4d00] font-bold text-[30px]">
                Our Mission
              </p>{" "}
              <br /> Our organization has single minded focus; to guide students
              to the best possible institutions to enable them to build their
              future. Using our expertise and vast experience, we can identify
              the most suitable institutions for each student. Our excellent
              network with the Dubai Institutions helps us to deliver the best
              services to our students. Measuring the contentment of many
              students and their guardians, we are now showered with their
              unconditional love proving the bricks to success. This has
              triggered the expansion of our facilities for the students of all
              levels and faculties. Aspire Global Education with its incessant
              services to students, willing to carry on higher study abroad, has
              created own border in study abroad consultation as the most
              reliable source. We are proud to announce that students in various
              faculties and institutions abroad have found our services better
              than the best.
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-5 mt-6" dir="rtl">
            <Image src={"/vision.jpeg"} width={500} height={500} />
            <div className="mt-5 text-justify">
              <p className=" text-left text-[#fe4d00] font-bold text-[30px]">
                Our Core{" "}
              </p>
              <br /> Values Excellence: We are committed to delivering
              excellence in all our services. Integrity: We conduct our business
              with honesty, transparency, and ethical practices. Collaboration:
              We foster a culture of collaboration, teamwork, and mutual
              respect. Innovation: We embrace innovation and continuously seek
              new ways to enhance our services. Empowerment: We focus on
              empowering students, partners and stakeholders for sustainability.
            </div>
          </div>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default page;
