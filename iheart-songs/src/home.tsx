import React from "react";
import SongsTable from "./songs-table";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>HOME</h1>
      </header>
      <section>
        <SongsTable />
      </section>
    </div>
  );
};

export default Home;
