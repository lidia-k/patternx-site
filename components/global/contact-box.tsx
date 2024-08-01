"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function ContactBox() {
    const [position, setPosition] = useState({ bottom: 4, right: 4 });

    useEffect(() => {
        const updatePosition = () => {
            const contactBox = document.getElementById('contact-box');
            const footer = document.querySelector('footer');
            
            if (contactBox && footer) {
                const contactBoxRect = contactBox.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (footerRect.top < windowHeight) {
                    // Footer is visible, position the box above it
                    const newBottom = windowHeight - footerRect.top + 16; // 16px gap
                    setPosition({ bottom: newBottom, right: 4 });
                } else {
                    // Footer is not visible, keep the box at the bottom right
                    setPosition({ bottom: 4, right: 4 });
                }
            }
        };

        window.addEventListener("scroll", updatePosition, { passive: true });
        window.addEventListener("resize", updatePosition, { passive: true });
        updatePosition(); // Initial check
        
        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("resize", updatePosition);
        };
    }, []);

    return (
        <div id="contact-box" className="fixed z-50 max-w-sm transition-all duration-300 ease-in-out" style={{ bottom: `${position.bottom}px`, right: `${position.right}px` }}>
            <div className="bg-green-300 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                    Want to talk to us?
                </h3>
                <p className="text-gray-700">
                    Send us an email at {' '}
                    <Link
                        href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
                        className="text-blue-600 hover:underline"
                    >
                        {process.env.NEXT_PUBLIC_EMAIL}
                    </Link>
                </p>
            </div>
        </div>
    );
}