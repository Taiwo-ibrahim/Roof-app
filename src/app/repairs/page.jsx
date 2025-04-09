import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";



function Page() {
    return (
      <div className="flex flex-col w-full">
        <div className="flex w-full mb-[140px]">
          <Navbar />
        </div>
        <div className="w-full bg-[url('/repairs-bg.jpg')] bg-cover bg-center h-[70vh] max-h-[700px]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl w-full px-4 md:px-6 lg:w-11/12 text-white font-bold text-left pt-32 md:pt-40 lg:pt-[200px] lg:ml-[40px]">
            Professional Roof Leak Repair Services – Fast, Reliable & Affordable
          </h1>
        </div>
        <div className="flex flex-col w-11/12 mx-auto mt-12 mb-10">
          <h1 className="text-3xl font-bold text-[blue] mb-[10px]">
            Stop Roof Leaks Before They Cause Major Damage!
          </h1>
          <p className="text-lg mb-5">
            A leaking roof can lead to costly water damage, mold growth, and
            structural issues if left untreated. At [Your Business Name], we
            specialize in quick, effective roof leak detection and repair to
            protect your home or business. Our experienced team identifies the
            source of leaks and provides lasting solutions—so you can enjoy a
            dry, safe, and secure property.
          </p>
        </div>
        <div className="w-full bg-[#efefef] pt-12 pb-16">
          <div className="w-11/12 mx-auto ">
            <h2 className="font-bold text-3xl text-[blue] mb-3">
              Our Roof Leak Repair Services
            </h2>
            <h2 className="mt-5 font-bold text-2xl text-[blue]">
              Roof Leak Detection & Diagnosis
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Advanced inspection to pinpoint hidden leaks</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Infrared & moisture detection technology</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Attic and ceiling assessments to trace water paths</p>
            </div>
            <h2 className="mt-5 font-bold text-2xl text-[blue]">
              Emergency Roof Leak Repairs
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p> 24/7 urgent response for sudden leaks</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p> Temporary tarping to prevent further damage</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Permanent fixes for broken shingles, flashing, and seals</p>
            </div>
            <h2 className="mt-5 font-bold text-2xl text-[blue]">
              Common Leak Sources We Fix
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Damaged or Missing Shingles –
                </strong>{" "}
                Wind, hail, and wear-and-tear repairs
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Faulty Flashing –
                </strong>{" "}
                Around chimneys, vents, and skylights
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Clogged or Broken Gutters –
                </strong>{" "}
                Preventing water backup
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Cracked Vent Boots & Pipe Collars –
                </strong>{" "}
                Sealing gaps
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Ice Dam Damage –
                </strong>{" "}
                Winter-related leaks
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Aging Roofs –
                </strong>{" "}
                Worn-out materials needing replacement
              </p>
            </div>
            <h2 className="mt-5 font-bold text-2xl text-[blue]">
              Why Choose Us for Roof Leak Repairs?
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Experienced Professionals –{" "}
                </strong>
                We fix leaks right the first time
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Fast Response –{" "}
                </strong>
                Same-day emergency service available
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  No Hidden Costs –{" "}
                </strong>
                Free inspections & upfront pricing
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Quality Materials –{" "}
                </strong>
                Durable repairs with trusted brands
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Local & Trusted –{" "}
                </strong>
                Serving [Your Service Area] for [X] years
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
}

export default Page