import { useState, useEffect } from "react";

function App() {
  // MESSAGE LOGGER:
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      console.log("Message:", message);
    }
  }, [message]);

  // LIKE COUNTER:
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated: ${likes}!`);
    }
  }, [likes]);

  // COLOR BOX:
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("Current color:", color);
  }, [color]);

  return (
    <div style={{ padding: "20px"}}>

      <h2>Message Logger</h2>
      <button onClick={() => setMessage("Hello from React!")}>Send Message</button>

      <h2>Like Counter</h2>
      <button onClick={() => setLikes(likes + 1)}>Like</button>

      <h2>Color Box</h2>
      <button
        onClick={() =>
          setColor((prev) => (prev === "red" ? "blue" : "red"))
        }>Change Color</button>

      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          marginTop: 10,
        }}
      />
    </div>
  );
}

export default App;
