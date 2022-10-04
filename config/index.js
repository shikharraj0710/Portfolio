const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://portfolio-five-topaz-74.vercel.app/';