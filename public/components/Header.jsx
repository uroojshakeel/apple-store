import React from "react";
const Header = () => {
    return (
      <header className="relative w-full h-[300px] overflow-hidden">
        <video
          className="absolute w-full h-96 object-cover"
          src="/iphone.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
      </header>
    );
  };
  
  export default Header;
  