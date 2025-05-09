import type { Metadata, Viewport } from "next";
import { Urbanist, Syne } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // Metadati di base
  title: "Sofia Tuttolomondo",
  description: "Comunicazione | Sales | Marketing | Personal Trainer",
  keywords: [
    // Parole chiave personali
    "Sofia Tuttolomondo", 
    "CV Sofia Tuttolomondo",
    "Portfolio Sofia Tuttolomondo",
    "Curriculum Vitae Sofia Tuttolomondo",
    
    // Parole chiave professionali
    "Scienze Motorie", 
    "Scienze delle Attività Motorie e Sportive",
    "Studentessa Scienze Motorie Palermo",
    "Sport Management",
    "Personal Trainer",
    "Istruttore Fitness",
    
    // Competenze specifiche
    "Marketing Sportivo",
    "Comunicazione Sportiva",
    "Gestione Clienti",
    "Vendita nel Settore Sportivo",
    "Ospitalità e Accoglienza",
    
    // Professioni Marketing & Sales
    "Sales Representative",
    "Marketing Specialist",
    "Account Manager",
    "Social Media Marketing",
    "Digital Marketing",
    "Content Creator",
    "Customer Success",
    "Business Development",
    "Consulente Marketing",
    "Specialista Vendite",
    "Responsabile Clienti",
    "Esperienza Cliente",
    
    // Localizzazione
    "Palermo",
    "Sicilia",
    "Professionista Sport Sicilia",
    
    // Soft Skills
    "Dinamicità",
    "Creatività",
    "Team Working",
    "Problem Solving",
    "Adattabilità"
  ],
  authors: [
    {
      name: "Sofia Tuttolomondo",
      url: "https://sofiatt.com",
    }
  ],
  creator: "Sofia Tuttolomondo",
  publisher: "Sofia Tuttolomondo",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  
  // Metadati per Open Graph (per condivisioni social)
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://sofiatt.com",
    title: "Sofia Tuttolomondo | CV & Portfolio",
    description: "Studentessa di Scienze delle Attività Motorie e Sportive con esperienza in ospitalità, vendita e marketing",
    siteName: "Sofia Tuttolomondo Portfolio",
  },
  
  // Metadati per Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sofia Tuttolomondo | CV & Portfolio",
    description: "Studentessa di Scienze delle Attività Motorie e Sportive con esperienza in ospitalità, vendita e marketing",
    creator: "@sofiatuttolomondo",
  },
  
  // Robots e altre direttive per i crawler
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Metadati di verifica e canonical
  verification: {
    google: "google-site-verification-code",
    other: {
      me: ["sofiatuttolomondo@icloud.com", "https://sofiatt.com"],
    },
  },
  alternates: {
    canonical: "https://sofiatt.com",
    languages: {
      "it-IT": "https://sofiatt.com",
    },
  },
  
  // Icone e metadati per il manifest della PWA
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/appl.png",
  },
  
  // Metadati per i motori di ricerca
  category: "portfolio",
  classification: "Portfolio personale, CV",
};

// Configurazione separata per il viewport secondo le nuove API di Next.js
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" }, 
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
