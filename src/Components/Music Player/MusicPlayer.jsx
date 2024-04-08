import React, { useState, useContext, useEffect, useRef } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.Styles";
import { PlayIcon, PauseIcon, NextSongIcon } from "./MusicPlayer.Styles";
import { SoundEffectsContext } from "../../Context/SoundEffectsContext";
import { randomizeIndex } from "../../Utils/MusicPlaylist/Index";
import { Playlist } from "../../Utils/MusicPlaylist/Playlist";

const MusicPlayer = () => {
  const { hoverSF, clickedSF, winnerSound, completedSound } =
    useContext(SoundEffectsContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(Playlist));
  const playerRef = useRef(null);

  const [playPromise, setPlayPromise] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      // playerRef.current.play();
      if (playerRef.current?.volume) {
        playerRef.current.volume = 0.1;
      }
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });
    setCurrentSong(randomizeIndex(Playlist));
    setIsPlaying(true);
  };

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => setIsPlaying(false)}
          onMouseEnter={() => {
            clickedSF();
          }}
        />
      ) : (
        <PlayIcon
          onClick={() => setIsPlaying(true)}
          onMouseEnter={() => {
            clickedSF();
          }}
        />
      )}

      <button>Stop</button>

      <NextSongIcon onClick={shuffleHandler} />

      <audio ref={playerRef} src={Playlist[currentSong]}></audio>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
