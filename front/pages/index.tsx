import React from "react";

const Home: React.FC = () => {
  const getHomes = () => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:1337/api/homes", false);
    xmlHttp.send(null);

    return JSON.parse(xmlHttp.responseText);
  };

  console.log(getHomes());

  return <div>Hello World!</div>;
};

export default Home;
