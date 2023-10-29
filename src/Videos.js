import { useContext, } from "react";
import "./Videos.css";
import ThemeContext from "./Context/ThemeContext";
//import VideoDispatchContext from './Context/VideoDispatchContext';
import useVideoDispatch from "./hooks/VideoDispatch";
function Videos({
  title,
  id,
  views,
  time,
  verified,
  channel = "Code with Ayushi",
  children,
  deleteVideo,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  //  const dispatch = useContext(VideoDispatchContext)
  const dispatch = useVideoDispatch();

//   useEffect(() => {
//     const idx = setInterval(() => {
//       console.log("video playing", id);
//     }, 3000);

//     return () => {
//       clearInterval(idx);
//     };
//   }, [id]);

  return (
    <>
      <div className={`Container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "Delete", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>

        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="A girl" />
        </div>

        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "☑️"}
        </div>

        <div className="views">
          {views} views<span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Videos;
