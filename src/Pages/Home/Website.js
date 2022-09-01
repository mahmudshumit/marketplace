import React from "react";
import website from "../../assets/images/hero.png";
import bg from "../../assets/images/bg.jpg";

const Website = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
      }}
      className="flex justify-center  items-center  "
    >
      <div className="flex-1 px-12">
        <img className="mt-[-90px] " src={website}></img>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-primary font-bold py-2">
          Why should you Choose Our Website ?
        </h1>
        <p className="text-white text-left px-2">
          CosMos is the leader in NFTsales. OpenSea has all sorts of digital
          assets available on its platform, and it's free to sign up and browse
          the extensive offerings. It also supports artists and creators and has
          an easy-to-use process if you want to create your own NFT (known as
          "minting")

        </p>
      </div>
    </section>
  );
};

export default Website;
