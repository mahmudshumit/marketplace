import React from "react";
import InfoCard from "./InfoCard";
import collection from "../../assets/images/sell1.png";
import Nfts from "../../assets/images/sell2.png";

import list from "../../assets/images/sell3.png";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 ">
      <InfoCard
        pClass="Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
        btnClass="Create"
        cardTittle="Create your collection"
        img={collection}
      ></InfoCard>
      <InfoCard
        pClass="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content"
        btnClass="Add Nft"
        cardTittle="Add your NFTs"
        img={Nfts}
      ></InfoCard>
      <InfoCard
        pClass="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
        btnClass="Sell Now"
        cardTittle="List them for sale"
        img={list}
      ></InfoCard>
    </div>
  );
};

export default Info;
