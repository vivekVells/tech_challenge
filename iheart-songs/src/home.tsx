import React from "react";
import SongsTable from "./songs-table";
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to iHeart💖 Songs Dashboard</h1>
      </header>

      <SongsTable />
    </div>
  );
};

export default Home;
