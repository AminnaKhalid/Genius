import React from "react";
import Navbar from "../../components/Navbar";
import './styles/Privacy.css'
import Heading from "../../components/Heading";

const About = () => {
  return (
    <>
      <div className="mmain">
        <Navbar />
        <div className="ccontainer">
          <Heading headingtitle="About Us" />
          <div className="privacy_content">
            <div className="privacy_text">
              Welcome to Genius! We are a dedicated non-profit organization
              committed to empowering elementary students and their families
              through academic support and Social Emotional Learning (SEL). Our
              mission is to inspire a love for learning and foster the growth of
              resilient, well-rounded individuals who are prepared to navigate
              life's challenges with confidence. mission is to inspire a love
              for learning and foster the growth of resilient, well-rounded
              individuals who are prepared to navigate life's challenges with
              confidence.
            </div>
            <div className="privacy_head">Our Vision</div>
            <div className="privacy_text">
              Our VisionAt Genius, we envision a world where every child has the
              tools, support, and environment they need to reach their fullest
              potential. We believe that with the right resources and
              encouragement, every student can achieve greatness. We believe
              that with the right resources and encouragement, every student can
              achieve greatness.
            </div>
            <div className="privacy_head">Our Programms</div>
            <div className="privacy_head">Starstuck Program</div>
            <div className="privacy_text">
              Starstruck Program Our Starstruck Program is designed to make
              learning engaging and fun. Students earn stars by completing
              activities in subjects like math, reading, and science, which they
              can then exchange for exciting prizes in our Starfall store. This
              program not only motivates students to excel academically but also
              teaches valuable life skills such as goal-setting and
              perseverance.
            </div>
            <div className="privacy_head">Nebula (SEL Curriculum) </div>
            <div className="privacy_text">
              Nebula (SEL Curriculum) We integrate Social Emotional Learning
              into our curriculum to help students develop crucial skills such
              as empathy, resilience, and effective communication. Our SEL
              lessons are crafted to build a strong emotional foundation,
              enabling students to thrive both inside and outside the classroom.
            </div>
            <div className="privacy_head">Parent Engagement</div>
            <div className="privacy_text">
              Parent Engagement We believe that parent involvement is key to
              student success. Our workshops and strategy sessions equip parents
              with the tools and knowledge to support their children's
              educational journey. By fostering a collaborative environment, we
              help create a cohesive support system for our students.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
