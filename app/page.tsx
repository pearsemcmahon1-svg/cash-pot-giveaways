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
  <p style={{
    marginBottom: "10px",
    fontSize: "18px",
    color: "#ccc"
  }}>
    🎟 120 tickets sold out of 500
  </p>

  <div style={{
    background: "#222",
    height: "25px",
    borderRadius: "20px",
    overflow: "hidden"
  }}>
    <div style={{
      width: "24%",
      background: "linear-gradient(90deg, #d4af37, #f5d76e)",
      height: "100%",
      transition: "width 0.5s ease"
    }} />
  </div>
</section>

    </main>
  );
}
