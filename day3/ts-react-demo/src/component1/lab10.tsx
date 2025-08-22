import { useRef } from "react";

export default function Lab10() {
  const videoRef = useRef<HTMLVideoElement>(null)


  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      // console.log(videoRef.current.play())
    }
  }

  // TODO: videoRef.current?.play()

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }
  // TODO: videoRef.current?.pause()

  return (
    <div>
      <video
        ref={videoRef}
        width="300"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}
