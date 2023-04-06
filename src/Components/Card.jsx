import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, showButtonFav = true }) => {

  const [isFavorite, setIsFavorite] = useState(false)

  const addFav = () => {

    const favoriteCards = JSON.parse(localStorage.getItem('favorites'));
    if (favoriteCards) {
      const cardEncontrada = favoriteCards.find(card => card.id === id)
      let nuevoFavoritos = []
      if (cardEncontrada) {
        nuevoFavoritos = favoriteCards.filter(card => card.id !== id)
      } else {
        nuevoFavoritos = [...favoriteCards, { name, username, id }]
      }
      localStorage.setItem('favorites', JSON.stringify(nuevoFavoritos))
    } else {
      localStorage.setItem('favorites', JSON.stringify([{ name, username, id }]))
    }
    cardFavorite()
  }

  const cardFavorite = useCallback(() => {
    const favoriteCards = JSON.parse(localStorage.getItem('favorites'));
    if (favoriteCards) {
      const favorito = favoriteCards.find(card => card.id === id)
      setIsFavorite(!!favorito)
    }
  }, [id])

  useEffect(() => {
    cardFavorite()
  }, [cardFavorite])

  return (
    <div className="card">
      <Link to={`/dentista/${id}`} >
        <img src="./images/doctor.jpg" alt="doctor" className="doctor-avatar" />
        <h4>
          {username}
        </h4>
        <p>{name}</p>
      </Link>
      {
        showButtonFav && <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-thumbs-up align-self-end`} onClick={addFav}></i>
      }
    </div>
  );
};

export default Card;