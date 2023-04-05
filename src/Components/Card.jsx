import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, showButtonFav = true }) => {

  const [isFavorite, setIsFavorite] = useState(false)

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

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
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentista/${id}`} >
        <img src="./images/doctor.jpg" alt="doctor" className="doctor-avatar" />
        <h4>
          {username}
        </h4>
        <p>{name}</p>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {
        showButtonFav && <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-thumbs-up align-self-end`} onClick={addFav}></i>
      }
    </div>
  );
};

export default Card;