'use client';

import { useRef, useState } from 'react';
import DefaultDialog from '../DefaultDialog/DefaultDialog';

type Props = {
    title: string;
    description: string;
    isOpen: boolean;
    handleCancelAction: () => void;
    handleConfirmAction: (enteredValue: string) => void;
};

export default function ConfirmDialog({
    title,
    description,
    isOpen,
    handleCancelAction,
    handleConfirmAction
}: Props) {
    const [enteredValue, setEnteredValue] = useState('');

    const cancelButtonRef = useRef(null);

    return (
        <DefaultDialog
            title={title}
            description={description}
            isOpen={isOpen}
            handleCancelAction={handleCancelAction}
        >
            <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold shadow-sm
                        hover:bg-red-500 sm:ml-3 sm:w-auto"
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
        </DefaultDialog>
    );
}
