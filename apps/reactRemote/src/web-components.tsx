import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

class ReactRemote extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.appendChild(mountPoint);
        ReactDOM.createRoot(mountPoint).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
}

if (!customElements.get('react-remote')) {
    customElements.define('react-remote', ReactRemote);
}