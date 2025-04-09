import Navbar from "@/components/navbar/Navbar"
import React from "react"
import { GoDotFill } from "react-icons/go"
import { GiCheckMark } from "react-icons/gi"
import Footer from "@/components/footer/Footer"


function Page() {
    return (
      <div className="flex flex-col w-full">
        <div className="w-full mb-[140px]">
          <Navbar />
        </div>
        <div className="w-full bg-[url('/renovation-bg.jpg')] bg-cover bg-center h-[70vh] max-h-[700px] ">
          <h1 className="text-2xl pt-[120px] ml-[20px] xl:text-4xl w-11/12 text-white font-bold text-left lg:pt-[200px] lg:ml-[40px] ">
            Professional Roof Renovation Services – Durable, Reliable &
            Affordable
          </h1>
        </div>
        <div className="flex flex-col w-11/12 mx-auto mt-12 mb-10">
          <h1 className="text-3xl font-bold text-[blue] mb-[10px]">
            Expert Roof Renovations by [Your Business Name]
          </h1>
          <p className="text-lg mb-5">
            A strong, well-maintained roof protects your home or business from
            the elements. At [Your Business Name], we specialize in roof
            repairs, replacements, and renovations to enhance durability, energy
            efficiency, and curb appeal. Whether your roof has storm damage,
            leaks, or just needs an upgrade, our skilled team delivers
            top-quality workmanship.
          </p>
        </div>
        <div></div>
        <div className="w-full bg-[#efefef] pt-12 pb-16">
          <div className="w-11/12 mx-auto ">
            <h2 className="font-bold text-3xl text-[blue] mb-3">
              Our Roof Renovation Services
            </h2>
            <p className="text-lg ">
              We provide comprehensive roofing solutions for residential and
              commercial properties:
            </p>
            <h2 className="mt-5 font-bold text-2xl text-[blue]">
              Full Roof Replacement
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Shingle Roofing -
                </strong>{" "}
                Asphalt, architectural, and premium shingles
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Metal Roofing –
                </strong>
                Durable, energy-efficient, and long-lasting
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Tile & Slate Roofing –
                </strong>
                Classic aesthetics with superior durability
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Flat Roof Solutions –
                </strong>
                EPDM, TPO, and modified bitumen
              </p>
            </div>
            <h2 className="mt-8 font-bold text-2xl text-[blue]">
              Roof Restoration & Coatings
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Protective sealants to prevent leaks and UV damage</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Reflective coatings to improve energy efficiency</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Moss & algae removal to maintain roof integrity</p>
            </div>
            <h2 className="mt-8 font-bold text-2xl text-[blue]">
              Emergency Roof Services
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>24/7 emergency repairs for storm or accident damage</p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GoDotFill className="mt-[4px] text-[blue]" />
              <p>Temporary tarping & quick fixes to prevent further damage</p>
            </div>
            <h2 className="mt-8 font-bold text-2xl text-[blue]">
              Why Choose Us for Your Roof Renovation?
            </h2>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Licensed & Insured Professionals –{" "}
                </strong>
                Safe, reliable, and compliant work
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  High-Quality Materials –{" "}
                </strong>
                Trusted brands with long-term warranties
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Free Inspections & Estimates –{" "}
                </strong>
                Transparent pricing, no hidden fees
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Fast & Clean Work –{" "}
                </strong>
                Minimal disruption, thorough cleanup
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-4 ">
              <GiCheckMark className="mt-[4px] text-[blue]" />
              <p>
                <strong className="text-lg font-semibold text-[blue]">
                  Local Expertise –{" "}
                </strong>
                Knowledge of regional weather challenges
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