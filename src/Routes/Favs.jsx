import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const dataStorage = JSON.parse(localStorage.getItem('favorites'))
  const cards = dataStorage ? dataStorage : []

  return (
    <div>
      <h1>Dentistas favoritos</h1>
      <div>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
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
