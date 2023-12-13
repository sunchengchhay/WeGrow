<<<<<<< HEAD
import React from 'react'

import RecruitImg from '../../assets/home/recruit.svg'
import TeamworkImg from '../../assets/home/teamwork.svg'
import VolunteerImg from '../../assets/home/volunteer.svg'

=======
import React from "react";
>>>>>>> origin/dana-merge

import TeamworkImg from "../../assets/home/teamwork.svg";
import VolunteerImg from "../../assets/home/volunteer.svg";
import RecruitImg from "../../assets/home/recruit.svg";

const Whoarewe = () => {
  return (
<<<<<<< HEAD
    <section className='w-full h-auto flex justify-center bg-gray-50'> 
        <div className='w-3/4 pb-20'>
            {/* Who are we */}
            <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1 mt-12 lg:mt-10 w-full h-auto">
                <div class="col-span-12 pt-8">
                    <h1 className='text-3xl md:text-5xl font-extrabold flex justify-center sm:justify-normal'>Who are we?</h1>
                </div>
                <div class="col-span-12 rounded-lg sm:col-span-8 lg:pt-10 text-sm sm:text-base lg:text-lg lg:pr-16">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are university students. We want to help young people develop the skills and confidence they need to become leaders in their communities and the world. <br />
                        We hope that our website will be a resource for young people who are interested in becoming leaders, facing problems head-on, and loving to volunteer. We are here to support you on your journey!
                    </p>
                </div>
                <div class="col-span-9 rounded-lg sm:mx-0 sm:col-span-4 ml-20 sm:ml-0">
                    <img src={TeamworkImg} alt="volunteer teamwork" />
                </div>
=======
    <section className="w-full h-auto flex justify-center bg-white">
      <div className="w-3/4 pb-10">
        {/* Who are we */}
        <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1 mt-12 lg:mt-10 w-full h-auto">
          <div className="col-span-12 pt-8">
            <h1 className="xl:text-5xl text-3xl lg:text-4xl font-extrabold flex justify-center sm:justify-normal">
              Who are we?
            </h1>
          </div>
          <div className="col-span-12 rounded-lg sm:col-span-8 lg:pt-10 text-sm sm:text-base lg:text-lg lg:pr-16">
            <p>
              <span className="lg:pl-20 pl-6"></span>We are university students.
              We want to help young people develop the skills and confidence
              they need to become leaders in their communities and the world.{" "}
              <br />
              We hope that our website will be a resource for young people who
              are interested in becoming leaders, facing problems head-on, and
              loving to volunteer. We are here to support you on your journey!
            </p>
          </div>
          <div className="col-span-9 w-[100%] ml-8 lg:w-full rounded-lg sm:mx-0 sm:col-span-4 lg:ml-0 sm:ml-0">
            <img src={TeamworkImg} alt="volunteer teamwork" />
          </div>
>>>>>>> origin/dana-merge

          <div className="col-span-12 rounded-lg  sm:col-span-6 object-cover">
            <img src={VolunteerImg} alt="volunteer work" />
          </div>
          <div className="col-span-12 rounded-lg sm:col-span-6">
            <img src={RecruitImg} alt="recruit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
