// ─── Login.jsx ─────────────────────────────────────────────────
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async () => {
    try {
      await supabase.auth.signInWithPassword({email, password})
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="login-page">
  <div className="left-panel">
    <h1>Welcome Back 👋</h1>
    <p>
      Sign in to explore the latest trends and manage your shopping experience.
    </p>
  </div>

  <div className="login-box">
    <h2>Sign In</h2>

    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />

    <button>Login</button>

    <p>
      New here? <span>Create Account</span>
    </p>
  </div>
</div>
  )
}