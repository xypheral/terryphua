// @ts-ignore
module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/home', // This should be the path of your Home.tsx file
        },
      ]
    },
}