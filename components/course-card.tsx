import moment from 'moment';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { CourseInterface } from '@/interface/course.interface';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CourseCardProps extends CourseInterface {
}

export const CourseCard = ({ imageUrl, startDate, duration, price, title }: CourseCardProps) => {
  return (
    <Card className="md:max-w-[360px] pt-5 pb-10 px-4 flex flex-col gap-y-4 flex-1 shadow-2xl">
      <CardHeader>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={title}
          className="pb-4"
        />
        <span className="font-bold text-xl">{title}</span>
      </CardHeader>
      <CardContent className="flex flex-col">
        <span><strong>Тривалість: </strong>{duration}</span>
        <span><strong>Вартість: </strong>{price}</span>
        <span><strong>Старт: </strong>{moment(startDate).format('DD.MM.YYYY')}</span>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="px-8 font-semibold border-black"
        >
          Навчатися безкоштовно
        </Button>
      </CardFooter>
    </Card>
  );
};
