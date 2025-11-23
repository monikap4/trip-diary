const trips = [
  { id: 1, name: 'Vysoké Tatry', distance: '45 km' },
  { id: 2, name: 'Krkonoše', distance: '32 km' },
];

export const MyTrips = () => (
  <div>
    <h2>Moje trasy</h2>
    {trips.length > 0 ? (
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <strong>{trip.name}</strong> — {trip.distance}
          </li>
        ))}
      </ul>
    ) : (
      <p>Nemáš zatím žádné uložené trasy.</p>
    )}
  </div>
);
