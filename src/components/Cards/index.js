import React from "react";
import Card from "../Card";

const Cards = () => {
  const cardData = [
    {
      title: "Run a Node",
      description: "Learn how to setup a Lukso node from start to finish.",
      path: "/docs/the-guide/start-here",
    },
    {
      title: "Johhny's Node Guide",
      description: "Setting up your system and start the LUKSO network.",
      path: "/docs/Community Guides/2-Johhny EBD Node Guide",
    },
    {
      title: "System & Monitoring",
      description: "How to setup your system and Grafana/Prometheus dashboard.",
      path: "/docs/Community Guides/1-System & monitoring setup",
    },
    {
      title: "VPN",
      description: "How to setup a VPN for your node.",
      path: "/docs/3-Community Guides/3-vpn",
    },
    {
      title: "SSH",
      description: "How to setup SSH for your node.",
      path: "/docs/Community Guides/4-ssh",
    },
    {
      title: "SSH Security",
      description: "Improve your SSH security.",
      path: "/docs/Community Guides/5-SSH Security",
    },
  ];
  return (
    <>
      {cardData.map((data) => (
        <Card
          title={data.title}
          description={data.description}
          path={data.path}
        />
      ))}
    </>
  );
};

export default Cards;
