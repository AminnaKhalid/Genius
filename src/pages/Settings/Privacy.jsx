import React from "react";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import "./styles/Privacy.css";

const Privacy = () => {
  return (
    <>
      <div className="mmain">
        <Navbar />
        <div className="ccontainer">
          <Heading headingtitle="Privacy Policy" />
          <div className="privacy_content">
            <div className="privacy_text">
              At Genius, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines the types of information we collect, how we use
              it, and the measures we take to safeguard your data. Safety and
              Securitythe types of information we collect, how we use it, and
              the measures we take to safeguard your data. Safety and Security
            </div>
            <div className="privacy_text">
              Your safety and security are important to us. We employ
              industry-standard security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
              Your safety and security are important to us. We employ
              industry-standard security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </div>
            <div className="privacy_head">Sharing Your Information</div>
            <div className="privacy_text">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted third
              parties who assist us in operating our website, conducting
              business, or servicing you, as long as those parties agree to keep
              this information confidential.
            </div>
            <div className="privacy_head">Cookies</div>
            <div className="privacy_text">
              CookiesWe use cookies to enhance your experience on our website.
              Cookies are small files that a site or its service provider
              transfers to your computer's hard drive through your web browser
              (if you allow) that enables the site's or service provider's
              systems to recognize your browser and capture and remember certain
              information.
            </div>
            <div className="privacy_head">Your Choices</div>
            <div className="privacy_text">
              Your Choices You can choose to opt-out of receiving promotional
              emails from us by following the instructions provided in each
              email. You may also contact us to update or delete your personal
              information from our records.
            </div>
            <div className="privacy_head">Changes to this policy</div>
            <div className="privacy_text">
              Changes to This PolicyWe reserve the right to modify this Privacy
              Policy at any time. Any changes will be effective immediately upon
              posting the updated policy on our website.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
