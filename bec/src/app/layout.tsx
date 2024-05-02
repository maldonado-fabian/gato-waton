import "./globals.css";

// RootLayout.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // Ajusta la ruta según la ubicación de tu componente Navbar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> {/* Cambia bg-blue-500 al color de fondo deseado */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
