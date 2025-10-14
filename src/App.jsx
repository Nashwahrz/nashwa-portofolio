// src/App.jsx


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';


import { MessageCircleMore } from 'lucide-react';
import Experience from './components/Experience';

function App() {
    
    // Nomor WhatsApp Anda (Gunakan format internasional tanpa + atau 00)
    const whatsappNumber = "6282384522629"; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    // Warna dan style
    const whatsappColor = '#25D366';
    const darkBg = '#0f172a'; 

    return (
     
        <>
        
            {/* <Header />  */}
            
            <main>
                {/* Bagian utama (Main Content) */}
                
                <Hero /> 
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            {/* FLOATING WHATSAPP BUTTON */}
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    position: 'fixed', 
                    bottom: '30px', 
                    right: '30px', 
                    backgroundColor: whatsappColor,
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 15px rgba(37, 211, 102, 0.6)',
                    zIndex: 999, // Pastikan di atas elemen lain
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                }}
                // Efek hover untuk feedback visual
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.backgroundColor = '#128C7E';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = whatsappColor;
                }}
            >
          
                <MessageCircleMore size={32} color={darkBg} strokeWidth={2} /> 
            </a>

            {/*      
                <Footer />  */}
            
        </>
    );
}

export default App;