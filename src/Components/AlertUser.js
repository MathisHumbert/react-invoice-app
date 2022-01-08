import { useSelector } from 'react-redux';

const AlertUser = () => {
  const { alertText, alertType } = useSelector((state) => state.userReducer);
  console.log(alertType, alertText);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default AlertUser;
