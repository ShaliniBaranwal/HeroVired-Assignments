import SectionItem from './SectionItem';

export default function Section1() {
    return (
        <>
            <div className="section1 navbar-section">
                <SectionItem imgSource="/images/home.png" title="Home" />
                <SectionItem
                    imgSource="/images/play-button.png"
                    title="Shorts"
                />
                <SectionItem
                    imgSource="/images/film.png"
                    title="Subscriptions"
                />
            </div>
        </>
    );
}
