import LoginForm from '../components/LoginForm';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <main className="login-page">
      <section className="login-container">
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
