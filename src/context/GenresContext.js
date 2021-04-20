import axios from 'axios'
import React, { Component } from 'react'

const GenreContext = React.createContext()

export class GenresProvider extends Component {

    state = {
        moviesGenreList: [],
        seriesGenreList: []
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        .then(res => {
            this.setState({moviesGenreList:res.data.genres})
            })

        axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        .then(res => {
            this.setState({seriesGenreList:res.data.genres})
        })    
    }

    
    render() {
        return (
            <GenreContext.Provider value={this.state}>
               {this.props.children} 
            </GenreContext.Provider>
        )
    }
}

export const GenresConsumer = GenreContext.Consumer
