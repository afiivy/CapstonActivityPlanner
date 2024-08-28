import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  }; 

  return (
    <div className='containera'>

      <h2 className='intro'>Welcome Back!</h2>
      <p className='access'>Please log in to access your account.</p>

      <form onSubmit={handleSubmit}>
      <div className="d-grid gap-2 col-12 mx-auto">
  <label htmlFor="email">Email:</label>
  <div className="input-group">
    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
    <input
      type="email"
      id="email"
      className="form-control"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  </div>
  <div className="d-grid gap-2 col-12 mx-auto">
  <label htmlFor="password">Password:</label>
  <div className="input-group">
    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
    <input
      type="password"
      id="password"
      className="form-control"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
</div>
        {error && <p>{error}</p>}
        
        <Link className="btn btn-outline-primary login-btn" href="/quiz">Login</Link> 


<div className="social-login">
  <p>Or log in with:</p>
  <button className="btn btn-google"><FontAwesomeIcon icon={faGoogle} /></button>
  <button className="btn btn-facebook"><FontAwesomeIcon icon={faFacebook} /></button>
</div>
        <div className="forgot-password">
          <Link href="/forgot-password">Forgot your password?</Link>
        </div>
        <div className="signup-link">
  <p>Don&apos;t have an account? <Link href="/signup">Sign Up</Link></p>
</div>
        </form>
        
    </div>
  );
}
