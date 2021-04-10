import axios from 'axios'
import React, { Component } from 'react'

const GenreContext = React.createContext()

export class GenresProvider extends Component {

    state = {
        genreList: []
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        .then(res => {
            this.setState({genreList:res.data.genres})
            })
    }

    
    render() {
        return (
            <GenreContext.Provider value={this.state.genreList}>
               {this.props.children} 
            </GenreContext.Provider>
        )
    }
}

export const MovieGenresConsumer = GenreContext.Consumer
