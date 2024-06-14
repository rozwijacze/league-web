import React, { useState } from 'react';
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormInputs } from '../CreateLeagueForm/CreateLeagueForm';
import { useTranslations } from 'next-intl';
import { SiDart } from 'react-icons/si';
import Image from 'next/image';

type Props = {
    register: UseFormRegister<IFormInputs>;
    errors: FieldErrors<IFormInputs>;
    control: Control<IFormInputs, any>;
};

export default function CreateLeagueLogoSelection({ register, errors, control }: Props) {
    const t = useTranslations('CreateLeague');
    const tSchema = useTranslations('CreateLeagueSchema');
    const [selectedLogoPreview, setSelectedLogoPreview] = useState<string | null>(null);
    const [fileSizeError, setFileSizeError] = useState<string | null>(null);

    function showSelectedImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        // Show error if img size > 1MB
        if (file.size > 1000000) {
            setFileSizeError(tSchema('fileSizeError'));
            setSelectedLogoPreview(null);
        } else {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = e => {
                setSelectedLogoPreview(String(e.target?.result));
                setFileSizeError(null);
            };
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="w-[300px] h-[400px] flex justify-center items-center text-center">
                {errors.logo ? (
                    <p className="text-red-500">{errors.logo.message}</p>
                ) : fileSizeError ? (
                    <p className="text-red-500">{fileSizeError}</p>
                ) : selectedLogoPreview ? (
                    <Image
                        src={selectedLogoPreview as string}
                        className="w-[100%] h-auto"
                        alt="logo preview"
                        width={80}
                        height={80}
                    />
                ) : (
                    <SiDart className="w-[150px] h-[150px]" />
                )}
            </div>
            <div className="flex flex-col">
                <label htmlFor="logo" className="file-selector">
                    {t('selectLogo')}
                </label>
                <Controller
                    name="logo"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...register('logo')}
                            required
                            id="logo"
                            name="logo"
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={e => {
                                showSelectedImage(e);
                                field.onChange(e.target.files);
                            }}
                            className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 font-bold"
                        />
                    )}
                />
            </div>
        </div>
    );
}
