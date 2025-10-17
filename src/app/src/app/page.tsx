// src/app/page.tsx
export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(135deg,#cab8ff,#a8c5ff,#f5b6d8)"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.75)",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        width: 420,
        maxWidth: "90vw"
      }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>Syncra AI</h1>
        <p style={{ marginTop: 10, color: "#444" }}>
          Revolutionizing what technology means. Join the launch list.
        </p>
        <form action="#" onSubmit={(e)=>e.preventDefault()} style={{ marginTop: 16, display:"flex", gap: 8 }}>
          <input type="email" placeholder="Enter your email" required
                 style={{ flex:1, padding:12, borderRadius:12, border:"1px solid #ddd" }}/>
          <button type="submit" style={{ padding:"12px 16px", borderRadius:12, border:"none", cursor:"pointer" }}>
            Notify Me
          </button>
        </form>
        <p style={{ marginTop: 16, fontSize: 12, color: "#777" }}>© {new Date().getFullYear()} Syncra AI</p>
      </div>
    </main>
  );
}
