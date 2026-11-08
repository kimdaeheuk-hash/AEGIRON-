import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css'; // first: Astryx reset and base styles
import { Theme } from '@astryxdesign/core/theme';
import { themes, defaultThemeSlug } from './astryx-themes';
import Home from './pages/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={themes[defaultThemeSlug]}>
      <Home />
    </Theme>
  </StrictMode>,
);
