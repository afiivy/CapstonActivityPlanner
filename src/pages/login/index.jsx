import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='containera'>
      <form onSubmit={handleSubmit}>
        <div class="d-grid gap-2 col-12 mx-auto">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="d-grid gap-2 col-12 mx-auto">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}
        <div class="login-btn">
        <Link className="btn btn-outline btn-sm" href="/quiz">Login</Link> 
        </div>     
        </form>
    </div>
  );
}
