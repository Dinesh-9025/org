// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import 'tailwindcss/tailwind.css';
import Signin from '../pages/Auth/Signin';
import Dashboard from '../pages/Dasboard';
import Layout from '../layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const renderDashboardRoute = () => (
    <Layout>
      <Route path="/" element={<Dashboard />} />
    </Layout>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
