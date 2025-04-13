import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { GoDotFill } from "react-icons/go"
import Footer from "@/components/footer/Footer";



function Page() {
    return (
      <div className="w-full flex flex-col bg-[#efefef]">
        <div className="w-full mb-[140px]">
          <Navbar />
        </div>
        <div className="w-11/12 mx-auto mt-[20px] ">
          <h1 className="font-bold mt-[40px] text-3xl text-[blue] mb-12">
            PRIVACY POLICY
          </h1>
          <p className="font-normal text-base mb-2 text-[#333]">
            Last updated: February 23, 2025
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            This Privacy Policy describes how Tempodak (the "Site", "we", "us",
            or "our") collects, uses, and discloses your personal information
            when you visit, use our services, or make a purchase from
            tempodak.nl (the "Site") or otherwise communicate with us regarding
            the Site (collectively, the "Services"). For purposes of this
            Privacy Policy, "you" and "your" means you as the user of the
            Services, whether you are a customer, website visitor, or another
            individual whose information we have collected pursuant to this
            Privacy Policy.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            Please read this Privacy Policy carefully.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the "Last updated" date and take any other steps
            required by applicable law.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            How We Collect and Use Your Personal Information
          </h2>
          <p className="font-normal text-base mb-1 text-[#333]">
            To provide the Services, we collect personal information about you
            from a variety of sources, as set out below. The information that we
            collect and use varies depending on how you interact with us.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            In addition to the specific uses set out below, we may use
            information we collect about you to communicate with you, provide or
            improve or improve the Services, comply with any applicable legal
            obligations, enforce any applicable terms of service, and to protect
            or defend the Services, our rights, and the rights of our users or
            others.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            What Personal Information We Collect
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            The types of personal information we obtain about you depends on how
            you interact with our Site and use our Services. When we use the
            term "personal information", we are referring to information that
            identifies, relates to, describes or can be associated with you. The
            following sections describe the categories and specific types of
            personal information we collect.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            Information We Collect Directly from You
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Information that you directly submit to us through our Services may
            include:
          </p>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[6px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Contact details {""}
              </strong>
              including your name, address, phone number, and email.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[6px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Order information {""}
              </strong>
              including your name, billing address, shipping address, payment
              confirmation, email address, and phone number.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[6px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Account information {""}
              </strong>
              including your username, password, security questions and other
              information used for account security purposes.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[6px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Customer support information {""}
              </strong>
              including the information you choose to include in communications
              with us, for example, when sending a message through the Services.
            </p>
          </div>
          <p className="font-normal text-base mb-3 text-[#333] mt-1">
            Some features of the Services may require you to directly provide us
            with certain information about yourself. You may elect not to
            provide this information, but doing so may prevent you from using or
            accessing these features.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            Information We Collect about Your Usage
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            We may also automatically collect certain information about your
            interaction with the Services ("Usage Data"). To do this, we may use
            cookies, pixels and similar technologies ("Cookies"). Usage Data may
            include information about how you access and use our Site and your
            account, including device information, browser information,
            information about your network connection, your IP address and other
            information regarding your interaction with the Services.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            Information We Obtain from Third Parties
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Finally, we may obtain information about you from third parties,
            including from vendors and service providers who may collect
            information on our behalf, such as:
          </p>

          <div className="flex gap-[7px] items-start mt-4 ">
            {/* <GoDotFill className="mt-[4px] text-[blue]" /> */}
            <p>
              • Companies who support our Site and Services, such as Shopify.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            {/* <GoDotFill className="mt-[4px] text-[blue]" /> */}
            <p>
              • Our payment processors, who collect payment information (e.g.,
              bank account, credit or debit card information, billing address)
              to process your payment in order to fulfill your orders and
              provide you with products or services you have requested, in order
              to perform our contract with you.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            {/* <GoDotFill className="mt-[4px] text-[blue]" /> */}
            <p>
              • When you visit our Site, open or click on emails we send you, or
              interact with our Services or advertisements, we, or third parties
              we work with, may automatically collect certain information using
              online tracking technologies such as pixels, web beacons, software
              developer kits, third-party libraries, and cookies.
            </p>
          </div>
          <p className="font-normal text-base mb-3 text-[#333]">
            Any information we obtain from third parties will be treated in
            accordance with this Privacy Policy. Also see the section below,
            Third Party Websites and Links.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2">
            How We Use Your Personal Information
          </h2>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Providing Products and Services.{" "}
              </strong>
              We use your personal information to provide you with the Services
              in order to perform our contract with you, including to process
              your payments, fulfill your orders, to send notifications to you
              related to your account, purchases, returns, exchanges or other
              transactions, to create, maintain and otherwise manage your
              account, to arrange for shipping, facilitate any returns and
              exchanges and other features and functionalities related to your
              account. We may also enhance your shopping experience by enabling
              Shopify to match your account with other Shopify services that you
              may choose to use. In this case, Shopify will process your
              information as set forth in its Privacy Policy and Consumer
              Privacy Policy.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Marketing and Advertising.{" "}
              </strong>
              We may use your personal information for marketing and promotional
              purposes, such as to send marketing, advertising and promotional
              communications by email, text message or postal mail, and to show
              you advertisements for products or services. This may include
              using your personal information to better tailor the Services and
              advertising on our Site and other websites. If you are an EEA
              resident, the legal basis for these data processing activities is
              our legitimate interest in selling our products, according to Art.
              6 (1) (f) GDPR.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Security and Fraud Prevention.{" "}
              </strong>
              We use your personal information to detect, investigate or take
              action regarding possible fraudulent, illegal or malicious
              activity. If you choose to use the Services and register an
              account, you are responsible for keeping your account credentials
              safe. We highly recommend that you do not share your username,
              password, or other access details with anyone else. If you believe
              your account has been compromised, please contact us immediately.
              If you are an EEA resident, the legal basis for these data
              processing activities is our legitimate interest in keeping our
              website secure for you and other customers, according to Art. 6
              (1) (f) GDPR.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Communicating with You and Service Improvement.{" "}
              </strong>
              We use your personal information to provide you with customer
              support and improve our Services. This is in our legitimate
              interests in order to be responsive to you, to provide effective
              services to you, and to maintain our business relationship with
              you according to Art. 6 (1) (f) GDPR.
            </p>
          </div>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            Third Party Websites and Links
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Our Site may provide links to websites or other online platforms
            operated by third parties. If you follow links to sites not
            affiliated or controlled by us, you should review their privacy and
            security policies and other terms and conditions. We do not
            guarantee and are not responsible for the privacy or security of
            such sites, including the accuracy, completeness, or reliability of
            information found on these sites. Information you provide on public
            or semi-public venues, including information you share on
            third-party social networking platforms may also be viewable by
            other users of the Services and/or users of those third-party
            platforms without limitation as to its use by us or by a third
            party. Our inclusion of such links does not, by itself, imply any
            endorsement of the content on such platforms or of their owners or
            operators, except as disclosed on the Services.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            Children's Data
          </h2>
          <p className="font-normal text-base mb-2 text-[#333]">
            The Services are not intended to be used by children, and we do not
            knowingly collect any personal information about children. If you
            are the parent or guardian of a child who has provided us with their
            personal information, you may contact us using the contact details
            set out below to request that it be deleted.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            As of the Effective Date of this Privacy Policy, we do not have
            actual knowledge that we “share” or “sell” (as those terms are
            defined in applicable law) personal information of individuals under
            16 years of age.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            Security and Retention of Your Information
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Please be aware that no security measures are perfect or
            impenetrable, and we cannot guarantee “perfect security.” In
            addition, any information you send to us may not be secure while in
            transit. We recommend that you do not use insecure channels to
            communicate sensitive or confidential information to us.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            How long we retain your personal information depends on different
            factors, such as whether we need the information to maintain your
            account, to provide the Services, comply with legal obligations,
            resolve disputes or enforce other applicable contracts and policies.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            Your Rights
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Depending on where you live, you may have some or all of the rights
            listed below in relation to your personal information. However,
            these rights are not absolute, may apply only in certain
            circumstances and, in certain cases, we may decline your request as
            permitted by law.
          </p>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Right to Access / Know:{" "}
              </strong>
              You may have a right to request access to personal information
              that we hold about you, including details relating to the ways in
              which we use and share your information.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Right to Delete:{" "}
              </strong>
              You may have a right to request that we delete personal
              information we maintain about you.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Right to Correct:{" "}
              </strong>
              You may have a right to request that we correct inaccurate
              personal information we maintain about you.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Right of Portability:{" "}
              </strong>
              You may have a right to receive a copy of the personal information
              we hold about you and to request that we transfer it to a third
              party, in certain circumstances and with certain exceptions.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[0px] text-5xl text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Right to Opt out of Sale or Sharing or Targeted Advertising:{" "}
              </strong>
              You may have a right to direct us not to "sell" or "share" your
              personal information or to opt out of the processing of your
              personal information for purposes considered to be "targeted
              advertising", as defined in applicable privacy laws. Please note
              that if you visit our Site with the Global Privacy Control opt-out
              preference signal enabled, depending on where you are, we will
              automatically treat this as a request to opt-out of the "sale" or
              "sharing" of information for the device and browser that you use
              to visit the Site.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Restriction of Processing:{" "}
              </strong>
              You may have the right to ask us to stop or restrict our
              processing of personal information.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Withdrawal of Consent:{" "}
              </strong>
              Where we rely on consent to process your personal information, you
              may have the right to withdraw this consent.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[4px] text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Appeal:{" "}
              </strong>
              You may have a right to appeal our decision if we decline to
              process your request. You can do so by replying directly to our
              denial.
            </p>
          </div>
          <div className="flex gap-[7px] items-start mt-4 ">
            <GoDotFill className="mt-[0px] text-3xl text-[blue]" />
            <p>
              <strong className="text-lg font-semibold text-[blue]">
                Managing Communication Preferences:{" "}
              </strong>
              We may send you promotional emails, and you may opt out of
              receiving these at any time by using the unsubscribe option
              displayed in our emails to you. If you opt out, we may still send
              you non-promotional emails, such as those about your account or
              orders that you have made.
            </p>
          </div>
          <p className="font-normal mt-3 text-base mb-3 text-[#333]">
            You may exercise any of these rights where indicated on our Site or
            by contacting us using the contact details provided below.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            We will not discriminate against you for exercising any of these
            rights. We may need to collect information from you to verify your
            identity, such as your email address or account information, before
            providing a substantive response to the request. In accordance with
            applicable laws, you may designate an authorized agent to make
            requests on your behalf to exercise your rights. Before accepting
            such a request from an agent, we will require that the agent provide
            proof you have authorized them to act on your behalf, and we may
            need you to verify your identity directly with us. We will respond
            to your request in a timely manner as required under applicable law.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            Complaints
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            If you have complaints about how we process your personal
            information, please contact us using the contact details provided
            below. If you are not satisfied with our response to your complaint,
            depending on where you live you may have the right to appeal our
            decision by contacting us using the contact details set out below,
            or lodge your complaint with your local data protection authority.
            For the EEA, you can find a list of the responsible data protection
            supervisory authorities{" "}
            <a
              className="text-[#000000] font-bold underline"
              href="https://edpb.europa.eu/about-edpb/about-edpb/members"
            >
              here
            </a>
            .
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">
            International Users
          </h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Please note that we may transfer, store and process your personal
            information outside the country you live in. Your personal
            information is also processed by staff and third party service
            providers and partners in these countries.
          </p>
          <p className="font-normal text-base mb-3 text-[#333]">
            If we transfer your personal information out of Europe, we will rely
            on recognized transfer mechanisms like the European Commission's
            Standard Contractual Clauses, or any equivalent contracts issued by
            the relevant competent authority of the UK, as relevant, unless the
            data transfer is to a country that has been determined to provide an
            adequate level of protection.
          </p>
          <h2 className="font-bold text-xl text-[blue] mb-2 mt-3">Contact</h2>
          <p className="font-normal text-base mb-3 text-[#333]">
            Should you have any questions about our privacy practices or this
            Privacy Policy, or if you would like to exercise any of the rights
            available to you, please call or email us at
            gabriellobaton90@gmail.com or contact us at Versteegstraat 4,
            Voorburg, 2273 VB, NL.
          </p>
          <p className="font-normal text-base mb-[80px] text-[#333]">
            For the purpose of applicable data protection laws and if not
            explicitly stated otherwise, we are the data controller of your
            personal information.
          </p>
            </div>
            <div>
                <Footer />
            </div>
      </div>
    )
}


export default Page 