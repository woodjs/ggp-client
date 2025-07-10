import { useProfile } from '@/entities/profile';
import ProfileMainInfoForm from './ProfileMainInfoForm';

function ProfileMainInfoFormContainer() {
  const { data, isLoading, isError } = useProfile();
  return (
    <ProfileMainInfoForm data={data} isLoading={isLoading} isError={isError} />
  );
}

export default ProfileMainInfoFormContainer;
