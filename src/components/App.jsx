import React from "react";
import "./app.sass";
import thumbUp from "./thumb_up.svg";
import VideoListPanel from "./videoList/VideoListPanel";
import useIsWide from "../customHook/useIsWide";

const App = () => {
  const { isWide } = useIsWide(900);

  return (
    <div className="app">
      <main>
        <div className="current-vid-container">
          <span class="material-symbols-rounded btn">play_arrow</span>
        </div>

        <div className="under-vid-container">
          <div className="current-info-panel">
            <div className="current-info-left">
              <div className="current-title txt-1">The Battle of Trafalgar</div>
              <div className="view-count txt-2">102,220 views</div>
            </div>
            <span class="material-symbols-rounded comment-toggle btn">
              keyboard_arrow_down
            </span>
          </div>

          <div className="user-actions-panel">
            <div className="action-card">
              <img className="action-icon btn" src={thumbUp} alt="" />
              <div className="icon-label txt-label">512</div>
            </div>
            <div className="action-card">
              <img
                id="thumb-down"
                className="action-icon btn"
                src={thumbUp}
                alt=""
              />
              <div className="icon-label txt-label">Dislike</div>
            </div>
            <div className="action-card">
              <span class="material-symbols-rounded btn">forward</span>
              <div className="icon-label txt-label">Share</div>
            </div>
            <div className="action-card">
              <span class="material-symbols-rounded btn">file_download</span>
              <div className="icon-label txt-label">Download</div>
            </div>
            <div className="action-card">
              <span class="material-symbols-rounded btn">add_box</span>
              <div className="icon-label txt-label">Save</div>
            </div>
          </div>

          <hr />

          <div className="channel-panel">
            <div className="channel-left">
              <div className="channel-logo btn">
                <span>H</span>
              </div>
              <div className="channel-text-wrapper">
                <div className="channel-name txt-1 btn">History Channel</div>
                <div className="txt-2">20K subscribers</div>
              </div>
            </div>
            <div className="channel-right">
              <span className="sub-btn btn">SUBSCRIBE</span>
            </div>
          </div>

          <hr />

          <div className="comment-panel">
            <div className="comment-top-row">
              <div className="comment-top-left txt-1">
                <span className="comment-label btn">Comments</span>
                <span className="comment-count">83</span>
              </div>
              <span class="material-symbols-rounded comment-toggle btn">
                keyboard_arrow_down
              </span>
            </div>

            <div className="comment-input-row">
              <div className="channel-logo btn">
                <span>L</span>
              </div>
              <input
                type="text"
                className="comment-input"
                defaultValue="Add a comment..."
              />
            </div>
          </div>

          <hr />

          {!isWide && <VideoListPanel />}
        </div>
      </main>

      {isWide && <VideoListPanel />}
    </div>
  );
};

export default App;
