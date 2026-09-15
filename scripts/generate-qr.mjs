// Usage: node scripts/generate-qr.mjs https://your-domain.com/upload
import QRCode from "qrcode";
import path from "path";

const url = process.argv[2];
if (!url) {
  console.error("Usage: node scripts/generate-qr.mjs <upload-url>");
  process.exit(1);
}

const outPath = path.join(process.cwd(), "public", "upload-qr.png");
await QRCode.toFile(outPath, url, {
  width: 1024,
  margin: 2,
  color: { dark: "#3D3228", light: "#FDFAF5" },
});

console.log(`QR code for ${url} saved to ${outPath}`);
