export default function SectionItem(props) {
    return (
        <div className="navbar-section-item">
            <div className="img">
                <img src={props.imgSource}></img>
            </div>
            <div className="text">{props.title}</div>
        </div>
    );
}
