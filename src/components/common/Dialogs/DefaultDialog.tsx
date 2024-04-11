'use client';

import { Transition, Dialog } from '@headlessui/react';
import { Fragment, ReactNode, useRef, useState } from 'react';
import { GiDart } from 'react-icons/gi';

interface DefaultModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    children?: ReactNode;
    handleCancelAction: () => void;
}

export default function DefaultDialog({
    title,
    description,
    isOpen,
    children,
    handleCancelAction
}: DefaultModalProps) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={handleCancelAction}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 sm:mx-0
                                                sm:h-10 sm:w-10"
                                        >
                                            <GiDart
                                                className="h-6 w-6 text-blue-500"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-gray-50"
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-400">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                                >
                                    {children ? children : null}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
