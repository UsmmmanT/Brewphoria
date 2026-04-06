import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';

const Hero = () => {
    return (
        <section
            className="relative flex items-end justify-center min-h-[60vh] w-full mt-28 overflow-hidden animate-fade-in bg-white"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '2rem',
                maxWidth: '900px',
                margin: '0 auto',
                width: '90%',
                aspectRatio: '2/1',
            }}
        >
            <div className="absolute inset-0 bg-black/30 animate-hero-fade" />
            <div className="relative w-full flex justify-center pb-12">
                <Link
                    to="/collection"
                    className="px-10 py-4 rounded-full bg-[#2f1d14] text-white text-lg font-bold uppercase tracking-widest shadow-lg hover:bg-[#493024] transition-all duration-300 animate-bounce"
                    style={{letterSpacing: '0.18em'}}
                >
                    Shop Now
                </Link>
            </div>
            <style>{`
                @keyframes fade-in {
                    0% { opacity: 0; transform: scale(1.04); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
                }
                @keyframes hero-fade {
                    0% { opacity: 0.5; }
                    100% { opacity: 0.3; }
                }
                .animate-hero-fade {
                    animation: hero-fade 1.5s 0.2s both;
                }
            `}</style>
        </section>
    );
};

export default Hero;