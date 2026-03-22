"use client";

import { useState } from "react";

export default function Home() {

  const competitions = [
    {
      id: 1,
      title: "💰 £500 Cash Prize",
      price: 2,
      total: 500,
      sold: 120
    },
    {
      id: 2,
      title: "💰 £1000 Cash Prize",
      price: 5,
      total: 400,
      sold: 250
    }
  ];

  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <h1 style={{
        textAlign: "center",
        color: "#d4af37",
        marginBottom: "40px"
      }}>
        Cash Pot Giveaways
      </h1>

      {competitions.map((comp) => {
        const percentage = (comp.sold / comp.total) * 100;
        const remaining = comp.total - comp.sold;

        return (
          <div key={comp.id} style={{
            border: "1px solid #333",
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "10px"
          }}>

            <h2 style={{ color: "#d4af37" }}>{comp.title}</h2>

            <p>£{comp.price} per ticket</p>

            <p>
              🎟 {comp.sold} sold out of {comp.total}
            </p>

            <p style={{ color: "#ff4d4d" }}>
              ⚡ {remaining} tickets left
            </p>

            <div style={{
              background: "#222",
              height: "20px",
              borderRadius: "10px"
            }}>
              <div style={{
                width: percentage + "%",
                background: "#d4af37",
                height: "100%",
                borderRadius: "10px"
              }} />
            </div>

            <button style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "#d4af37",
              border: "none",
              cursor: "pointer"
            }}>
              Enter Now
            </button>

          </div>
        );
      })}

    </main>
  );
}

