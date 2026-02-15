import { useState } from 'react';

import { FormField } from './FormField';
import { useFormField } from '../../hooks/useFormField';
import style from './MediaPicker.module.scss';

type MediaPickerProps = {
  label: string;
};

const MediaPickerControl: React.FC = () => {
  const { inputId } = useFormField();
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (fileList: FileList | null) => {
    if (!fileList) {
      return;
    }
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  return (
    <div className={style.wrapper}>
      <input
        id={inputId}
        type="file"
        multiple
        className={style.hiddenInput}
        onChange={(event) => handleChange(event.target.files)}
      />

      {files.length === 0 ? (
        <button
          type="button"
          className={style.picker}
          onClick={() => document.getElementById(inputId)?.click()}
        >
          +
        </button>
      ) : (
        <div className={style.previewGrid}>
          {files.map((file) => (
            <img
              key={`${file.name}-${file.lastModified}`}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className={style.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const MediaPicker: React.FC<MediaPickerProps> = ({ label }) => (
  <FormField label={label}>
    <MediaPickerControl />
  </FormField>
);
