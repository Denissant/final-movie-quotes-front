import { useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import { SetState } from 'types';
import { useTranslation } from 'next-i18next';

export const useProfileImageInput = (setIsEditingImage: SetState<boolean>) => {
  const { register } = useFormContext();

  const [uploadedImage, setUploadedImage] = useState('');

  const imageValue = useWatch({ name: 'image' });

  useEffect(() => {
    if (!imageValue) {
      setUploadedImage('');
    }
  }, [imageValue]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files![0];
    if (image) {
      setUploadedImage(URL.createObjectURL(image));
      setIsEditingImage(true);
    }
  };

  const { t } = useTranslation('profile');

  return {
    register,
    uploadedImage,
    handleUpload,
    t,
  };
};
