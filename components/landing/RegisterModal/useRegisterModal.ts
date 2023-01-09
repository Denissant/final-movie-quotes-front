import { useFormContext, useWatch } from 'react-hook-form';
import { ApiResponse, RegisterForm } from 'types';
import { useState } from 'react';
import { postRegisterData } from 'services';
import { validationRules } from './validationRules';

export const useRegisterModal = (displayConfirmationsSplash: () => void) => {
  const { handleSubmit, getValues, setError, clearErrors } =
    useFormContext<RegisterForm>();

  const [isLoading, setIsLoading] = useState(false);
  const passwordValue = useWatch({ name: 'password' });
  const passwordConfirmationValue = useWatch({ name: 'password_confirmation' });

  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postRegisterData(getValues())) as ApiResponse<
      keyof RegisterForm
    >;
    setIsLoading(false);

    if (response.success) {
      displayConfirmationsSplash();
    } else {
      if (response.errors) {
        for (const [fieldName, errors] of Object.entries<any>(response.errors))
          setError(fieldName as keyof RegisterForm, {
            type: 'custom',
            message: errors[0],
          });
      }
    }
  };

  validationRules.password_confirmation.validate = (value: string) =>
    value === passwordValue || 'The passwords do not match';

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    passwordConfirmationValue,
    setError,
    clearErrors,
    validationRules,
  };
};
