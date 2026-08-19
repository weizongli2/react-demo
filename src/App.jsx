import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="glow" aria-hidden="true" />
      <div className="shell">
        <header className="top">
          <div className="brand">
            Northline <span>Demo</span>
          </div>
          <div className="pill">Vite · React</div>
        </header>

        <main className="hero">
          <h1>簡單、清楚的 React 示範頁</h1>
          <p>
            這是一個可直接部署的最小前端專案：Vite 打包、元件狀態互動、以及一頁完整的視覺結構。
          </p>
          <div className="actions">
            <button className="btn primary" type="button" onClick={() => setCount((c) => c + 1)}>
              點一下試試
            </button>
            <button className="btn ghost" type="button" onClick={() => setCount(0)}>
              重置
            </button>
            <span className="count">
              計數 <strong>{count}</strong>
            </span>
          </div>
        </main>

        <footer className="foot">react-demo · wesleywzli / GitLab</footer>
      </div>
    </div>
  )
}
