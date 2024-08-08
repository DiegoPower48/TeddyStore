import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { useEffect } from "react";

function Payment() {
  const { isAutenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutenticated) {
      navigate("/");
    }
  }, [isAutenticated]);

  return <div>PROXIMAMENTE......</div>;
}

export default Payment;
