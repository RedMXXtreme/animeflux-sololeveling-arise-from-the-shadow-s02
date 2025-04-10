// src/videoPlayerUtils.js

export const handleAutoNext = (videoElement, videoList, currentVideoIndex, setCurrentVideoIndex) => {
    currentVideoIndex++;
    if (currentVideoIndex < videoList.length) {
        videoElement.src = videoList[currentVideoIndex];
        videoElement.play();
        setCurrentVideoIndex(currentVideoIndex); // Update the index state
    } else {
        console.log('No more videos to play.');
    }
};
