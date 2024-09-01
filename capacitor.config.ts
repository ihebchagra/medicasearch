import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.ihebchagra.medicasearch',
  appName: 'Medicasearch',
  webDir: 'build'
,
    android: {
       buildOptions: {
          keystorePath: 'c:\\Users\\iheb\\Sync\\upload-key.jks',
          keystoreAlias: 'upload',
       }
    }
  };

export default config;
