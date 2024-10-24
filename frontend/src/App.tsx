import { useState } from 'react'
import Header from "./components/Header.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        {/* Main content will go here */}
      </main>
    </div>
  );
}

export default App
