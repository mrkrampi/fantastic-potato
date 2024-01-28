'use client';

import Image from 'next/image';
import { useMaskito } from '@maskito/react';
import metadata from 'libphonenumber-js/min/metadata';
import { maskitoPhoneOptionsGenerator } from '@maskito/phone';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const phoneMask = maskitoPhoneOptionsGenerator({ countryIsoCode: 'UA', metadata });

export const GetCall = () => {
  const inputRef = useMaskito({ options: phoneMask });

  return (
    <section className="relative px-8 py-20 md:py-24 md:px-20 bg-blue-600">
      <div className="absolute w-full top-0 left-0 flex justify-center">
        <div className="w-[450px] h-[60px] md:h-[75px]">
          <Image
            src="https://static.tildacdn.com/tild6462-3734-4361-b036-303330656635/arrow_gray_1.svg"
            alt="circle"
            fill
          />
        </div>
      </div>
      <div
        className="absolute left-[-100px] top-[-100px] md:left-[-160px] md:top-[-160px] animate-slow-spin w-full h-full max-w-[200px] max-h-[200px] md:max-w-[320px] md:max-h-[320px]">
        <Image
          src="https://static.tildacdn.com/tild3935-3162-4638-b264-626464643330/circe-dotted-line.svg"
          alt="circle"
          fill
        />
      </div>
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-white py-8 md:py-20 text-3xl md:text-5xl font-bold">
          Отримати консультацію
        </h1>
        <p className="text-white md:pb-8 text-xl md:text-2xl md:w-[75%]">
          Після відправки заявки з вами зв&apos;яжеться менеджер Name IT Academy
        </p>
        <div className="flex items-center gap-x-8 flex-wrap my-12 md:my-24">
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-4 items-center">
            <Input type="text" placeholder="Імʼя" className="h-[60px] bg-white px-4"/>
            <Input ref={inputRef} type="tel" placeholder="Номер телефону" className="h-[60px] bg-white px-4"/>
            <Input type="email" placeholder="Email" className="h-[60px] bg-white px-4"/>
            <Button
              type="submit"
              size="xl"
              className="h-[60px] w-full md:w-auto bg-red-500"
            >
              Надіялсти заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
