import { AppHeader, AppSidebar } from './UI';

const Home = () => {
  document.title = 'My Store - Home - Shopify';
  return (
    <div className="home-setion-page-wrapper">
      <AppHeader />

      <AppSidebar />
      <main>hello</main>
    </div>
  );
};

export default Home;
