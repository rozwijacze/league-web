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
        <div className="relative flex flex-row items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded-xl h-auto">
            <div className="flex flex-col justify-center items-center w-4 md:min-w-32">
                <div className="text-xl hidden text-nowrap max-w-full line-clamp-1 text-ellipsis md:block md:text-base">
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
