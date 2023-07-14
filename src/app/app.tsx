// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import 'tailwindcss/tailwind.css';
// import Signin from '../pages/Auth/Signin';
// import Dashboard from '../pages/Dasboard';
import Layout from '../layouts';

export function App() {
  return (
    <div className="app">
      {/* <Signin /> */}
      {/* <Dashboard /> */}
      <Layout />
    </div>
  );
}

export default App;
