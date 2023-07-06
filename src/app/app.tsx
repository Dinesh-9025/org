// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import 'tailwindcss/tailwind.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className="text-3xl font-bold underline">
      <NxWelcome title="org" />
    </div>
  );
}

export default App;
