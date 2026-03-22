export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{
          fontSize: "60px",
          color: "#d4af37",
          marginBottom: "20px"
        }}>
          💰 WIN £500 CASH
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#ccc"
        }}>
          Enter for your chance to win big
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 40px",
          background: "#d4af37",
          color: "black",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px"
        }}>
          ENTER NOW
        </button>
      </section>

      <section style={{
  maxWidth: "600px",
  margin: "60px auto",
  textAlign: "center"
}}>
  "use client";
import { useEffect, useState } from "react";

export default function Home() {
  const totalTickets = 500;

  const [sold, setSold] = useState(120);

  // Fake live updates (for now)
  useEffect(() => {
    const interval = setInterval(() => {
      setSold((prev) => {
        if (prev >= totalTickets) return prev;
        return prev + Math.floor(Math.random() * 3); // +0 to +2 tickets
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const percentage = (sold / totalTickets) * 100;
  const remaining = totalTickets - sold;

  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{
          fontSize: "60px",
          color: "#d4af37",
          marginBottom: "20px"
        }}>
          💰 WIN £500 CASH
        </h1>

        <button style={{
          marginTop: "30px",
          padding: "15px 40px",
          background: "#d4af37",
          color: "black",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px"
        }}>
          ENTER NOW
        </button>
      </section>

      {/* PROGRESS */}
      <section style={{
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center"
      }}>
        <p style={{ fontSize: "18px", marginBottom: "10px", color: "#ccc" }}>
          🎟 {sold} tickets sold out of {totalTickets}
        </p>

        <p style={{ color: "#ff4d4d", marginBottom: "10px" }}>
          ⚡ Only {remaining} tickets left!
        </p>

        <div style={{
          background: "#222",
          height: "25px",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
          <div style={{
            width: percentage + "%",
            background: "linear-gradient(90deg, #d4af37, #f5d76e)",
            height: "100%",
            transition: "width 0.5s ease"
          }} />
        </div>
      </section>

    </main>
  );
}
