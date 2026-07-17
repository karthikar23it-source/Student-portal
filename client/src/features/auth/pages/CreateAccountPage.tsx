import CreateAccountForm from '../components/CreateAccountForm';
import '../styles/createAccount.css';

const CreateAccountPage = () => {
  return (
    <main className="create-account-page">
      <section className="create-account-container">
        <CreateAccountForm />
      </section>
    </main>
  );
};

export default CreateAccountPage;
