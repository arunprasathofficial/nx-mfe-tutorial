import React from 'react';
import styles from './app.module.scss';

export function App() {
  return (
    <div className="card border-info shadow-sm px-4 py-3">
      <div className="hstack justify-content-between align-items-start mb-3">
        <div>
          <h2 className="text-info">React App</h2>
          <p className="m-0 fw-semibold">Web Component</p>
        </div>
        <img src="/assets/images/react.png" alt="React Logo" className={`img-fluid ${styles.logo}`} />
      </div>
      <p className="text-secondary fst-italic">Version: {React.version}</p>
    </div>
  );
}

export default App;
