import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/service/Service";
import Image from "next/image";
import { FaCheck } from "react-icons/fa"




export default function Home(props) {
  return (
    <div className="home__container">
      <div className="home__container-nav">
        <Navbar />
      </div>
      <div className="home__container-body">
        <div className="home__body-group1">
          <div className="home__container-body_left">
            <h4>Van Ommen Roof Maintenance</h4>
            <h1>
              Roofer <br />
              sloping & flat roofs{" "}
            </h1>
            <p>
              specialized in installing, renovating and repairing flat and
              sloping roofs.
              <br /> With a team of experienced and service-oriented roofers, we
              are the solution for all your roofing work in Brabant.
            </p>
            <button className="inspection-btn">
              Free roof inspection <br />
              <span>with professional advice </span>
            </button>
          </div>
          <div className="home__container-body_right">
            <h2>Direct contact</h2>
            <form className="home__container-body_right-form">
              <input placeholder="Name" type="text"></input>
              <input placeholder="Email address" type="email"></input>
              <input placeholder="Telephone: +234-0000" type="phone"></input>
              <textarea placeholder="What is your project or your question"></textarea>
              <button>Send</button>
            </form>
            <div className="home__container-body_right-call">
              <h3>call us now</h3>
              <h1>090-000001</h1>
            </div>
          </div>
        </div>

        <div className="home__body-group2">
          <div className="home__body-group2_left">
            <h4>Van Ommen Roof Maintenance</h4>
            <h2>
              We are a full-service roofing company for individuals and
              companies in Tilburg, Breda, Rosmalen, Den Bosch, Nijmegen,
              Eindhoven and the surrounding area.
            </h2>
            <div className="home__body-group2_left-chekpoints">
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
              <p>
                <FaCheck className="fa-check" />
                We are members of various trade associations that supervise
              </p>
            </div>
            <button className="inspection-btn">
              Free roof inspection <br />
              <span>with professional advice </span>
            </button>
            <p>
              The contact with you as
              <strong> a customer</strong> is very important to us. It goes
              without saying that your wishes are <strong>central</strong>, such
              as your budget and the requirements you set for the work. We work
              meticulously and <strong>safely</strong> and try to keep the
              nuisance in your home to an absolute minimum.{" "}
            </p>
            <p>
              The contact with you as
              <strong> a customer</strong> is very important to us. It goes
              without saying that your wishes are <strong>central</strong>, such
            </p>
          </div>
          <div className="home__body-group2_right">
            <img src="/bg-02.webp" alt="" />
          </div>
        </div>

        <div className="home__body-group3">
          <h2>
            Your partner in quality roofing <br /> Work at low cost
          </h2>
          <p>
            The first step you should take when installing a new roof or
            repairing a damaged <br /> one is the most important one: CALL THE
            BEST COMPANY
          </p>
          <button className="inspection-btn">
            Free roof inspection <br />
            <span>with professional advice </span>
          </button>
        </div>

        <div className="home__body-group4">
          <h2>Services</h2>
          <p className="font-semibold text-2xl">
            Does it have to do with a roof? Then we can help you!
          </p>
          <div className="home__body-group4_services">
            <Services
              title="Construction Services"
              description="We provide roofing construction services for businesses and homes, focusing on different priorities for each. For businesses, it's durability and efficiency; for homes, it's aesthetics and comfort. We use quality materials and skilled professionals for all projects, aiming for customer satisfaction. Contact us for your roofing needs."
              Link="/construction"
              image="/construction-bg.jpg"
            />
            <Services
              title="Roofing(mainly bitumen and roofing insulation)"
              description="We offer expert bitumen roofing services, ideal for flat or low-slope roofs, providing strong waterproofing and durability. Our roof insulation solutions improve energy efficiency, keeping your building warmer in winter and cooler in summer, using high-quality materials for lasting performance."
              Link="/bitumen-roofing"
              image="bitumen-bg.jpg"
            />
            <Services
              title="Renovation Services"
              description="We offer roof renovation services as a cost-effective alternative to full replacement. Our experts inspect your roof, perform targeted repairs or upgrades (materials, ventilation, insulation), and enhance its appearance for both commercial and residential properties. We aim to restore your roof's integrity and protect your investment. Contact us in Lagos for an assessment and a tailored renovation plan."
              Link="/renovations"
              image="/renovation-bg.jpg"
            />
            <Services
              title="Leakages and Repairs"
              Link="/repairs"
              description="We offer nationwide roof leak detection and repair services across Nigeria for all roof types. Our expert team provides prompt and effective solutions, including emergency repairs and preventative advice, to protect your property from water damage. Contact us for a detailed assessment and reliable repairs, wherever you are in Nigeria."
              image="/repairs-bg.jpg"
            />
          </div>
        </div>

        <div className="home__body-group5">
          <div className="home__body-group5_content">
            <h2>Request a free professional roof inspection</h2>
            <p>
              Apply directly: Be assured of a good and safe roof on your home.
            </p>
            <button>Free professional Roof Inspection</button>
          </div>
        </div>

        <div className="home__body-group6">
          <div className="home__body-group6_left">
            <img src="/bg-01.jpg" alt="" />
          </div>
          <div className="home__body-group6_right">
            <h2>Satisfied customers</h2>
            <div className="home__body-group6_right-card">
              <h4>
                "At Van Ommen Roof Maintenance, your complete satisfaction is
                our first goal. Our roofing specialists are ready to guide you
                through each stage, starting with a detailed inspection and
                assessment of your roofing needs."
              </h4>
              <p>Timo</p>
              <small>Owner</small>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
