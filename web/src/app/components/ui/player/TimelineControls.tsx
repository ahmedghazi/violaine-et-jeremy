import React, { useRef, useContext, useEffect } from "react";
import PubSub from "pubsub-js";
import { VideoContext } from "./index";

const idleWait = 3000;

const TimelineControls = () => {
  const timelineControlsRef = useRef<HTMLDivElement>(null);
  const { video, setVideo } = useContext(VideoContext);

  let idleTimer: number | any = null,
    idleState = true;

  useEffect(() => {
    // console.log(video)
    _idle();
    window.addEventListener("mousemove", _idle);

    return () => window.removeEventListener("mousemove", _idle);
  }, [video.playing]);

  const _idle = () => {
    if (idleTimer) clearTimeout(idleTimer);
    // console.log(video.playing)
    if (idleState === true) {
      _showControls();
    }

    idleState = false;
    if (!video.playing) {
      if (timelineControlsRef.current)
        timelineControlsRef.current.classList.add("show");
      return;
    }

    if (idleTimer)
      idleTimer = setTimeout(() => {
        console.log("time out");
        _hideControls();
        idleState = true;
      }, idleWait);
  };

  const _hideControls = () => {
    if (timelineControlsRef.current)
      timelineControlsRef.current.classList.remove("show");
  };

  const _showControls = () => {
    if (timelineControlsRef.current)
      timelineControlsRef.current.classList.add("show");
  };

  const _secondsToHms = (t: number) => {
    const d = Number(t);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") +
      m +
      ":" +
      (s < 10 ? "0" : "") +
      s
    );
  };

  const _seek = (e: React.MouseEvent) => {
    const percent: number = (e.pageX * 100) / window.innerWidth;
    // console.log(percent);
    const { duration } = video;
    const newTime: number = (percent * duration) / 100;
    console.log(newTime);
    PubSub.publish("SEEK", { newTime: newTime });
  };

  const _togglePlayPause = () => {
    setVideo({
      ...video,
      playing: !video.playing,
    });
  };

  const _toggleMute = () => {
    setVideo({
      ...video,
      mute: !video.mute,
    });
  };

  const _toggleFullScreen = () => {
    setVideo({
      ...video,
      fullscreen: !video.fullscreen,
    });
  };

  // const _toggleFullScreen = () => {
  //   setVideo({
  //     ...video,
  //     fullscreen: !video.fullscreen
  //   });
  // };

  const { progress, duration, playing, mute, fullscreen } = video;
  // const playPauseLabel = playing ? 'pause' : 'play'

  return progress ? (
    <div
      className='timeline-controls text-sm-base md:text-base pointer-events-auto z-20'
      ref={timelineControlsRef}>
      <div className='container-fluid-'>
        <div className='actions flex justify-between items-center'>
          <div className='btn-group flex items-center'>
            <div
              className='play-pause  button'
              role='button'
              tabIndex={0}
              aria-label='play-pause'
              onClick={_togglePlayPause}>
              {playing ? "pause" : "play"}
            </div>
            <span>—</span>
            <div
              className={`mute  button ${mute ? "is-active" : ""}`}
              role='button'
              tabIndex={0}
              aria-label='mute'
              onClick={_toggleMute}>
              mute
            </div>
            <span>—</span>
            <div
              className={`fullscreen  button ${fullscreen ? "is-active" : ""}`}
              role='button'
              tabIndex={0}
              aria-label='fullscreen'
              onClick={_toggleFullScreen}>
              fullscreen
            </div>
          </div>
          <div
            className='timecode'
            // onClick={_seek}
            role='button'
            tabIndex={0}
            aria-label='seek'>
            {_secondsToHms(progress.playedSeconds)}
            <span>—</span>
            {_secondsToHms(duration)}
          </div>
          {/* <div className='btn-group tar'>
            <div
              className={`fullscreen  btn ${fullscreen ? "is-active" : ""}`}
              onClick={_toggleFullScreen}>
              fullscreen
            </div>
          </div> */}
        </div>
        <div className='timeline' onClick={(e: React.MouseEvent) => _seek(e)}>
          <div
            className='timeline--played'
            style={{ width: progress.played * 100 + "%" }}></div>
          {/* <div className="timeline--loaded" style={{width: (progress.loaded*100)+"%"}}></div>  */}
        </div>
      </div>
    </div>
  ) : null;
};

export default TimelineControls;
