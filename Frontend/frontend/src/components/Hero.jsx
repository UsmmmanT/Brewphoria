import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';

const Hero = () => {
    return (
        <section
            className="relative flex items-end justify-center w-full mt-28 overflow-hidden animate-fade-in bg-white mx-auto px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Responsive sizing
                borderRadius: 'clamp(1rem, 5vw, 2rem)',
                maxWidth: '100%',
                width: '100%',
                // Responsive aspect ratios: 1/1 on mobile, 4/3 on tablet, 2/1 on desktop
                aspectRatio: 'auto',
                minHeight: 'clamp(15rem, 50vh, 60vh)',
            }}
        >
            <div className="absolute inset-0 bg-black/30 animate-hero-fade" />
            <div className="relative w-full flex justify-center pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                <Link
                    to="/collection"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 rounded-full bg-[#2f1d14] text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest shadow-lg hover:bg-[#493024] transition-all duration-300 animate-bounce"
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