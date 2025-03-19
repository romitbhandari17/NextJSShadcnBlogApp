// components/Navbar.js
"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ModeToggle from '@/app/components/theme-btn';
import LoadingBar from "react-top-loading-bar";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setProgress(30);

        setTimeout(() => {
            setProgress(70)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 400);

    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 500);
    }, [])


    return (
        <nav className="bg-background/50 p-4 sticky top-0 z-50 backdrop-blur">
            <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className=" text-2xl font-bold">
                    RomitBLog
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-gray-300 hover:font-bold">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300 hover:font-bold">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-gray-300 hover:font-bold">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300 hover:font-bold">
                        Contact
                    </Link>
                </div>

                {/* Buttons (Desktop) */}
                <div className="hidden md:flex items-center">
                    <Button variant="outline">
                        Login
                    </Button>
                    <Button className="mx-2" variant="outline">Signup</Button>
                    <ModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex flex-row'>
                    <button
                        className="md:hidden focus:outline-none text-right mx-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <span className="md:hidden"><ModeToggle /></span>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2 items-center p-4 rounded-lg bg-background/50">
                    <Link href="/" className=" hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/about" className=" hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/blog" className=" hover:text-gray-300">
                        Blog
                    </Link>
                    <Link href="/contact" className=" hover:text-gray-300">
                        Contact
                    </Link>
                    <Button className="w-full mt-2 text-xs" variant="outline">
                        Login
                    </Button>
                    <Button className="w-full text-xs" variant="outline">
                        Signup
                    </Button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;