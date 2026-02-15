import { useState } from 'react';

import { InputField } from './form/InputField';
import { DateInput } from './form/DateInput';
import { MediaPicker } from './form/MediaPicker';
import { MapPicker } from './form/MapPicker';
import { TimeInput } from './form/TimeInput';
import { SelectField } from './form/SelectField';
import { TextAreaField } from './form/TextAreaField';
import { Button } from './Button';
import style from './NewTripForm.module.scss';

export const NewTripForm = () => {
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

  return (
    <form className={style.form}>
      <InputField label="Název" value={name} onChange={setName} />
      <DateInput label="Datum" value={date} onChange={setDate} />

      <div className={style.row}>
        <MediaPicker label="Přidat fotky" />
        <MapPicker label="Přidat mapu" handlePick={() => {}} />
      </div>

      <div className={style.row}>
        <InputField label="Délka" value={distance} onChange={setDistance} />
        <InputField
          label="Stoupání"
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
        <TimeInput label="Čas návratu" value={endTime} onChange={setEndTime} />
      </div>

      <InputField label="Země" value={country} onChange={setCountry} />
      <InputField label="Pohoří / region" value={region} onChange={setRegion} />
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
  );
};
