// app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const USERNAME = "amit";
const PASSWORD = "12345";

export default function LoginPage() {
  const router = useRouter();
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const login = () => {
    if (u === USERNAME && p === PASSWORD) {
      localStorage.setItem("site_access", "true");
      router.replace("/");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <h2>Website Login</h2>
        <input placeholder="Username" onChange={e => setU(e.target.value)} /><br />
        <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} /><br />
        <button onClick={login}>Enter Website</button>
      </div>
    </div>
  );
}
