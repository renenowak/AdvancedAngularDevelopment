export const environment = {
  production: true,
  authEnabled: false,
  title: 'ngOptimizing',
  markdownPath: '/assets/markdown/',
  apiUrl: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: 'AIzaSyD8UoiKUqPB_NUJI1LESJpOa2UnrKNY-pc',
    authDomain: 'ngdemoapp.firebaseapp.com',
    databaseURL: 'https://ngdemoapp.firebaseio.com',
    projectId: 'ngdemoapp',
    storageBucket: 'ngdemoapp.appspot.com',
    messagingSenderId: '730215427488',
    appId: '1:730215427488:web:001d99d407deae1c2488c5',
  },
  azure: {
    appInsights: {
      instrumentationKey: 'd4424166-28a1-4d41-b866-890cfb42f2ec',
    },
  },
};
