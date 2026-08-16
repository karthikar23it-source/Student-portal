import NoticeDetail from '../components/NoticeDetail';
import '../styles/notice-detail.css';

const NoticeDetailPage = () => {
  return (
    <main className="notice-page">
      <section className="notice-container">
        <NoticeDetail />
      </section>
    </main>
  );
};

export default NoticeDetailPage;