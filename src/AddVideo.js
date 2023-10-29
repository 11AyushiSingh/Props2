import {useEffect, useRef, useState } from 'react';
import './AddVideo.css'
import useVideoDispatch from './hooks/VideoDispatch';
//import VideoDispatchContext from './Context/VideoDispatchContext';

const initialState ={time:"1 year ago",
verified:true,
channel: "Code with Ayushi",
title: "",
views: ""}

function AddVideo({addVideo,updateVideo, editableVideo}){
    const [video, setVideo] = useState(initialState)
   // const dispatch = useContext(VideoDispatchContext)
   const dispatch = useVideoDispatch();
   const inputRef = useRef(null)

    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
            dispatch({type:'Update', payload:video})
            
        }else{
          
            dispatch({type:'Add', payload:video})
        }
        setVideo(initialState)

    }
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setVideo({...video, [e.target.name]: e.target.value})

    }

    useEffect(() => {
        
        if (editableVideo) {
          setVideo(editableVideo)
        }
        inputRef.current.value = "Demo"
      }, [editableVideo]);
      

    return(
        <>
        <form>
            <input ref={inputRef} type="text" name='title' onChange={handleChange} placeholder='title' value={video.title} />
            <input type="text" name='views' onChange={handleChange} placeholder='Views' value={video.views} />

            <button onClick={handleSubmit}>
            
            {editableVideo?'Edit':'Add'}
            </button> 
        </form>
        </>

    );
}

export default AddVideo;