import { ContextProvider } from '@/app/context/MyContext';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <ContextProvider>
        {children}
      </ContextProvider>
    </html>
  );
}