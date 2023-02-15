import { InputSideButton } from 'components';
import { useEmailSideButtons } from './useEmailSideButtons';
import { Email } from 'types';

const EmailSideButtons = (props: {
  email: Email;
  isPrimary: boolean;
  isVerified: boolean;
}) => {
  const { makePrimary, removeEmail } = useEmailSideButtons(props.email);

  return (
    <>
      {props.isPrimary ? (
        <InputSideButton label='Primary Email' />
      ) : (
        <div className='mt-6 lg:mt-0 flex gap-5 items-center justify-between'>
          {props.isVerified ? (
            <InputSideButton
              label='Make primary'
              onClick={makePrimary}
              buttonAppearance={true}
            />
          ) : (
            <InputSideButton label='Not verified' warningAppearance={true} />
          )}
          <span className='hidden lg:block text-brand-subtitle'>|</span>
          <InputSideButton label='Remove' onClick={removeEmail} />
        </div>
      )}
    </>
  );
};

export default EmailSideButtons;
