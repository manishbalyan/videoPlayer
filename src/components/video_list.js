/**
 * Created by consultadd on 13/6/17.
 */
import React from 'react';


const VideoList = (props)=>{
    return(
      <ul className="list-group">
          {props.videos.length}
      </ul>
    );
}
export default VideoList;