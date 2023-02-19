import { sendLikeRequest, sendStoreCommentRequest } from 'services';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const useQuote = (
  id: number,
  isLiked: boolean,
  refetchLikes: () => void,
  refetchComments: () => void
) => {
  const submitLikeOrUnlike = async () => {
    await sendLikeRequest(isLiked, id);
    await refetchLikes();
  };

  const {
    register,
    handleSubmit: handleCommentSubmit,
    reset,
    setFocus,
  } = useForm<{
    comment: string;
  }>();

  const submitComment = async (fields: { comment: string }) => {
    await sendStoreCommentRequest(fields.comment, id);
    await refetchComments();
    reset();
  };
  const commentSubmitHandler = handleCommentSubmit(submitComment);

  const setFocusOnComment = () => setFocus('comment');

  const { t } = useTranslation('common');

  return {
    register,
    submitLikeOrUnlike,
    commentSubmitHandler,
    setFocusOnComment,
    t,
  };
};
