import React from 'react';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { InputField } from './form/InputField';
import { DateInput } from './form/DateInput';
import { MediaPicker } from './form/MediaPicker';
import { MapPicker } from './form/MapPicker';
import { TimeInput } from './form/TimeInput';
import { TextAreaField } from './form/TextAreaField';
import { Button } from './Button';
import mapPreview from '../assets/images/mapycz.jpeg';
import { createTrip } from '../api/createTrip';
import style from './NewTripForm.module.scss';

export const NewTripForm: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [elevation, setElevation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const [mapId, setMapId] = useState('');
  const [tempMapId, setTempMapId] = useState('');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const trip = await createTrip({
        name,
        region,
        country,
        description,
        mapId,
        distance,
        elevation,
        images,
        startTime,
        endTime,
      });

      navigate(`/trip/${trip.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Nepodařilo se uložit trasu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      <form className={style.form} onSubmit={handleSubmit}>
        <InputField label="Název" value={name} onChange={setName} />
        <DateInput label="Datum" value={date} onChange={setDate} />

        <div className={style.row}>
          <MediaPicker
            label="Přidat fotky"
            onChange={(files) => setImages(files)}
          />
          <MapPicker
            label="Přidat mapu"
            mapPreviewUrl={mapId ? mapPreview : undefined}
            handlePick={() => setIsMapModalOpen(true)}
          />
        </div>

        <div className={style.row}>
          <InputField
            label="Délka (km)"
            value={distance}
            onChange={setDistance}
          />
          <InputField
            label="Stoupání (m)"
            value={elevation}
            onChange={setElevation}
          />
        </div>

        <div className={style.row}>
          <TimeInput
            label="Čas startu"
            value={startTime}
            onChange={setStartTime}
          />
          <TimeInput
            label="Čas návratu"
            value={endTime}
            onChange={setEndTime}
          />
        </div>

        <InputField label="Země" value={country} onChange={setCountry} />
        <InputField
          label="Pohoří / region"
          value={region}
          onChange={setRegion}
        />

        <TextAreaField
          label="Popis trasy / chata / body na cestě"
          value={description}
          onChange={setDescription}
        />

        <div className={style.submit}>
          <Button label="Vytvořit trasu" type="submit" />
        </div>
      </form>

      {isMapModalOpen && (
        <div className={style.modalBackdrop}>
          <div className={style.modal}>
            <h3 className={style.modalHeading}>Přidat kód trasy</h3>

            <input
              type="text"
              placeholder="např. canapovugo"
              value={tempMapId}
              onChange={(event) => setTempMapId(event.target.value)}
              className={style.modalInput}
            />

            <div className={style.modalActions}>
              <button
                className={style.modalButton}
                type="button"
                onClick={() => {
                  setMapId(tempMapId.trim());
                  setIsMapModalOpen(false);
                }}
              >
                Uložit
              </button>

              <button
                className={style.modalButton}
                type="button"
                onClick={() => setIsMapModalOpen(false)}
              >
                Zrušit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
