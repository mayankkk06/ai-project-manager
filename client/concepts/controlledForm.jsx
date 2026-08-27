import { useState } from "react";

function ControlledForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter title"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;