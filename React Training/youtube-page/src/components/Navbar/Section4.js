import SectionItem from './SectionItem';

export default function Section4() {
    return (
        <>
            <div className="section4 navbar-section">
                <h3>Explore</h3>

                <SectionItem imgSource="/images/trending.png" title="Trending" />
                <SectionItem imgSource="/images/musical-note.png" title="Music" />
                <SectionItem imgSource="/images/film.png" title="Movies" />
                <SectionItem imgSource="/images/game-controller.png" title="Gaming" />
                <SectionItem imgSource="/images/news.png" title="News" />
                <SectionItem imgSource="/images/trophy.png" title="Sports" />
                <SectionItem imgSource="/images/bulb.png" title="Learning" />
                
            </div>
        </>
    );
}