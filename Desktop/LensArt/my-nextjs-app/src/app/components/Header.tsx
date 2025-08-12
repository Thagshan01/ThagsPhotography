import React from "react";
import Link from "next/link";
import { RiCloseLine } from "@remixicon/react";
import { navItems } from "@/data/data";
// import { RiMenu3Line } from "react-icons/ri";


const Header = () => {
    return ( 
    <header className="border-b border-neutral-900">
        <div className="container flex items-center justify-between py-5 lg:pb-0">
            {/*logo*/}
            <Link href="/" className="text-3xl font-medium uppercase">
                Thagshan
            </Link>
            {/*Mobile Menu*/}
            <nav className={'navbar'}>
                {/*wrapper*/}
                <div className="flex justify-between items- center mb-8">
                    <h3 className="font-medium text-3xl uppercase">Thagshan</h3>
                    <button className="border w-[50px] h-[50px] rounded-full flex items-center justify-center border-neutral-800 hover:bg-neutral-900 transition-colors">
                        <RiCloseLine size={30}/>
                    </button>
                </div>

            {/*nav list*/}
            <ul className="grid">
                {navItems.map(item => (
                    <li key={item.id} className="border-b border-neutral-900 text-center">
                        <Link href={item.path} className="block py-5 hover:bg-neutral-900">{item.label}</Link>
                    </li>
                ))}
            </ul>

                {/*Contact*/}
                <Link href="/contact" 
                className="primary-btn block text-center mt-10">
                    contact me
                </Link>

            </nav>

            {/*Lg menu*/}
            <ul className="max-lg:hidden flex
            items-center border border-neutral-800
            rounded-t-2xl overflow-hidden">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link href={item.path} className="px-8 py-5 block
                        hover:bg-neutral-900
                        transition-colors"
                        >
                            {item.label}
                            </Link>
                    </li>
                ))}
            </ul>

            {/*lg Contact btn*/}
            <Link href="/contact" 
            className="max-lg:hidden primary-btn">
            contact me
            </Link>

            {/*Menu icon*/}
            <button className="lg:hidden">
                {/* <RiMenu3Line size={30} /> */}
            </button>

            {/* overlay */}
            <div className={'overlay'}></div>
        </div>
    </header>
    );
};

export default Header;