export default function handler(req, res) {
  const ua = req.headers["user-agent"] || "";

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const device = /Mobile|Android|iPhone/i.test(ua)
    ? "Mobile"
    : "Desktop";

  const { worker } = req.body || {};

  console.log("Worker:", worker);
  console.log("IP:", ip);
  console.log("Device:", device);
  console.log("User-Agent:", ua);

  res.status(200).json({ success: true });
}
