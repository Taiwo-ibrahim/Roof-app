import Navbar from "@/components/navbar/Navbar"
import React from "react" 
import styles from "./page.css"
import { GoDotFill } from "react-icons/go"
import Footer from "@/components/footer/Footer"


function Page() {
    return (
      <div className="bitumen__container">
        <div className="bitumen__container-navbar">
          <Navbar />
        </div>
        <div className="bitumen__container-hero">
          <h1>
            Professional Bitumen Roofing & <br /> Roofing Insulation Services
          </h1>
          <p>
            Whether you need a new bitumen roof, insulation upgrades, or
            emergency repairs, we deliver quality, durability, and peace of
            mind. Get in touch today for a free consultation!
          </p>
        </div>
        <div className="flex flex-col w-11/12 mx-auto mt-10 mb-8 ">
          <h2 className="font-semibold text-xl max-w-5xl ">
            We specialize in bitumen roofing systems and advanced roofing
            insulation to provide durable, weather-resistant, and
            energy-efficient solutions for residential, commercial, and
            industrial properties. With years of expertise in the roofing
            industry, we ensure top-quality materials, expert installation, and
            long-term performance for every project.{" "}
          </h2>
        </div>
        <div className="w-full bg-[#efefef] pt-12 pb-16">
          <div className="flex flex-col w-11/12 mx-auto">
            <h2 className="text-2xl mb-[10px] font-bold text-[blue] lg:text-4xl">
              Why Choose Bitumen Roofing?
            </h2>
            <h4 className="text-lg mb-5">
              Bitumen (asphalt) roofing is one of the most reliable,
              cost-effective, and versatile roofing solutions available. It
              offers:
            </h4>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="font-semibold text-[blue]">
                  Superior Waterproofing -
                </strong>{" "}
                Prevents leaks and water damage.{" "}
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Durability –
                </strong>{" "}
                Resists extreme weather (UV rays, rain, wind, and temperature
                fluctuations).
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Flexibility –
                </strong>{" "}
                Adapts to building movements without cracking.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Fire Resistance –
                </strong>{" "}
                Meets high safety standards.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Energy Efficiency –
                </strong>{" "}
                Can be combined with insulation to reduce heating/cooling costs.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 mx-auto mt-10 ">
            <h2 className="text-[blue] font-bold text-2xl mb-3">
              Types of Bitumen Roofing We Offer:
            </h2>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Built-Up Roofing (BUR) –
                </strong>{" "}
                Multiple layers of bitumen and reinforcing fabrics for maximum
                durability.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Modified Bitumen Roofing –
                </strong>
                Enhanced with polymers (APP or SBS) for better flexibility and
                strength.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Torch-On Bitumen –
                </strong>
                Heat-welded for a seamless, leak-proof finish.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                <strong className="text-[blue] font-semibold">
                  Self-Adhesive Bitumen Membranes –
                </strong>
                Easy installation with no flames or hot works required.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-11/12 mx-auto mt-12">
            <h2 className="text-xl mb-[10px] font-bold text-[blue] lg:text-3xl xl:text-4xl">
              Roofing Insulation – Enhance Comfort & Energy Savings
            </h2>
            <p className="text-lg mb-5">
              A well-insulated roof is crucial for temperature control, energy
              efficiency, and structural protection. Our insulation solutions
              include:
            </p>
            <h3 className="text-2xl font-bold text-[blue]">
              Thermal Insulation
            </h3>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                Reduces heat loss in winter and keeps interiors cool in summer.
              </p>
            </div>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>Lowers energy bills by improving HVAC efficiency.</p>
            </div>
            <h3 className="text-2xl mt-8 font-bold text-[blue]">
              Acoustic Insulation
            </h3>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>Minimizes noise from rain, hail, and external disturbances.</p>
            </div>

            <h3 className="text-2xl mt-8 font-bold text-[blue]">
              Vapor Barrier Systems
            </h3>
            <div className="flex gap-[7px] items-start mt-[10px]">
              <GoDotFill className="text-[blue] mt-[4px]" />
              <p>
                Prevents condensation and moisture buildup, protecting the roof
                structure.
              </p>
            </div>
          </div>
        </div>
            <div className="">
                <Footer />
        </div>
        <div></div>
      </div>
    )
}

export default Page