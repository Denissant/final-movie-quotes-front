import {
  Form,
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  NavButton,
  TextInput,
  PasswordInput,
} from 'components';
import { useRegisterModal } from './useRegisterModal';
import { Modals, SetState } from 'types';

const RegisterModal = (props: { setActiveModal: SetState<Modals> }) => {
  const { handleSubmit, isLoading, t } = useRegisterModal(props.setActiveModal);

  return (
    <ModalWrapper
      title={t('register_title')}
      subtitle={t('register_description')}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          name='username'
          label={t('name')}
          placeholder={t('name_placeholder')}
          requiredAsterisk={true}
        />
        <TextInput
          name='email'
          label={t('email')}
          placeholder={t('email_placeholder')}
          requiredAsterisk={true}
        />
        <PasswordInput
          name='password'
          label={t('password')}
          placeholder={t('password_placeholder')}
          requiredAsterisk={true}
        />
        <PasswordInput
          name='password_confirmation'
          label={t('password_confirmation')}
          placeholder={t('password')}
          requiredAsterisk={true}
        />
        <FormSubmitButton label={t('register_submit')} isLoading={isLoading} />
        <GoogleAuthButton label={t('google_register')} />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          {t('login_suggestion')}
          <NavButton
            label={t('login')}
            classNames='ml-2'
            onClick={() => props.setActiveModal('login')}
          />
        </span>
      </Form>
    </ModalWrapper>
  );
};

export default RegisterModal;
