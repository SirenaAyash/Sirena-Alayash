

import React from 'react';
import VideoItems from './VideoItems';

const Lists = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItems key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='divided list'>{renderedVideos}</div>;
};
export default Lists;