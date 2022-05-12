import VideoJS from "./components/VideoJS";

function App() {
  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    preload: "auto",
    poster:
      "https://imgrosetta.mynet.com.tr/file/13489604/13489604-1200x824.jpg",
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
    tracks: [
      {
        src: "//vjs.zencdn.net/v/oceans.vtt",
        kind: "captions",
        label: "English",
        default: true,
      },
    ],
    controlBar: {
      PictureInPictureToggle: false,
    },
  };
  return (
    <div className="App">
      <VideoJS options={options}></VideoJS>
    </div>
  );
}

export default App;
