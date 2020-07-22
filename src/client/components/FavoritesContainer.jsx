// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import AddFavorite from './AddFavorite.jsx';
import FavoriteCard from './FavoriteCard.jsx';

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      favSubject: '',
    };
    this.handleFavSubject = this.handleFavSubject.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    // console.log(favSubject);
    axios
      .post('/favorites', {
        query: this.state.favSubject,
      })
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
        const newFavs = [...this.state.favorites, res.data];
        this.setState({ favorites: newFavs, favSubject: '' });
      })
      .catch((err) => console.log('err', err));
  }

  handleFavSubject(e) {
    this.setState({ favSubject: e.target.value });
  }

  componentDidMount() {
    axios
      .get('/favorites')
      .then(({ data }) => {
        // console.log(data);
        const favorites = data;
        this.setState({ favorites });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const favs =
      this.state.favorites.length > 0
        ? this.state.favorites.map((fav) => <FavoriteCard key={fav._id} subject={fav} />)
        : [];
    return (
      <div className="favContainer">
        <AddFavorite
          handleAdd={this.handleAdd}
          favSubject={this.favSubject}
          handleFavSubject={this.handleFavSubject}
        />
        {favs}
      </div>
    );
  }
}

export default FavoritesContainer;

// const FavoritesContainer = (props) => {
//   // const { favorites, handleAdd, favSubject, handleFavSubject } = props;
//   const [favorites, setFavorites] = useState([]);
//   const [favSubject, setFavSubject] = useState('');

//   useEffect(() => {
//     axios
//       .get('/favorites')
//       .then(({ data }) => {
//         // console.log(data);
//         setFavorites(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     // console.log(favSubject);
//     axios
//       .post('/favorites', {
//         query: favSubject,
//       })
//       .then((res) => {
//         // console.log(res.data);
//         console.log(res.data);
//         const newFavs = [...favorites, favSubject];
//         setFavorites(newFavs);
//         setFavSubject('');
//       })
//       .catch((err) => console.log('err', err));
//   };

//   const handleFavSubject = (e) => {
//     setFavSubject(e.target.value);
//   };

//   return (
//     <div className="favContainer">
//       <AddFavorite
//         handleAdd={handleAdd}
//         favSubject={favSubject}
//         handleFavSubject={handleFavSubject}
//       />
//       {favorites.map((fav) => (
//         <FavoriteCard key={fav._id} subject={fav} />
//       ))}
//     </div>
//   );
// };

// export default FavoritesContainer;
