import React from "react";
import { useHistory } from "react-router-dom";

const SongDetail: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <header>
        <h1>Song Detail</h1>
      </header>
      <footer>
        <button onClick={() => history.push("/")}>Back</button>
      </footer>
    </div>
  );
};

export default SongDetail;