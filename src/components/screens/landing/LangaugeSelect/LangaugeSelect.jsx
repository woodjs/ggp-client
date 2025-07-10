import { useRouter } from 'next/router';
// import { Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Select from 'react-select';
import Cookies from 'js-cookie';

const options = [
  {
    value: 'ru',
    label: (
      <svg
        style={{ width: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-ru"
        viewBox="0 0 640 480"
      >
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#0039a6" d="M0 160h640v320H0z" />
          <path fill="#d52b1e" d="M0 320h640v160H0z" />
        </g>
      </svg>
    ),
  },
  {
    value: 'en',
    label: (
      <svg
        style={{ width: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-gb"
        viewBox="0 0 640 480"
      >
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
        />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </svg>
    ),
  },
  {
    value: 'es',
    label: (
      <svg
        style={{ width: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-es"
        viewBox="0 0 640 480"
      >
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 160h640v160H0z" />
      </svg>
    ),
  },
];
function LangaugeSelect({ isYellow, isLight }) {
  const { i18n } = useTranslation('landing');
  const router = useRouter();

  const onChange = (option) => {
    const { pathname, query } = router;
    if (JSON.stringify(query) === '{}') {
      router.push(pathname, pathname, { locale: option.value });
    } else {
      const queryKeys = Object.keys(query);
      let newPath = pathname;
      queryKeys.forEach((key) => {
        newPath = newPath.replace(`[${key}]`, query[key]);
      });
      router.push(newPath, newPath, { locale: option.value });
    }

    // router.push(router.pathname, router.pathname, { locale: option.value });
    i18n.changeLanguage(option.value);
    Cookies.set('NEXT_LOCALE', option.value);
  };
  const defaultValue = options.find((option) => option.value === i18n.language);

  return (
    <Select
      inputId="language-select-landing"
      instanceId="language-select-landing"
      styles={{
        container: (provided) => ({
          ...provided,
          outline: 'none',
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          backgroundColor: '#4d4d4d',
        }),
        control: (provided) => ({
          ...provided,
          boxShadow: 'none',
          backgroundColor: isLight ? '#f1f1f1' : 'var(--dark)',
          color: isLight ? 'var(--dark)' : '#f1f1f1',
          maxWidth: '80px',
          borderColor: isLight ? '#E2E8F0' : '#4d4d4d',
          ':hover': {
            borderColor: isLight ? '#cbd0d7' : '#797979',
          },
          ':focus': {
            boxShadow: 'none',
            borderColor: isLight ? '#cbd0d7' : '#797979',
          },
        }),
        option: (provided) => ({
          ...provided,
          backgroundColor: isLight ? '#f1f1f1' : 'var(--dark)',
          color: 'white',
          maxWidth: '60px',
          margin: '0 auto',
          borderRadius: '6px',
          ':active': {
            backgroundColor: isYellow ? '#FFDC3F' : 'var(--green)',
          },
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'var(--white)',
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: isLight ? '#f1f1f1' : 'var(--dark)',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: '#4d4d4d',
          ':hover': {
            color: '#797979',
          },
        }),
      }}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      isSearchable={false}
    />
  );
}

export default LangaugeSelect;
