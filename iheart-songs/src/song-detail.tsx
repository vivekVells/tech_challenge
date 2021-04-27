import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./song-detail.css";
import logo from "./assets/images/rihanna-profile.jpg";
import { Song } from "./API";
import { getRandomMusicDirector } from "./utils";

interface LocationStateProps {
  songData: Song;
}

const SongDetail: React.FC = (props) => {
  const history = useHistory();

  // useLocation state helps to access props data passed to this component
  const { state } = useLocation<LocationStateProps>();
  const { song: songName, songReleaseDate, artist, playCount } = state.songData;
  const musicDirector = getRandomMusicDirector();

  return (
    <div className="song-detail">
      <header>
        <h1>Song Detail</h1>
      </header>

      <section className="album-poster-banner">
        <h3>
          🔥🔥🔥 {songName}, {songReleaseDate} by {artist} 🔥🔥🔥
        </h3>
      </section>

      <section className="album-poster-summary">
        <div className="album-cover">
          <img src={logo} alt="artist-profile" />
        </div>
        <div className="album-description">
          <p>
            Official Music 🎶 for 💿 {songName} by {artist} ⚡⚡⚡ ft. Justin
            Timberlake
          </p>
          <p>Director: 🎬 {musicDirector ?? 'Anthony Mandler'}</p>
          <p>Cast: Rihanna, Justin Timberlake</p>
          <p>Play Count: 🔄{playCount}</p>
        </div>
      </section>

      <footer className="footer">
        <button className='primary-btn' onClick={() => history.goBack()}>Back</button>
      </footer>
    </div>
  );
};

export default SongDetail;
