// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className='flex justify-content-start'>
      <NxWelcome title="movie-app" />
    </div>
  );
}

export default App;
