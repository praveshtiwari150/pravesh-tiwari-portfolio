import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const { mode } = useSelector(state => state.theme);
    const githubLink = import.meta.env.VITE_GITHUB_LINK;
    const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK;
    const gmailLink = import.meta.env.VITE_GMAIL_LINK;

    return (
        <footer id='contact' className={`w-full py-6 backdrop-blur-sm transition-colors duration-500`}>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
                {/* Social Links with Brand Color Hover Effect */}
                <div className="flex gap-6">
                    {/* GitHub Link */}
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:filter-none filter grayscale transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <img
                            src="https://img.icons8.com/nolan/64/github.png"
                            alt="GitHub"
                            className="w-10 h-10" // Adjust size as needed
                        />
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:filter-none filter grayscale transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <img
                            src="https://img.icons8.com/fluency/48/linkedin.png"
                            alt="LinkedIn"
                            className="w-10 h-10" // Adjust size as needed
                        />
                    </a>

                    {/* Gmail Link */}
                    <a
                        href={gmailLink}
                        className="hover:filter-none filter grayscale transition-all duration-300"
                        aria-label="Gmail"
                    >
                        <img
                            src="https://img.icons8.com/color/48/gmail-new.png"
                            alt="Gmail"
                            className="w-10 h-10" // Adjust size as needed
                        />
                    </a>
                </div>

                {/* Footer Text */}
                <p className={`text-sm text-center text-secondary`}>
                    &copy; {new Date().getFullYear()} Pravesh Tiwari. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;