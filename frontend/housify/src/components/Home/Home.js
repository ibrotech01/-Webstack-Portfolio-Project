import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import Footer from "../Footer/Footer";
import SearchIcon from "@mui/icons-material/Search";
import HeroImageBox from "../utils/HeroImageBox";

function Home(props) {
  return (
    <div className="Home">
      <Header />
      <section className="ml-16 h-screen mr-16">
        <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10 pt- md:my-auto">
              <h1 className="pb-8 text-4xl md:text-6xl">Find Your Next Perfect Place To Live</h1>
              <p className="text-xl">Let's help you find a home that is perfect for you</p>
              <form className="relative">
                <input className="input-btn outline-0 text-black p-5 mt-12 " placeholder="Abuja, NG"></input>
                <SearchIcon className=" absolute " />
              </form>
            </div>

            <HeroImageBox p="Featured Homes" />
          </div>
        </div>
      </section>
      <section className="bg-black h-screen text-white flex">
        <div className="ml-36 pt-28 pr-28">
          <h3 className="text-purple-700 text-2xl">About Us</h3>
          <h2 className="font-bold mt-6 text-4xl">We Provide The Best Property For You</h2>
          <p className="text-2xl font-extralight mt-4">
            With our vast search tool, you can find yourr dream home from any location in the world. All we do is help you find the place, meet the agents, and seal the deal. There's no extra
            commission for our service.
          </p>
          <button className="btn bg-purple-700 text-black mt-5">Learn More</button>
        </div>
        <div className="pt-40 pl-16 ">
          <div id="left">
            <ApartmentIcon></ApartmentIcon>
            <h3 className="text-white">Buy Property</h3>
            <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
          </div>

          <div id="right">
            <ApartmentIcon></ApartmentIcon>
            <h3>Sell Property</h3>
            <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
          </div>

          <div id="left">
            <ApartmentIcon></ApartmentIcon>
            <h3>Rent Property</h3>
            <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
          </div>

          <div id="right">
            <GroupIcon></GroupIcon>
            <h3>Property Agent</h3>
            <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
          </div>
        </div>
      </section>
      <section className="bg-black h-screen text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Featured Properties</h3>
          <p>Check out the top rated properties around the world.</p>
        </div>
      </section>
      <section className="bg-black h-screen text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">How it Works</h3>
          <p>Confidence in Collaboration</p>
        </div>
      </section>
      <section className="bg-black h-screen text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Meet an Agent</h3>
          <p>Do you prefer to get advice from an Agent?</p>
          <p>Now you meet them across the world.</p>
        </div>
      </section>
      <section className="bg-black h-screen text-white">
        <div className="text-center pt-14">
          <h3 className="text-purple-700 text-2xl">Our Parners</h3>
          <p>We have strong partnership with renowned agencies and organizations.</p>
        </div>
      </section>
      <section className="bg-black  text-center">
        <h3 className="text-purple-700 text-2xl ">Have a Question?</h3>
        <p className="mb-40 text-white">Let us help you.</p>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
