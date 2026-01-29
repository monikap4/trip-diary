import React from 'react';

import { FormField } from './FormField';
import style from './MapPicker.module.scss';

type MapPickerProps = {
  label: string;
  mapPreviewUrl?: string;
  onPick: () => void;
};

export const MapPicker: React.FC<MapPickerProps> = ({
  label,
  mapPreviewUrl,
  onPick,
}) => (
  <FormField label={label}>
    {() =>
      mapPreviewUrl ? (
        <img src={mapPreviewUrl} alt="Vybraná mapa" className={style.preview} />
      ) : (
        <button type="button" className={style.picker} onClick={onPick}>
          +
        </button>
      )
    }
  </FormField>
);
