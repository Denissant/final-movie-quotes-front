import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { ApiResponse, MovieForm, RegisterForm, SetState } from 'types';
import { useHandleSubmit } from 'hooks';
import { sendAddMovieRequest, sendEditMovieRequest } from 'services';
import { useQueryClient } from 'react-query';

export const useAddOrEditMovieModal = (
  isEditing: boolean | undefined,
  setModalIsOpen: SetState<boolean>,
  movieID?: number
) => {
  const { setError } = useFormContext();

  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmitSuccess = async () => {
    setModalIsOpen(false);
    if (isEditing) {
      await queryClient.refetchQueries(['movie', movieID]);
    } else {
      await queryClient.refetchQueries('movies');
    }
  };
  const onSubmitError = (response: ApiResponse<MovieForm>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName as keyof RegisterForm, {
          type: 'custom',
          message: errors[0],
        });
    }
  };

  let submitRequest;
  if (isEditing) {
    submitRequest = (formValues: MovieForm) =>
      sendEditMovieRequest(movieID as number, formValues);
  } else {
    submitRequest = sendAddMovieRequest;
  }

  const handleSubmit = useHandleSubmit<MovieForm>(
    submitRequest,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return { handleSubmit, isLoading };
};
