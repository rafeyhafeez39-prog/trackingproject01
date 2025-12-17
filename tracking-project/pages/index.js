import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    // worker naam URL se uthao
    const worker = router.query.worker || "unknown";

    await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ worker })
    });

    // redirect
    window.location.href = "https://www.facebook.com";
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button
        onClick={handleClick}
        style={{ padding: "15px 30px", fontSize: "18px", cursor: "pointer" }}
      >
        Continue
      </button>
    </div>
  );
}
