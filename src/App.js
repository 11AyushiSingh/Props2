import AddVideo from "./AddVideo";
import "./App.css";
import VideoList from "./VideoList";
import Counter from "./Counter";
import videoDb from "./data/Data";
import { useContext, useReducer, useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import VideosContext from "./Context/VideosContext";
import VideoDispatchContext from "./Context/VideoDispatchContext";

function App() {
  const [mode, setMode] = useState("darkMode");
  const [editableVideo, setEditableVideo] = useState(null);

 

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "Add":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "Delete":
        return videos.filter((video) => video.id !== action.payload);
      case "Update":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, []);
  // const[videos, setVideos] = useState(videoDb)

  const themeContext = useContext(ThemeContext);

  // function addVideo(video){
  //   dispatch({type:'Add', payload:video})
  //   // action{type:'Add', payload:video}
  // //   setVideos([...videos,
  // //     {...video, id: videos.length+1}])

  // // }
  // }
  // function deleteVideo(id){
  //   dispatch({type:'Delete', payload:id})
  // setVideos(videos.filter(video=> video.id!==id))

  //}
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
    // console.log(videos.filter(video=> video.id===id))
  }
  // function updateVideo(video){
  //   dispatch({type:'Update', payload:video})

  // const index = videos.findIndex(v=> v.id===video.id)
  // const newVideos = [...videos]
  // newVideos.splice(index,1,video)
  //  setVideos(newVideos)
  //}

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div
              className={`App ${themeContext}`}
              onClick={() => console.log("App")}
            >
              <Counter></Counter>
              <button
                onClick={() =>
                  setMode(mode === "darkMode" ? "lightMode" : "darkMode")
                }
              >
                Mode
              </button>
              <AddVideo
                // dispatch={dispatch}
                editableVideo={editableVideo}
                //</div>updateVideo = {updateVideo}
              >
                {" "}
              </AddVideo>
              <VideoList
                // dispatch={dispatch}
                editVideo={editVideo}
                //   videos={videos
                // }
              ></VideoList>
            </div>
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
