// This is a sample service file for the Home page
// You can add API calls or other business logic here

export const fetchHomeData = async () => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Welcome to Electron Boilerplate',
        message: 'This is a sample home page component.'
      });
    }, 1000);
  });
};