import Card from "../Components/Card";
const Favs = () => {
  const dataStorage = JSON.parse(localStorage.getItem('favorites'))
  const cards = dataStorage ? dataStorage : []
  return (
    <div>
      <h1>Dentistas favoritos</h1>
      <div>
        {
          cards.map(card => (
           <Card key={card.id} name={card.name} username={card.username} id={card.id} showButtonFav={ false}/>
          ))
        }
      </div>
    </div>
  );
};

export default Favs;
