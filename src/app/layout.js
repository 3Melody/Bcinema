
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../component/Navbar';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>{children}</body>
    </html>
  )
}
