import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'reactRemote',
  exposes: {
    './Module': './src/remote-entry.ts',
    './WebComponents': './src/web-components.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
