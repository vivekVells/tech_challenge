import React from "react";
import "./songs-table.css";
import useSongs from "./hooks/use-songs";

const SongsTable: React.FC = () => {
  const [loading, _, songs] = useSongs();
  const tableHeaders = [
    "Artist",
    "Song Name",
    "Play Count",
    "Release Date",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
    "Metrics A",
  ];

  const Table: React.FC = () => {
    return (
      <section>
        <ol role="table" className="table-container">
          <li className="item item-container">
            {tableHeaders.map((header) => (
              <div
                className="attribute"
                data-name={header}
                onClick={() => {
                  console.log("clicked", header);
                }}
              >
                {header}
              </div>
            ))}
          </li>

          {/* @todo: entire songs data  */}
          {/* {songs?.map((songData, index, songs) => {
            return (
              <li className="item item-container">
                <>
                  <div className="attribute" data-name={songData.artist} key={index}>
                    {songData.artist}
                  </div>
                </>
              </li>
            );
          })} */}

          {songs?.slice(0, 10)?.map((songData, index, songs) => (
            <li className="item item-container">
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
