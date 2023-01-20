import SectionItem from './SectionItem';

export default function Section3() {
    return (
        <>
            <div className="section3 navbar-section">
                <h3>Subscriptions</h3>

                <SectionItem imgSource="/images/musical-note.png" title="Love Music Forever" />
                <SectionItem imgSource="/images/plus.png" title="Browse Channels" />
            </div>
        </>
    );
}
