'use client';

import React, { HTMLInputTypeAttribute, useRef, useState } from 'react';
import DefaultDialog from './DefaultDialog';

interface InputDialogData {
    label: string;
    type: HTMLInputTypeAttribute;
    id: string;
    placeholder?: string;
    name?: string;
}

export interface InputDialogValues {
    id: string;
    value: string;
}

interface InputModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    inputs: InputDialogData[];
    handleCancelAction: () => void;
    handleConfirmAction: (enteredValue: InputDialogValues[]) => void;
}

export default function InputDialog({
    title,
    description,
    isOpen,
    inputs,
    handleCancelAction,
    handleConfirmAction
}: InputModalProps) {
    const [enteredValues, setEnteredValues] = useState<InputDialogValues[]>([]);

    const cancelButtonRef = useRef(null);

    function setInputData(input: InputDialogValues) {
        const inputIndex = enteredValues.findIndex(value => value.id === input.id);

        if (inputIndex >= 0) {
            const updatedItems = enteredValues.map(value => {
                if (value.id === input.id) {
                    return { ...value, value: input.value };
                }
                return value;
            });
            setEnteredValues(updatedItems);
        } else {
            setEnteredValues([...enteredValues, input]);
        }
    }

    return (
        <DefaultDialog
            title={title}
            description={description}
            isOpen={isOpen}
            handleCancelAction={handleCancelAction}
        >
            <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-col sm:px-6">
                {inputs.length > 0
                    ? inputs.map(input => (
                          <React.Fragment key={input.id}>
                              <label className="block mb-2 text-gray-900 dark:text-white">
                                  {input.label}
                              </label>
                              <input
                                  type={input.type}
                                  name={input.name}
                                  id={input.id}
                                  className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  onChange={e =>
                                      setInputData({ id: input.id, value: e.target.value })
                                  }
                              />
                          </React.Fragment>
                      ))
                    : null}
            </div>
            <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white
                        shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleConfirmAction(enteredValues)}
                >
                    Send
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
