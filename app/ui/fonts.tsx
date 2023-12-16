import { Inter, Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const fonts = {
  lusitana,
  inter,
};
