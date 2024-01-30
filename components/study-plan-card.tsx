import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { PATTERN_URLS } from '@/consts/pattern-colors.const';
import { StudyPlanInterface } from '@/interface/study-plan.interface';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface StudyPlanCardProps {
  index: number;
  plan: StudyPlanInterface;
}

export const StudyPlanCard = ({ index, plan: { title, id, duration, format, type } }: StudyPlanCardProps) => {
  const patternUrl = PATTERN_URLS[index % PATTERN_URLS.length];

  return (
    <Card
      style={{ backgroundImage: `url(${patternUrl})` }}
      className="md:max-w-[360px] px-3 flex flex-col gap-y-4 flex-1 shadow-none bg-cover bg-no-repeat bg-center">
      <CardHeader>
        <div className="text-white text-xl md:text-3xl font-light mb-6">
          {id.toString().padStart(2, '0')}
        </div>
        <span className="text-xl md:text-3xl text-white"><strong>{type}</strong> {title}</span>
      </CardHeader>
      <CardContent className="flex flex-col text-white">
        <span>Формат: <strong>{format}</strong></span>
        <span>Тривалість: <strong>{duration}</strong></span>
      </CardContent>
      <CardFooter className="px-0">
        <Button
          variant="link"
          className="p-0 mx-6 font-semibold border-black text-white"
        >
          Детальніше
          <ChevronRightIcon className="w-4 h-4"/>
        </Button>
      </CardFooter>
    </Card>
  );
};
