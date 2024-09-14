import { useNavigationState } from '@react-navigation/native';

const useShouldShowButtonSheet = () => {
  const routeName = useNavigationState(state => state?.routes[state.index]?.name);
  return ['Home', 'Bordoreaux','BordoreauxForm'].includes(routeName);
};

export default useShouldShowButtonSheet;
