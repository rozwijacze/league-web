'use client';

import Image from 'next/image';
import React from 'react';
import DropDown from './DropDown';
import { mockDropDownList } from '@/mocks/UserProfileMock';

type Props = {};

export default function UserProfile({}: Props) {
    const getNickname = () => {
        return 'Fredi Kamionka Gmina Burzenin';
    };

    const getAvatar = () => {
        return '/images/avatar-mock.png';
    };

    return (
        <div
            className="absolute flex flex-row items-center h-14 gap-2 px-3 py-1 top-1 right-1 bg-gray-800 text-white
                rounded-xl md:h-auto md:right-3 md:top-3"
        >
            <div className="flex flex-col justify-center items-center w-4 md:min-w-32">
                <div className="text-xl hidden md:block text-nowrap max-w-full line-clamp-1 text-ellipsis md:text-base">
                    {getNickname()}
                </div>

                <DropDown options={mockDropDownList} />
            </div>
            <div className="relative h-[52px] w-[52px]">
                <Image
                    src={getAvatar()}
                    alt="avatar"
                    fill={true}
                    className="rounded-full object-cover flex shrink-0 h-max"
                />
            </div>
        </div>
    );
}
