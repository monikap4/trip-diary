const Statistics = () => {
  const totalTrips = 8;
  const totalDistance = 247;

  return (
    <div className="mainContainer">
      <h2>Statistiky</h2>
      <p>Počet tras: {totalTrips}</p>
      <p>Celková délka: {totalDistance} km</p>
    </div>
  );
};

export default Statistics;
