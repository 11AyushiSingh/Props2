//import { useContext } from "react";
import PlayButton from "./PlayButton";
import Videos from "./Videos";
import axios from "axios";
//import VideosContext from "./Context/VideosContext";
import useVideos from "./hooks/Videos";
import { useCallback, useEffect } from "react";
import useVideoDispatch from "./hooks/VideoDispatch";
function VideoList({ editVideo }) {
  // const videos = useContext(VideosContext)

  const url = "https://my.api.mockaroo.com/videos.json?key=0af57c90";

  const videos = useVideos();
  //const[videos, setVideos] = useState([])
  const dispatch = useVideoDispatch()

    async function handleClick(){
    const res = await axios.get(url)

    console.log('getVideos',res.data)
    dispatch({type:'LOAD',payload:res.data})

  }

  useEffect(()=>{
    handleClick()
  },[])

 const play = useCallback(() => console.log("Playing"),[])
 
 const pause = useCallback(() => console.log("Pausing"),[])

  return (
    <>
      {videos.map((video) => (
        <Videos
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
          channel={video.channel}
          id={video.id}
          // deleteVideo= {deleteVideo}
          editVideo={editVideo}
          //dispatch = {dispatch}
        >
          <PlayButton
            message="PlayButton"
            onPlay={play}
            onPause={pause}
          >
            {video.title}
          </PlayButton>
        </Videos>
      ))}

      <button onClick={handleClick}>Get Videos</button>

      <div style={{ clear: "both" }}></div>
    </>
  );
}
export default VideoList;
