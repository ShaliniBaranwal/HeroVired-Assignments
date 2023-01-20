import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie';

function App() {
    return (
        <div className="App">
            <div className="header">WHAT TO WATCH</div>
            THRILLER
            <div className="movies">
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/2/2d/Ek_Tha_Tiger_theatrical_poster.jpg"
                    movieName="Ek Tha Tiger"
                    url="https://www.primevideo.com/detail/Ek-Tha-Tiger/0F71KQIBA1EP6VNKHG7W9AVTOV"
                ></Movie>
                <Movie
                    imageSrc="https://m.media-amazon.com/images/M/MV5BNWZhYTc4M2ItNDc3NS00NjIxLWEzNWMtZWIyNDgzMmUwZWM3XkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_.jpg"
                    movieName="Mardaani 2"
                    url="https://www.primevideo.com/detail/Mardaani-2/0GDRIXW16VJN6U1YB1BHQ9SESE"
                ></Movie>
                <Movie
                    imageSrc="https://m.media-amazon.com/images/M/MV5BMTdlNjE5MGYtODliNy00NGI4LWExMDItYzZmMzdmM2E1ZjRkXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
                    movieName="Tiger Zinda Hai"
                    url="https://www.primevideo.com/detail/Tiger-Zinda-Hai/0FSE8GW3LLYSQZK9HZ30BY9S2X"
                ></Movie>
                <Movie
                    imageSrc="https://irs.www.warnerbros.com/keyart-jpeg/conjuring2_WHV_keyart.jpg"
                    movieName="The Conjuring 2"
                    url="https://www.netflix.com/title/80091246"
                ></Movie>
                <Movie
                    imageSrc="https://resizing.flixster.com/RWenM9DSE9ch0PQrWETkSi5Hyvw=/300x300/v2/https://flxt.tmsimg.com/assets/p177593_p_v8_aa.jpg"
                    movieName="Black Water"
                    url="https://www.mxplayer.in/movie/watch-black-water-movie-online-0d7dc5651531b75b4ad453a5b2aee024"
                ></Movie>
                <Movie
                    imageSrc="https://m.media-amazon.com/images/M/MV5BMTYyMDE5ODIzOF5BMl5BanBnXkFtZTgwOTU4NTc2MjI@._V1_QL75_UX500_CR0,47,500,281_.jpg"
                    movieName="Annabelle"
                    url="https://www.netflix.com/in/title/80013775"
                ></Movie>
            </div>
            <hr></hr>
            COMEDY
            <div className="movies">
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/6/60/Dhamaal_2007.jpg"
                    movieName="Dhamaal"
                    url="https://www.youtube.com/watch?v=6xdRuJoEMoU"
                ></Movie>
                <Movie
                    imageSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B9CACD4D5F953ABACEC2E6B19F1959C633150655E91BFD7D320CD9464B915E39/scale?width=1200&aspectRatio=1.78&format=jpeg"
                    movieName="Home Alone"
                    url="https://www.hotstar.com/in/movies/home-alone/1770000922"
                ></Movie>
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/4/43/Pagalpanti_film_poster.jpg"
                    movieName="Pagalpanti"
                    url="https://www.jiocinema.com/movies/pagalpanti?type=0&id=85c8ded0886111e99d0d99220b0cca31"
                ></Movie>
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/f/f8/Great_Grand_Masti_poster.jpg"
                    movieName="Great Grand Masti"
                    url="https://www.zee5.com/movies/details/great-grand-masti/0-0-6956"
                ></Movie>
                <Movie
                    imageSrc="https://images.moviesanywhere.com/1d437c2f4d197f685d79e1cd45883abc/2a01f4da-5df2-49b4-8b12-c6aab1993844.jpg"
                    movieName="Tom and Jerry: Fast and Furry"
                    url="https://www.amazon.com/Tom-Jerry-Furry-Charlie-Adler/dp/B006RAFEK8"
                ></Movie>
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Diary_of_a_Wimpy_Kid_Rodrick_Rules_2022_poster.jpeg/220px-Diary_of_a_Wimpy_Kid_Rodrick_Rules_2022_poster.jpeg"
                    movieName="Diary of a Wimpy Kid : Rodrick Rules"
                    url="https://www.hotstar.com/in/movies/diary-of-a-wimpy-kid-2-rodrick-rules/1260119236"
                ></Movie>
            </div>
            <hr></hr>
            FANTASY
            <div className="movies">
                <Movie
                    imageSrc="https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg"
                    movieName="Harry Potter and The Sorcerer's Stone"
                    url="https://www.netflix.com/tr-en/title/60004478"
                ></Movie>
                <Movie
                    imageSrc="https://www.cnet.com/a/img/resize/25339074157d658f3cd026e968844c9171139bb4/hub/2022/01/26/5403fed1-1738-4a9a-b0c4-09fb211ebb17/percy-jackson.jpg?auto=webp&fit=crop&height=1200&precrop=800,563,x0,y305&width=1200"
                    movieName="Percy Jackson - The Lightning Thief"
                    url="https://www.hotstar.com/my/movies/percy-jackson-the-olympians-the-lightning-thief/1770001604"
                ></Movie>
                <Movie
                    imageSrc="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg"
                    movieName="Beauty and The Beast"
                    url="https://www.disneyplus.com/movies/beauty-and-the-beast/227lND2lKmLZ"
                ></Movie>
                <Movie
                    imageSrc="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5465/675465-h"
                    movieName="The Princess and The Frog"
                    url="https://www.hotstar.com/in/movies/the-princess-and-the-frog/1260018350/watch"
                ></Movie>
                <Movie
                    imageSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/91BB19136BA931EA9CAAA787CD2D434CD0B3BEB71D65A5EAB95A97727F6F4A04/scale?width=1200&aspectRatio=1.78&format=jpeg"
                    movieName="Maleficent"
                    url="https://www.hotstar.com/in/movies/maleficent/1260018314"
                ></Movie>
                <Movie
                    imageSrc="https://upload.wikimedia.org/wikipedia/en/a/a9/Percy-Jackson-Sea-poster.jpg"
                    movieName="Percy Jackson - The Sea of Monsters"
                    url="https://www.hotstar.com/in/movies/percy-jackson-sea-of-monsters/1770002244/watch"
                ></Movie>
            </div>
        </div>
    );
}

export default App;
