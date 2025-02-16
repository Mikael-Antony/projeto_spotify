import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((CurrentValue, index) => index < items)
        .map((CurrentSongObj, index) => (
          <SongItem {...CurrentSongObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
        {items >= songsArray.length ? "" : "Ver mais"}
      </p>
    </div>
  );
};

export default SongList;
