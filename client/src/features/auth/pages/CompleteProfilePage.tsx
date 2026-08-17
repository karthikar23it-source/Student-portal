import CompleteProfileForm from '../components/CompleteProfileForm';
import '../styles/completeProfile.css';

const CompleteProfilePage = () => {
  return (
    <main className="complete-profile-page">
      <section className="complete-profile-container">
        <CompleteProfileForm />
      </section>
    </main>
  );
};

export default CompleteProfilePage;
