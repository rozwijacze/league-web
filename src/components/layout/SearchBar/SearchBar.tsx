import { useTranslations } from 'next-intl';
import { IoIosSearch } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';

type Props = {
    searchedValue: string;
    setSearchedValue: (inputVal: string) => void;
};

export default function SearchBar({ searchedValue, setSearchedValue }: Props) {
    const t = useTranslations('SearchBar');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) =>
        setSearchedValue(event.currentTarget.value);
    const handleInputClear = () => setSearchedValue('');

    return (
        <div className="relative rounded-full">
            <input
                type="text"
                placeholder={t('placeholder')}
                value={searchedValue}
                onChange={handleInputChange}
                className="rounded-full p-4 pr-12 bg-gray-600 w-full h-full outline-none text-l placeholder:opacity-80"
            />
            {searchedValue ? (
                <IoIosClose
                    onClick={handleInputClear}
                    title={t('clear')}
                    className="cursor-pointer leagues-page-search-icon"
                />
            ) : (
                <IoIosSearch className="leagues-page-search-icon" />
            )}
        </div>
    );
}
