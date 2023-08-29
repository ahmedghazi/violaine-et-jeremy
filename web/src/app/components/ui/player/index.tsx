import React, { createContext, useEffect, useRef, useState } from "react"
import PubSub from "pubsub-js"
import ReactPlayer from "react-player"
import TimelineControls from "./TimelineControls"
import { useInView } from "react-intersection-observer"
import website from "@/app/config/website"
import clsx from "clsx"
// import screenfull from "screenfull"
import "./index.scss"

type InputProps = {
  url: string
  showControls?: boolean
  aspectRatio?: string
  autoplay?: boolean
  loop?: boolean
  defaultUi?: boolean
}

type VideoStateProps = {
  playing: boolean
  mute: boolean
  loop: boolean
  fullscreen: boolean
  progress: number | any
  duration: number | any
}
const initialVideoState = {
  playing: false,
  mute: false,
  loop: false,
  fullscreen: false,
  progress: 0 || null,
  duration: 0 || null,
}

type VideoContextProps = {
  video: VideoStateProps
  setVideo: Function
}

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps)

// const VideoContext = createContext([{}, () => {}]);

const VideoWrapper: React.FC<InputProps> = ({
  url,
  showControls,
  loop = false,
  autoplay = false,
  defaultUi = false,
}) => {
  // console.log({ showControls });
  const playerWrapper = useRef<HTMLDivElement>(null)
  const player = useRef<ReactPlayer>(null)
  const [video, setVideo] = useState<VideoStateProps>(initialVideoState)
  const [ready, setReady] = useState<boolean>(false)

  useEffect(() => {
    const token = PubSub.subscribe("SEEK", (e, d) => {
      _seek(d)
    })
    return () => {
      PubSub.unsubscribe(token)
    }
  }, [])

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      if (autoplay && window.innerWidth > 1080) {
        setVideo((video) => ({
          ...video,
          playing: autoplay,
          mute: true,
        }))
      }
      if (loop) {
        setVideo((video) => ({
          ...video,
          loop: loop,
        }))
      }
    }
  }, [inView])

  // console.log(video)

  const _onDuration = (duration: number) => {
    // console.log(duration)
    setVideo((video) => ({
      ...video,
      duration: duration,
    }))
  }
  const _onReady = (event: any) => {
    // console.log(event)

    setVideo({
      ...video,
      progress: null,
      duration: null,
    })
    setReady(true)
  }
  // const _onStart = (event) => {};
  // const _onError = (event) => {};
  const _onProgress = (progress: any) => {
    // console.log(progress);
    setVideo((video) => ({
      ...video,
      progress: progress,
    }))
  }

  const _seek = (payload: any) => {
    if (!player.current) return
    const { newTime } = payload
    // if (player.current) player.current.seekTo(newTime, "fraction");
    console.log(player.current)
    try {
      player.current.seekTo(newTime)
    } catch (e) {
      console.log(e)
    }
    // if (player.current) player.current.seekTo(newTime);
  }

  const _togglePlayPause = () => {
    setVideo({
      ...video,
      playing: !video.playing,
    })
  }

  const config = {
    youtube: {
      playerVars: {
        iv_load_policy: 3,
        cc_load_policy: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        origin: website.url,
      },
    },
    vimeo: {
      title: "false",
    },
  }
  // console.log(showControls);
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      <div
        // id='video-wrapper'
        className={clsx(
          "video-wrapper bg-black h-full transition-opacity duration-150 pointer-events-auto",
          autoplay && "is-autoplay",
          ready ? "opacity-100" : "opacity-0 "
          // defaultUi ? '' : ''
          // autoplay &&
          //   video &&
          //   video.progress &&
          //   video.progress.playedSeconds > 1
          //   ? "opacity-100"
          //   : "opacity-0 "
        )}
        ref={playerWrapper}
      >
        {url && (
          <ReactPlayer
            ref={player}
            className={clsx(
              "react-player",
              defaultUi ? "" : "pointer-events-none"
            )}
            url={url}
            width="100%"
            height="100%"
            playing={true}
            controls={false}
            loop={true}
            playsinline
            config={config}
            muted={autoplay || video.mute}
            volume={1}
            onDuration={_onDuration}
            onReady={_onReady}
            onProgress={_onProgress}
          />
        )}
        {/* {!video.playing && !autoplay && !defaultUi && (
          <div
            className="play-pause-overlay pointer z-10"
            role="button"
            tabIndex={0}
            aria-label="play pause"
            onClick={_togglePlayPause}
          ></div>
        )}
        {!defaultUi && showControls !== false && video.progress && (
          <TimelineControls />
        )} */}
      </div>
    </VideoContext.Provider>
  )
}

export { VideoContext, VideoWrapper }
