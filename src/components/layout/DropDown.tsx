'use client';

import useOnOutsideClick from '@/hooks/useOnOutsideClick';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

type Props = {
    options: Option[];
};

export interface Option {
    path: string;
    title: string;
}

export default function DropDown({ options }: Props) {
    const [isShown, setIsShown] = useState(false);
    const dropDownRef = useRef(null);
    const buttonRef = useRef(null);
    useOnOutsideClick([dropDownRef, buttonRef], () => setIsShown(false));

    return (
        <>
            <button
                className={`transition-all transform-gpu duration-200 ${isShown ? '' : 'rotate-x-axis'}`}
                type="button"
                onClick={() => setIsShown(!isShown)}
                ref={buttonRef}
            >
                <MdOutlineKeyboardArrowUp />
            </button>
            <div
                className={`absolute ${isShown ? '' : 'hidden'} flex items-center flex-col right-0 top-[4rem] md:left-0
                md:top-[4.25rem] z-10 w-44 rounded-xl bg-gray-700`}
                ref={dropDownRef}
            >
                {options.map(option => (
                    <Link
                        key={option.path}
                        className="block border-none rounded-xl px-4 py-2 hover:bg-gray-600 w-full text-center"
                        href={option.path}
                    >
                        {option.title}
                    </Link>
                ))}
            </div>
        </>
    );
}
