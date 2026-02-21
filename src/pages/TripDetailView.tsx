import { useParams } from 'react-router-dom';

import { TripDetail } from '../components/TripDetail';

export const TripDetailView = () => {
  const { id } = useParams();

  const tripId = Number(id);

  if (!tripId) {
    return <div>Neplatné ID trasy</div>;
  }

  return <TripDetail tripId={tripId} />;
};
