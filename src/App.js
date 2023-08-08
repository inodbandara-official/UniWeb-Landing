import React from "react";
import { Button } from "./Button";
import { ConcreteComponentNode } from "./ConcreteComponentNode";
import { Copyright } from "./Copyright";
import { DivWrapper } from "./DivWrapper";
import { IconComponentNode } from "./IconComponentNode";
import { ImgWrapper } from "./ImgWrapper";
import { MenuFooter } from "./MenuFooter";
import { MenuFooterVert } from "./MenuFooterVert";
import { NamecandidateNameMenuFooterScore10001 } from "./NamecandidateNameMenuFooterScore10001";
import { NamecandidateNameProperty1WhiteScore101 } from "./NamecandidateNameProperty1WhiteScore101";
import { Property1White } from "./Property1White";
import { PropertyWhiteWrapper } from "./PropertyWhiteWrapper";
import { PropertyWrapper } from "./PropertyWrapper";
import { Social } from "./Social";
import "./style.css";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector-2.svg" />
            <img className="img" alt="Vector" src="vector-1.svg" />
            <img className="img" alt="Mask group" src="mask-group.png" />
            <img className="vector" alt="Vector" src="vector-3.svg" />
            <img className="img" alt="Mask group" src="image.png" />
            <h1 className="first-ever-sri">
              <span className="span">
                First ever Sri Lankan University Students Digital Community Hub
                <br />
              </span>
              <span className="text-wrapper-14">
                {" "}
                Our Mission is to connect you with other fellow students who are are studying in Sri Lanka,
                <br /> and to help you grow your network rapidly while making solid friendships.
              </span>
            </h1>
            <img className="group" alt="Group" src="group-2.png" />
            <div className="group-2">
              <div className="connect-learn-thrive-wrapper">
                <div className="connect-learn-thrive">
                  <span className="text-wrapper-15">Connect, Learn, Thrive!</span>
                </div>
              </div>
              <p className="uni-is-a-cutting">
                Uni is a cutting-edge social media and forum platform, combining the best features , tailored
                specifically for the vibrant student community in Universities. Whether you are pursuing engineering,
                arts, sciences, or any other discipline, Uni is your digital home to engage, learn, and grow together.
              </p>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-16">Sign in</div>
            </div>
          </div>
          <div className="signbut">
            <div className="signbut-off">
              <div className="overlap-group-3">
                <div className="text-wrapper-17">Sign up</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-4">
                    <img className="vector-2" alt="Vector" src="vector-4.svg" />
                    <img className="vector-3" alt="Vector" src="vector-5.svg" />
                    <img className="vector-2" alt="Vector" src="vector-6.svg" />
                    <img className="mask-group" alt="Mask group" src="mask-group-2.png" />
                  </div>
                </div>
                <div className="rectangle" />
                <div className="span-wrapper">
                  <span className="text-wrapper-18">Connect, Learn, Thrive!</span>
                </div>
                <Button className="button-instance" divClassName="design-component-instance-node" property1="twenty" />
                <PropertyWrapper className="button-2" property1="twenty" />
                <MenuFooter
                  className="menu-footer-vert1"
                  property1="white"
                  text="Home"
                  text1="Q&amp;A Forum"
                  text2="SnapMath"
                  text3="Interactive Meetings"
                  text4="Employer Engagement"
                />
                <MenuFooterVert
                  className="menu-footer-vert2"
                  property1="white"
                  text="Project Collaboration"
                  text1="Campus Events"
                  text2="Professional Development"
                  text3="Alumni Network"
                />
                <PropertyWhiteWrapper
                  className="menu-footer-vert3"
                  property1="white"
                  text="Career Insights"
                  text1="Internship Opportunities"
                  text2="Innovative Projects Showcase"
                  text3="Academic Resources"
                />
                <DivWrapper className="menu-footer-vert4" property1="white" />
                <div className="let-s-do-it">Let&#39;s do it!</div>
                <div className="group-4">
                  <ImgWrapper className="social-instance" property1="white" propertyWhite="social.svg" />
                  <Social className="icon-instance-node" />
                  <Property1White className="property-1-white" />
                  <IconComponentNode className="property-1-white-instance" />
                  <ConcreteComponentNode className="social-2" property1="white" />
                  <NamecandidateNameProperty1WhiteScore101 className="social-3" />
                </div>
                <img className="line" alt="Line" src="line-16.svg" />
                <NamecandidateNameMenuFooterScore10001 className="menu-footer-instance" property1="white" />
                <Copyright className="copyright-instance" property1="white" />
                <img className="vydcfflw" alt="Vydcfflw" src="vydcfflw-1.png" />
              </div>
            </div>
            <img className="element" alt="Element" src="32318753-7923176-1.svg" />
            <div className="text-wrapper-19">Join the Movement</div>
            <p className="our-mission-at-uni">
              Our mission at Uni is to empower students like you to unlock your full potential and make the most of your
              university life. By joining Uni, you become part of a vibrant and supportive community that values
              collaboration, growth, and success. <br /> <br />
              Ready to embark on this exciting journey of student networking? Sign up today, and let Uni be your trusted
              companion throughout your academic and professional endeavors.
            </p>
          </div>
          <div className="overlap-5">
            <img className="element-2" alt="Element" src="35020249-8262261-1.svg" />
            <p className="text-wrapper-20">Welcome to Uni - Your Gateway to Student Networking!</p>
          </div>
          <p className="at-uni-we-are">
            At Uni, we are thrilled to present a revolutionary platform designed exclusively for university students in
            Sri Lanka. We understand the importance of networking and collaboration during your academic journey, and
            that&#39;s why we&#39;ve created a powerful space where students from all corners of the country can
            connect, share knowledge, and build meaningful relationships.
          </p>
        </div>
      </div>
    </div>
  );
};
