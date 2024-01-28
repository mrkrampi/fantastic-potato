import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export const StudyDirection = () => {
  return (
    <section className="relative px-8 py-16 md:py-24 md:px-20 bg-blue-600">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Напрями навчання
        </h1>
        <div className="flex items-center gap-8 flex-wrap my-12 md:my-24">
          <Card className="md:max-w-[360px] py-5 px-4 flex flex-col gap-y-4 flex-1 shadow-2xl">
            <CardHeader className="pb-2">
              <Image
                src="https://static.tildacdn.com/tild3930-3438-4236-a437-383635623934/1_1.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="font-bold text-xl py-3">
              Курси Project Manager
            </CardContent>
            <CardFooter className="px-4 py-3">
              <Button
                variant="outline"
                size="lg"
                className="border-black border-2 rounded-full"
              >
                Детальніше
              </Button>
            </CardFooter>
          </Card>
          <Card className="md:max-w-[360px] py-5 px-4 flex flex-col gap-y-4 flex-1 shadow-2xl">
            <CardHeader className="pb-2">
              <Image
                src="https://static.tildacdn.com/tild3130-3431-4761-b739-343237643930/Untitled-3_copy.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="font-bold text-xl py-3">
              Курси Тестування
            </CardContent>
            <CardFooter className="px-4 py-3">
              <Button
                variant="outline"
                size="lg"
                className="border-black border-2 rounded-full"
              >
                Детальніше
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex justify-center my-16">
          <Button
            variant="outline"
            size="xl"
            className="bg-transparent text-white"
          >
            Більше курсів
          </Button>
        </div>
      </div>
    </section>
  );
};
