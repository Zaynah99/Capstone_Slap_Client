import { useEffect, useState } from "react";
import useSound from "use-sound"; //handles sound
import Snooze from "../../assets/Music/Snooze.mp3"; // gets mp3 from assets
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";// icons for play and pause
import { IconContext } from "react-icons"; //customising icons

export default function Player() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  const [play, { pause, duration, sound }] = useSound(Snooze);


  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);


  const playingButton = () => {
    if (isPlaying) {
      pause(); //pauses audio
      setIsPlaying(false);
    } else {
      play(); // plays audio
      setIsPlaying(true);
    }
  };


  return (
    <div className="player-component">
      <h2>Playing Now</h2>
       <img className="musicCover" src="https://cdns-images.dzcdn.net/images/cover/a3c3b409f0d5bd781821ec0fd79d5b15/350x350.jpg" />
      
      <div>
        <h3 className="songTitle">Snooze</h3>
        <p className="artistSubTitle">SZA</p>
      </div>
      
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      
      <div>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      </div>
      
    </div>
  );
}
