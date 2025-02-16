import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (CurrentSongObj) => CurrentSongObj._id === id
  )[0];
  const artistObj = artistArray.filter(
    (CurrentArtistObj) => CurrentArtistObj.name === artist
  )[0];

  const artistSongs = songsArray.filter(
    (CurrentSongObj) => CurrentSongObj.artist === artist
  );

  const ramdomIndex = Math.floor(Math.random() * (artistSongs.length - 1));
  const randomIdFromArtist = artistSongs[ramdomIndex]._id;

  const ramdomIndex2 = Math.floor(Math.random() * (artistSongs.length - 1));
  const randomId2FromArtist = artistSongs[ramdomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song-image__container">
          <img src={image} alt={`imagem da Musica ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`imagem do artista ${artist}`}
          />
        </Link>

        <Player audio={audio} randomId2FromArtist={randomId2FromArtist} randomIdFromArtist={randomIdFromArtist} duration={duration} />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
