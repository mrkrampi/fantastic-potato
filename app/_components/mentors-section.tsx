import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const MentorsSection = () => {
  return (
    <section className="relative w-full bg-gray-100 px-8 py-20 md:py-24 md:px-20 overflow-hidden">
      <div
        className="absolute right-[-80px] top-[-80px]  md:right-[-230px] md:top-[-230px] animate-slow-spin w-full h-full max-w-[200px] max-h-[200px] md:max-w-[540px] md:max-h-[540px] opacity-[0.17]">
        <Image
          src="https://static.tildacdn.com/tild6661-6338-4432-b233-626464383934/iconfinder_UI_Basic_.svg"
          alt="circle"
          fill
        />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="py-8 md:py-20 text-3xl md:text-5xl font-bold">Викладачі та ментори курсів</h1>
        <p className="md:pb-8 text-xl md:text-2xl md:w-[75%]">
          Ми пишаємся нашою командою!
        </p>
        <div className="flex flex-wrap pt-8 md:pt-16 gap-8 w-full">
          <Card className="md:max-w-[360px] pt-5 pb-10 px-1 flex flex-col gap-y-4 flex-1 shadow-2xl overflow-hidden">
            <CardHeader className="py-2">
              <Image
                src="https://placehold.co/250x250"
                alt="Image"
                width={250}
                height={250}
                className="mx-auto"
              />
              <h3 className="font-bold text-2xl py-2">
                Name Name
              </h3>
              <p className="font-bold text-xl">
                Position
              </p>
            </CardHeader>
            <CardContent className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus dolorum, ex facere, hic ipsa laborum laudantium
              maiores odit possimus praesentium, quasi qui quibusdam quis reiciendis rem soluta temporibus voluptatibus.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
