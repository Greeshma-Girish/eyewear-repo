import React, { useState,useRef} from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import bannerimg from "../assets/banner.png";
import "../styles/App.css";

const faceShapeImages = {
  Oval: "/assets/info/Oval.png",
  Circle: "/assets/info/Circle.png",
  Square: "/assets/info/Square.png",
  Triangle: "/assets/info/Triangle.png",
  Diamond: "/assets/info/Diamond.png",
  Heart: "/assets/info/Heart.png",
};

function Home() {
  
  const [faceShape, setFaceShape] = useState("");
  const [glass, setGlass] = useState([]);

  const handleFind = async () => 
  {
    if (!faceShape) {
      toast.warn("Please select a face shape");
      return;
    }
   toast.info("Loading...", { autoClose: true });
    try {
      const res = await axios.get(
        `/api/products?faceShape=${faceShape}`
      );
      setGlass(res.data[0].glass);  
      toast.success("Glasses found");
    } catch (err) {
      console.error("Error fetching products:", err);
      setGlass([]);
    }
  };
  const nextsec = useRef(null);
  const scrollDown= () =>{
    nextsec.current?.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
      <ToastContainer />
      <div id="home" className="banner">   
        <div className="text">
          <h1 className="heading">Elevate Your Look, Frame by Frame</h1>
          <p className="subheading">
            Discover the perfect pair of glasses that fit your face and your vibe.
          </p>
          <button className="button" onClick={scrollDown}>Find Now</button>
        </div>
        <img className="bannerImg" src={bannerimg} alt="Eyewear" />
      </div>

      <div ref={nextsec} id="products" className="box">
        <h3 className="boxHeading">Find the Perfect Fit</h3>
        <div className="finderControls">
          <select className="select" value={faceShape} onChange={(e) => setFaceShape(e.target.value)}>
            <option value="" disabled>Select your face shape</option>
            <option>Oval</option>
            <option>Circle</option>
            <option>Square</option>
            <option>Triangle</option>
            <option>Diamond</option>
            <option>Heart</option>
          </select>
          <button className="findButton" onClick={handleFind}>Find Glasses</button>
        </div>
      </div>

      {faceShape && faceShapeImages[faceShape] && (
        <div className="infoImageContainer">
          <img
            src={faceShapeImages[faceShape]}
            alt="err"
            className="infoImage"
          />
        </div>
      )}
      
      
      <div className="bottomImageContainer">
        {glass.length > 0 && glass.map((g, index) => (
          <div key={index} className="glassItem">
            <img
              key={index}
              src={`/${g.image}`}
              alt={g.type}
              className="bottomImage"
            />
            <p className="glassType">{g.type}</p>
          </div>
          ))}
      </div>
    </>
  );
}

export default Home;
