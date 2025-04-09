import React from "react";
import styles from "./page.css"
import Navbar from "@/components/navbar/Navbar";
import { TbPointFilled } from "react-icons/tb"
import Footer from "@/components/footer/Footer";



function Construction() {
    return (
      <div className="construction__container">
        <div className="construction__container-navbar">
          <Navbar />
        </div>
        <div className="construction__container-hero">
          <h1>Roof Construction</h1>
          <p>
            Below we discuss some of the frequently asked questions as regards
            to construction of roofs
          </p>
        </div>
        <div className="construction__container-section1">
          <div className="construction__container-section1_left">
            <h2>A new roof is the work of a professional!</h2>
            <p>
              We take pride in delivering professional, high-quality roof
              construction services. From precise planning to expert
              installation, our team uses top-grade materials and proven
              techniques to ensure every new roof is durable, weather-resistant,
              and built to last. We prioritize safety, efficiency, and attention
              to detail on every project, providing reliable roofing solutions
              tailored to each client's needs.
            </p>
          </div>
          <div className="construction__container-section1_right">
            <h3>
              Call us directly <br /> 090-000001
            </h3>
            <img src="/professional-img.jpg" alt="" />
          </div>
        </div>
        <div className="construction__container-seciton2">
          <div className="construction__container-section2_top">
            <h2>Roof Construction</h2>
            <p>
              As your nationwide roofing service provider based in Lagos,
              Nigeria, we understand you might have questions about roof
              construction. Here are some frequently asked ones:
            </p>
          </div>
          <div className="construction__container-section2_bottom">
            <h2>General Roof Construction:</h2>

            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  How long does roof construction typically take?
                </strong>
                The duration depends on the size and complexity of the roof, the
                type of materials used, and weather conditions. We'll provide a
                realistic timeline during our initial consultation.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  How much does a new roof cost?
                </strong>
                The cost varies significantly based on the roof size, materials
                chosen, complexity of the design, and location within Nigeria.
                We offer free, detailed quotations after assessing your specific
                needs.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  Do you handle the removal of the old roof?{" "}
                </strong>
                Yes, we typically include the safe removal and disposal of your
                existing roof as part of our construction service. existing roof
                as part of our construction service.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  What kind of warranty do you offer on new roofs?
                </strong>
                We offer warranties on both the materials used (provided by the
                manufacturer) and our workmanship. The specifics will be
                outlined in your contract.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  Do you comply with local building codes and regulations in
                  Nigeria?
                </strong>
                Absolutely. We ensure all our roof construction projects adhere
                to the relevant Nigerian building codes and safety standards.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  Can you help with the design of my roof?{" "}
                </strong>
                Yes, our experienced team can offer design consultations to
                ensure your new roof is both functional and aesthetically
                pleasing.
              </p>
            </div>

            <h2>Material Specific Questions:</h2>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  What are the benefits of asphalt shingles?
                </strong>
                Asphalt shingles are a popular and cost-effective option
                offering a good balance of durability, weather resistance, and
                variety of styles and colors.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  Why choose metal roofing?
                </strong>
                Metal roofs are known for their longevity, durability, energy
                efficiency, and resistance to fire and pests. They are a great
                long-term investment.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  What are the advantages of tile roofing?
                </strong>
                Tile roofs offer excellent durability, a classic aesthetic, and
                good insulation properties. They are particularly well-suited to
                the Nigerian climate.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  When is a flat roof a suitable option?
                </strong>
                Flat roofs are common for commercial buildings and can also be
                used for residential properties with specific architectural
                designs. They offer opportunities for rooftop access and
                installations
              </p>
            </div>

            <h2>Maintenance & Future Considerations:</h2>

            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  How often should I have my new roof inspected?
                </strong>
                We recommend annual roof inspections to identify and address any
                potential issues early on.
              </p>
            </div>
            <div className="construction--questions">
              <TbPointFilled className="question--bullet" />
              <p>
                <strong className="strong--text">
                  Do you offer roof maintenance services?
                </strong>
                Yes, we offer comprehensive roof maintenance plans to help
                prolong the life of your new roof.
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

export default Construction 