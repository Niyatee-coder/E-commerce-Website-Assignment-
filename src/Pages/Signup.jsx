import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) { setError(error.message); setLoading(false) }
    else navigate('/dashboard')
  }

  return (
    <div className="signup-page">
  <div className="left-panel">
    <h1>Join Fashion Factory ✨</h1>
    <p>
      Create your account and discover exclusive collections,
      latest trends, and a personalized shopping experience.
    </p>
  </div>

  <div className="signup-box">
    <h2>Create Account</h2>

    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />

    <button>Sign Up</button>

    <p>
      Already have an account? <span>Sign In</span>
    </p>
  </div>
</div>
  )
}