export default function Video(props) {
    return (
        <div className="video">
            <div className="video-thumbnail">
                <img src={props.videoThumbnailSource}></img>
            </div>

            <div className="info">
                <div className="info1">
                    <div className="logo">
                        <img src={props.channelLogoSource}></img>
                    </div>
                    <div className="title">
                        <div className="video-title">{props.title}</div>
                        <div className="channel-title">{props.channelName}</div>
                    </div>
                </div>
                <div className="info2">
                    <span className="views">{props.views} views</span>&middot;<span className="duration">{props.duration} mins</span>
                </div>
            </div>
        </div>
    );
}
