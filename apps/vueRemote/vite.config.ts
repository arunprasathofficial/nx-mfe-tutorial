/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';
import { resolve } from 'path';
import fs from 'fs-extra';

// Custom plugin to serve assets in development
function devAssetsPlugin() {
  return {
    name: 'dev-assets',
    configureServer(server) {
      const assetsPath = resolve(__dirname, '../../libs/shared/assets/src');
      
      server.middlewares.use('/assets', (req, res, next) => {
        const filePath = resolve(assetsPath, req.url.slice(1));
        
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const content = fs.readFileSync(filePath);
          res.end(content);
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vueRemote',
  server: {
    port: 4300,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    devAssetsPlugin(),
    nxCopyAssetsPlugin([
      '*.md',
      {
        glob: '**/*',
        input: '../../libs/shared/assets/src/images',
        output: 'assets/images'
      }
    ]),
    federation({
      name: 'vueRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './WebComponents': './src/web-components.ts'
      }
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/vueRemote',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
