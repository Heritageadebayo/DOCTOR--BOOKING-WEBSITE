import { useContext } from "react";
import { AppContext } from "../context/Context";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p> My Appointments</p>

      <div></div>
    </div>
  );
};

export default MyAppointments;
