import React from "react";

const VideoCard = () => {
  return (
    <div className="vid-card">
      <div className="thumbnail">
        <span class="material-symbols-rounded btn">play_arrow</span>
      </div>
      <div className="vid-card-text">
        <div className="title-dots-row">
          <div className="vid-card-title txt-1">
            The Peninsula War - The Battle of Waterloo
          </div>
          <div className="btn dots">&#8942;</div>
        </div>

        <div className="vid-card-channel txt-2">History Guy</div>
        <div className="vid-card-views-time txt-2">500K views - 1 year ago</div>
      </div>
    </div>
  );
};

export default VideoCard;
