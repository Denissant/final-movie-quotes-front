import { deleteQuote, getQuoteComments } from 'services';
import { useQuery, useQueryClient } from 'react-query';
import { Dispatch } from 'react';
import { MovieQuote, QuoteModalsReducerAction } from 'types';

export const useFullQuoteView = (
  quote: MovieQuote,
  closeModal: () => void,
  dispatchActiveModal: Dispatch<QuoteModalsReducerAction>
) => {
  const fetchComments = async () => {
    const response = await getQuoteComments(quote.id);
    return response.data;
  };

  const { data: comments } = useQuery(['comments', quote.id], fetchComments, {
    initialData: [],
  });

  const queryClient = useQueryClient();
  const refetchLikes = async () => {
    await queryClient.refetchQueries(['movie', quote.movie_id]);
  };
  const refetchComments = async () => {
    await queryClient.refetchQueries(['comments', quote.id]);
  };

  const deleteHandler = async () => {
    await deleteQuote(quote.id);
    closeModal();
    await queryClient.refetchQueries(['movie', quote.movie_id]);
  };

  const editHandler = () => {
    dispatchActiveModal({
      type: 'quote',
      quoteID: quote.id,
      modalType: 'edit',
    });
  };

  return {
    comments,
    refetchLikes,
    refetchComments,
    deleteHandler,
    editHandler,
  };
};
