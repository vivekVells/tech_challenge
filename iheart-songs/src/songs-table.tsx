import React, { useMemo } from "react";
import "./songs-table.css";
import useSongs from "./hooks/use-songs";
import { useHistory } from "react-router";

const SongsTable: React.FC = () => {
  const [loading, _, songs] = useSongs();
  
  // to generate metrics header value from 'Metrics A' to 'Metrics P'
  const metricsHeader = useMemo(() => {
    let charCount = 65;

    return Array(16)
      .fill("")
      .map(() => `Metrics ${String.fromCharCode(charCount++)}`);
  }, []);

  const tableHeaders = [
    "Artist",
    "Song Name",
    "Play Count",
    "Release Date",
    ...metricsHeader,
  ];

  console.log({ ge: metricsHeader });

  const Table: React.FC = () => {
    const history = useHistory();

    return (
      <section className="songs-table">
        <ol role="table" className="table-container">
          <li className="item item-container">
            {tableHeaders.map((header) => (
              <div
                className="attribute attribute-header"
                data-name={header}
                onClick={() => {
                  console.log("clicked", header);
                }}
              >
                {header}
              </div>
            ))}
          </li>

          {songs?.map(songData => (
            <li
              className="item item-container"
              onClick={() => {
                history.push("/song", { songData });
              }}
            >
              <div className="attribute" data-name={songData.artist}>
                {songData.artist}
              </div>
              <div className="attribute" data-name={songData.song}>
                {songData.song}
              </div>
              <div className="attribute" data-name={songData.playCount}>
                {songData.playCount}
              </div>
              <div className="attribute" data-name={songData.songReleaseDate}>
                {songData.songReleaseDate}
              </div>
              <div className="attribute" data-name={songData.metricA}>
                {songData.metricA}
              </div>
              <div className="attribute" data-name={songData.metricB}>
                {songData.metricB}
              </div>
              <div className="attribute" data-name={songData.metricC}>
                {songData.metricC}
              </div>
              <div className="attribute" data-name={songData.metricD}>
                {songData.metricD}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
              <div className="attribute" data-name={songData.metricE}>
                {songData.metricE}
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  };

  return (
    <>
      {/* @todo: replace this text with loader */}
      {loading && <p>Loading Table... Please wait...</p>}

      {!loading && <Table />}
    </>
  );
};

export default SongsTable;
