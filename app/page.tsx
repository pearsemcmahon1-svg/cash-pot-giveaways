"use client"

export default function Home() {
  return (
    <main className="main">
      <h1 className="title">Cash Pot Giveaways</h1>
      <p className="subtitle">Small Entry. Big Wins.</p>
      <button className="btn">View Competitions</button>

      <style jsx>{`
        .main {
          background:#0B0B0B;
          color:white;
          height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
        .title {
          font-size:3rem;
          animation:fadeIn 1.5s ease-in;
        }
        .subtitle {
          color:#aaa;
          margin-top:10px;
          animation:fadeIn 2s ease-in;
        }
        .btn {
          margin-top:30px;
          padding:12px 24px;
          background:#D4AF37;
          color:black;
          border:none;
          border-radius:8px;
          cursor:pointer;
          transition:0.3s;
        }
        .btn:hover {
          transform:scale(1.05);
          box-shadow:0 0 20px #D4AF37;
        }
        @keyframes fadeIn {
          from {opacity:0; transform:translateY(20px);}
          to {opacity:1; transform:translateY(0);}
        }
      `}</style>
    </main>
  );
}
