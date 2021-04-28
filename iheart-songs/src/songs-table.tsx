import React, { useEffect, useMemo, useState } from "react";
import "./songs-table.css";
import useSongs from "./hooks/use-songs";
import { useHistory } from "react-router";
import { Song } from "./API";
import loadingGif from "./assets/images/loading.gif";

const SongsTable: React.FC = () => {
  const [loading, _, songs] = useSongs();
  const [songsData, setSongsData] = useState<Song[]>(songs || []);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [sortedColumnHeader, setSortedColumnHeader] = useState("");
  const UP_ARROW = "🔼";
  const DOWN_ARROW = "🔽";
  const columnHeaderSongMap = {
    "Song Name": "song",
    Artist: "artist",
    "Release Date": "songReleaseDate",
    "Play Count": "playCount",
    "Metrics A": "metricA",
    "Metrics B": "metricB",
    "Metrics C": "metricC",
    "Metrics D": "metricD",
    "Metrics E": "metricE",
    "Metrics F": "metricF",
    "Metrics G": "metricG",
    "Metrics H": "metricH",
    "Metrics I": "metricI",
    "Metrics J": "metricJ",
    "Metrics K": "metricK",
    "Metrics L": "metricL",
    "Metrics M": "metricM",
    "Metrics N": "metricN",
    "Metrics O": "metricO",
    "Metrics P": "metricP",
  };

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

  useEffect(() => {
    songs && setSongsData(songs);
  }, [songs]);

  // function to handle sorting over all the column headers
  const handleSorting = (columnName: string, orderType: boolean) => {
    return [...songsData].sort((songAData, songBData) => {
      // @ts-ignore
      const columnAValue = songAData[columnName];
      // @ts-ignore
      const columnBValue = songBData[columnName];

      // @ts-ignore
      if (columnAValue && columnBValue) {
        // to handle date column
        if (columnName === "songReleaseDate") {
          const dates = [new Date(columnAValue), new Date(columnBValue)];

          // @ts-ignore
          if (orderType) return dates[0] - dates[1];
          // @ts-ignore
          else return dates[1] - dates[0];
        }

        // @ts-ignore
        if (orderType) return columnAValue < columnBValue ? -1 : 1;
        // @ts-ignore
        else return columnAValue > columnBValue ? -1 : 1;
      }

      return 0;
    });
  };

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
                  // @ts-ignore
                  const sortedSongsData = handleSorting(
                    // @ts-ignore
                    columnHeaderSongMap[header],
                    isAscending
                  );

                  setSongsData(sortedSongsData);
                  setIsAscending(!isAscending);
                  setSortedColumnHeader(header);
                }}
              >
                <span>{header}</span>
                <span>
                  {sortedColumnHeader === header && isAscending && UP_ARROW}
                </span>
                <span>
                  {sortedColumnHeader === header && !isAscending && DOWN_ARROW}
                </span>
              </div>
            ))}
          </li>

          {songsData?.map((songData) => (
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
              <div className="attribute" data-name={songData.metricF}>
                {songData.metricF}
              </div>
              <div className="attribute" data-name={songData.metricG}>
                {songData.metricG}
              </div>
              <div className="attribute" data-name={songData.metricH}>
                {songData.metricH}
              </div>
              <div className="attribute" data-name={songData.metricI}>
                {songData.metricI}
              </div>
              <div className="attribute" data-name={songData.metricJ}>
                {songData.metricJ}
              </div>
              <div className="attribute" data-name={songData.metricK}>
                {songData.metricK}
              </div>
              <div className="attribute" data-name={songData.metricL}>
                {songData.metricL}
              </div>
              <div className="attribute" data-name={songData.metricM}>
                {songData.metricM}
              </div>
              <div className="attribute" data-name={songData.metricN}>
                {songData.metricN}
              </div>
              <div className="attribute" data-name={songData.metricO}>
                {songData.metricO}
              </div>
              <div className="attribute" data-name={songData.metricP}>
                {songData.metricP}
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  };

  return (
    <>
      {loading && <img src={loadingGif} alt="Loading... Please wait..." />}
      
      {!loading && <Table />}
    </>
  );
};

export default SongsTable;
