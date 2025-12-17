export default function Home() {
  const handleClick = async () => {
    await fetch("/api/track", {
      method: "POST"
    });

    window.location.href = "https://www.facebook.com";
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button
        onClick={handleClick}
        style={{ padding: "15px 30px", fontSize: "18px", cursor: "pointer" }}
      >
        Continue
      </button>
    </div>
  );
}
