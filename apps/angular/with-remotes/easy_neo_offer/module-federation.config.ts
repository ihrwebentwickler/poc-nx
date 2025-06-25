import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'easy_neo_offer',
  exposes: {
    './Routes':
      'apps/angular/with-remotes/easy_neo_offer/src/app/components/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    const sharedLibraries = [
      '@angular/common',
      '@angular/core',
      '@angular/router',
      '@angular/common/http',
      'rxjs',
    ];

    if (sharedLibraries.includes(libraryName)) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
        eager: true,
      };
    }

    return defaultConfig;
  },
};

export default config;
