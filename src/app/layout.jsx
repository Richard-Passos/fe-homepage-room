import { League_Spartan } from 'next/font/google';

import '@/assets/styles/globals.css';
import { Header } from '@/patterns';
import { cn } from '@/utils';

const font = League_Spartan({ subsets: ['latin'] });

const metadata = {
  title: 'Room — homepage',
  description: 'Homepage challenge from Frontend Mentor',
};

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={cn(
          'relative mx-auto min-h-screen max-w-[--max-w] overflow-x-clip',
          font.className,
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
};

export default Layout;
export { metadata };
