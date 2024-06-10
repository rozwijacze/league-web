import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SiDart } from 'react-icons/si';
import Image from 'next/image';

type Props = {};

interface IFormInputs {
    logo: FileList;
    name: string;
    startDate: Date;
    endDate: Date;
    matches: number;
}

export default function CreateLeagueForm({}: Props) {
    const t = useTranslations('CreateLeague');
    const tSchema = useTranslations('CreateLeagueSchema');
    const createLeagueSchema = yup
        .object({
            logo: yup
                .mixed<FileList>()
                .required(tSchema('logoRequired'))
                .test('fileSize', tSchema('fileSizeError'), (value: FileList) => {
                    return value && value[0].size <= 1000000; // 1MB
                })
                .test('fileType', tSchema('fileFormatError'), (value: FileList) => {
                    return value && ['image/jpeg', 'image/png'].includes(value[0].type);
                }),
            name: yup.string().required(tSchema('nameRequired')),
            startDate: yup
                .date()
                .required(tSchema('startDateRequired'))
                .typeError(tSchema('invalidDate')),
            endDate: yup
                .date()
                .required(tSchema('endDateRequired'))
                .min(yup.ref('startDate'), tSchema('endDateBeforeStartDate'))
                .typeError(tSchema('invalidDate')),
            matches: yup.number().required(tSchema('matchesRequired')).min(1).max(100)
        })
        .required();
    const [selectedLogoPreview, setSelectedLogoPreview] = useState<string | null>(null);
    const [fileSizeError, setFileSizeError] = useState<string | null>(null);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(createLeagueSchema)
    });

    // temporary submit handler
    function onSubmit(data: IFormInputs) {
        alert('League created');
        console.log(data);
    }

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
        <div className="w-full h-full bg-gray-800 rounded-xl flex justify-center items-center">
            <form className="text-lg flex justify-around w-full" onSubmit={handleSubmit(onSubmit)}>
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

                <div className="space-y-10">
                    <div className="flex flex-col">
                        <label htmlFor="name">{t('leagueName')}</label>
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        <input
                            {...register('name')}
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 font-bold"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="startDate">{t('startDate')}</label>
                        {errors.startDate && (
                            <p className="text-red-500">{errors.startDate.message}</p>
                        )}
                        <input
                            {...register('startDate')}
                            required
                            id="startDate"
                            name="startDate"
                            type="date"
                            className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 font-bold"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="endDate">{t('endDate')}</label>
                        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
                        <input
                            {...register('endDate')}
                            required
                            id="endDate"
                            name="endDate"
                            type="date"
                            className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 font-bold"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="matches">{t('matches')}</label>
                        {errors.matches && <p className="text-red-500">{errors.matches.message}</p>}
                        <input
                            {...register('matches')}
                            required
                            id="matches"
                            name="matches"
                            type="number"
                            min="1"
                            max="100"
                            className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 font-bold"
                        />
                    </div>

                    <button
                        className="w-full bg-secondary-brown px-2 py-3 font-bold uppercase"
                        type="submit"
                    >
                        {t('submit')}
                    </button>
                </div>
            </form>
        </div>
    );
}
