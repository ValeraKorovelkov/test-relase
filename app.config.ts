

const IS_STAGING = process.env.APP_VARIANT === 'staging';
const IS_PROD = process.env.APP_VARIANT === 'production';

function getIOSBundleIdentifier() {
  if (IS_PROD) {
    return 'com.spoton.MerchantAdmin';
  }
  return 'com.spoton.MerchantAdminQA';
}

function getAppName() {
  if (IS_PROD) {
    return 'SpotOn Business Dashboard';
  }
  return 'SpotOn Business Dashboard QA';
}

const customConfig = () => ({
  version: "1.0.0", // x-release-please-version
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    appleTeamId: "AVUQPCCU7T",
    supportsTablet: true,
    bundleIdentifier: getIOSBundleIdentifier(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      NSCrossWebsiteTrackingUsageDescription: "To securely log you in, we share authentication cookies between our app and our web login service"
    }
  },
  android: {
    package: "com.spoton.dashboard.android"
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ],
    "expo-secure-store"
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: "7c2c1fef-4232-418f-baa6-70d78dbf29dd"
    }
  },
  owner: "spotoninc"
});

export default customConfig;
