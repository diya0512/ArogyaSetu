import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 24px" }}>
      <h2 style={{ fontSize: 24, marginBottom: 16 }}>Page Not Found</h2>
      <Link href="/">Go back home</Link>
    </div>
  );
}