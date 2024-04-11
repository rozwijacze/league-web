'use client';

import { Transition, Dialog } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { GiDart } from 'react-icons/gi';

interface ConfirmModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    isInput: boolean;
    handleCancelAction: () => void;
    handleConfirmAction: (enteredValue: string) => void;
}

export default function AppDialog({
    title,
    description,
    isOpen,
    isInput,
    handleCancelAction,
    handleConfirmAction
}: ConfirmModalProps) {
    const [enteredValue, setEnteredValue] = useState('');

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

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
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
                                            {isInput ? (
                                                <input
                                                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    type="text"
                                                    name="text-input"
                                                    onChange={e => setEnteredValue(e.target.value)}
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white
                                            shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => handleConfirmAction(enteredValue)}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold
                                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => handleCancelAction()}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
