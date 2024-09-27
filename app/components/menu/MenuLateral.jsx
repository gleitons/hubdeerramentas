'use client'
import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import menuItemsLocal from './Menus'

const MenuLateralResponsivo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const menuItems = menuItemsLocal;
    

    return (
        <div className="relative">
            {/* Botão para abrir/fechar o menu */}
            <button
                className="text-white bg-gray-800 p-2 fixed top-4 left-4 z-50 md:hidden"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Menu lateral */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0`}
            >
                <div>
                    <Link href='/'>
                        <Image className="rounded-lg" src='/img/logo-hub.jpg' width={100} height={100} alt="logo" />
                    </Link>
                </div>
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex justify-between items-center">
                                <a  onClick={() => toggleSubmenu(index)}
                                    href={item.link}
                                    className="text-white hover:text-gray-300 flex-grow"
                                >
                                    {item.name}
                                </a>
                                {item.submenu && (
                                    <button
                                        className="ml-2"
                                        onClick={() => toggleSubmenu(index)}
                                    >
                                        {activeMenu === index ? (
                                            <FaChevronDown />
                                        ) : (
                                            <FaChevronRight />
                                        )}
                                    </button>
                                )}
                            </div>
                            {item.submenu && activeMenu === index && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href={subItem.link}
                                                className="text-gray-400 hover:text-gray-200"
                                            >
                                                {subItem.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay para mobile */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default MenuLateralResponsivo;
