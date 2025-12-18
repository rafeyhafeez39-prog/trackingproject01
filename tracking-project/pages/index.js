import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    const worker = router.query.worker || "unknown";

    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ worker })
    });

    window.location.href = "home-repair-services-guide-usa.pro";
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome!</h1>
        <p>Click the button below to continue</p>
        <button onClick={handleClick}>Continue</button>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .card {
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          max-width: 400px;
        }
        h1 {
          margin-bottom: 15px;
          color: #333;
        }
        p {
          margin-bottom: 30px;
          color: #666;
        }
        button {
          padding: 15px 40px;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          background: #6e8efb;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #5a74e3;
        }
        @media(max-width: 500px){
          .card {
            padding: 30px 20px;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}






