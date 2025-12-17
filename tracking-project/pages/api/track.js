export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"];

  console.log("IP:", ip);
  console.log("User-Agent:", userAgent);

  res.status(200).json({ success: true });
}
