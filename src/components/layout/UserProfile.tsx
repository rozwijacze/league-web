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
        <div className="relative flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded-xl max-w-64">
            <div className="flex flex-col justify-center items-center sm:w-44">
                <div className="text-xl hidden text-nowrap max-w-full line-clamp-1 text-ellipsis sm:block sm:text-base">
                    {getNickname()}
                </div>

                <DropDown options={mockDropDownList} />
            </div>
            <div className="relative h-[52px] w-[52px]">
                <Image
                    src={getAvatar()}
                    alt="avatar"
                    fill={true}
                    className="rounded-full object-cover"
                />
            </div>
        </div>
    );
}
