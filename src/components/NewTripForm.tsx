import React from 'react';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { supabase } from '../api/supabaseClient';
import { InputField } from './form/InputField';
import { DateInput } from './form/DateInput';
import { MediaPicker } from './form/MediaPicker';
import { MapPicker } from './form/MapPicker';
import { TimeInput } from './form/TimeInput';
import { SelectField } from './form/SelectField';
import { TextAreaField } from './form/TextAreaField';
import { Button } from './Button';
import mapPreview from '../assets/images/mapycz.jpeg';
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
  const [summits, setSummits] = useState('');
  const [companions, setCompanions] = useState('');
  const [description, setDescription] = useState('');
  const [tripType, setTripType] = useState('');
  const [weather, setWeather] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const [mapId, setMapId] = useState('');
  const [tempMapId, setTempMapId] = useState('');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const { data: trip, error: tripError } = await supabase
      .from('trips')
      .insert([
        {
          name,
          location: `${region}, ${country}`,
          description,
          map_id: mapId || null,
        },
      ])
      .select()
      .single();

    if (tripError) {
      setError('Nepodařilo se uložit trasu');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return;
    }

    const { error: statsError } = await supabase
      .from('trip_statistics')
      .insert([
        {
          trip_id: trip.id,
          distance: Number(distance) || 0,
          elevation: Number(elevation) || 0,
          summits: Number(summits) || 0,
          highest_point: 0,
        },
      ]);

    if (statsError) {
      setError('Nepodařilo se uložit statistiky');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return;
    }

    let isFirst = true;

    for (const file of images) {
      const filePath = `${trip.id}/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) {
        continue;
      }

      const { publicUrl } = supabase.storage
        .from('images')
        .getPublicUrl(filePath).data;

      await supabase.from('trip_images').insert([
        {
          trip_id: trip.id,
          image_url: publicUrl,
          is_cover: isFirst,
        },
      ]);

      isFirst = false;
    }

    navigate('/trips');
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
        <InputField label="Vrchol/y" value={summits} onChange={setSummits} />

        <SelectField
          label="Typ trasy"
          value={tripType}
          onChange={setTripType}
          options={[
            { label: 'Turistika', value: 'hike' },
            { label: 'Skialpy', value: 'skialp' },
          ]}
        />

        <SelectField
          label="Počasí"
          value={weather}
          onChange={setWeather}
          options={[
            { label: 'Slunečno', value: 'sunny' },
            { label: 'Déšť', value: 'rain' },
          ]}
        />

        <InputField
          label="Doprovod"
          value={companions}
          onChange={setCompanions}
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
