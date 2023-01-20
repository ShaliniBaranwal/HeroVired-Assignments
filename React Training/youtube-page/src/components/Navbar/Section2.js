import SectionItem from "./SectionItem";

export default function Section2() {
    return (
        <>
            <div className="section2 navbar-section">
                <SectionItem imgSource="/images/open-book.png" title="Library" />
                <SectionItem
                    imgSource="/images/history.png"
                    title="History"
                />
            </div>
        </>
    );
}