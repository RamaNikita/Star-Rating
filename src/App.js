import { useState } from "react";

function App(props) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>{checked ? "Checked" : "Not Checked"}</p>
      </div>
    </>
  );
}
export default App;
