import { Genre } from 'types';
import { useGenreSelect } from './useGenreSelect';
import { SelectInput } from 'components';

const GenreSelect = (props: { genres: Genre[] }) => {
  const { genres, t } = useGenreSelect(props.genres);

  return (
    <div className='mb-4'>
      <SelectInput
        name='genres'
        options={genres}
        placeholder={t('genre_placeholder')}
        noOptionsMessageCallback={() => <div>{t('no_more_genres')}</div>}
        isMulti={true}
      />
    </div>
  );
};

export default GenreSelect;
