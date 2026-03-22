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
        margin: "auto",
        textAlign: "center"
      }}>
        <p>Tickets Sold: 120 / 500</p>

        <div style={{
          background: "#222",
          height: "20px",
          borderRadius: "10px"
        }}>
          <div style={{
            width: "24%",
            background: "#d4af37",
            height: "100%",
            borderRadius: "10px"
          }} />
        </div>
      </section>

      <section style={{
        textAlign: "center",
        marginTop: "80px"
      }}>
        <h2 style={{ color: "#d4af37" }}>Draw Ends In</h2>
        <p style={{ fontSize: "30px" }}>03:12:45</p>
      </section>

    </main>
  );
}
