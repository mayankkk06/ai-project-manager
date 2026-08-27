import { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />

      {error && <p>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;