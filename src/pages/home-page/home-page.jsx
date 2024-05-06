
import FilmItem from '../../components/film-item/film-item'
import './home-page.css'

export default function HomePage({data}) {
    return (
        <div className='home-page'>
            {data.map(film => <FilmItem film={film} key={film.id} />) }
        </div>
    )
}