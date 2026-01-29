import { useId, useState } from 'react';

import { FormField } from './FormField';
import style from './MediaPicker.module.scss';

type MediaPickerProps = {
  label: string;
};

export const MediaPicker: React.FC<MediaPickerProps> = ({ label }) => {
  const inputId = useId();
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (fileList: FileList | null) => {
    if (!fileList) {
      return;
    }

    setFiles((previousFiles) => [...previousFiles, ...Array.from(fileList)]);
  };

  return (
    <FormField label={label}>
      {() => (
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
      )}
    </FormField>
  );
};
