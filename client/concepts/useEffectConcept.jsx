import { useEffect, useState } from "react";

function UseEffectConcept() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Component loaded successfully");
  }, []);

  return <h2>{message}</h2>;
}

export default UseEffectConcept;