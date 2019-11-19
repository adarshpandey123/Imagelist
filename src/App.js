import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: [] };

    onSearchSubmit= async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos/', {
          params: {query: term},
          headers : {
            Authorization : 'Client-ID 4bc7f4097b182c9305efd1a440390eca05987c3c4fabd8561e730b894d68d141 '
        }
        });
        this.setState({ images: response.data.results});

    }


    render() {
    return( 
    <div className="ui container">
         <SearchBar onSubmit={this.onSearchSubmit} />
         <ImageList images={this.state.images} />

    </div>
    );
}
}

export default App;