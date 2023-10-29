import { useContext } from "react";
import VideosContext from "../Context/VideosContext";

function useVideos(){
  return useContext(VideosContext)
}
export  default useVideos;
