import React from 'react'
import { CircleLoading } from 'react-loadingg'
import { GenresConsumer } from '../../context/GenresContext'
import SearchTitleMovie from './SearchTitleMovie'

const SearchTitleGrid = ({movies}) => {
    return (
        <GenresConsumer>
        { value => {
                if(value!==undefined){
                    return (<div className="search-title-container-grid">
                        {movies.map((movie) => (<SearchTitleMovie key={movie.id} movie={movie} genres={
                            movie.genre_ids.length > 0 ?
                            value.moviesGenreList.filter(element => element.id===movie.genre_ids[0])[0].name : ''
                        }/>))}
                    </div>)
                }else {
                    return <CircleLoading />
                }    
            }
        }
        </GenresConsumer>  
    )
}

export default SearchTitleGrid