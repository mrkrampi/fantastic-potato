import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { StudyPlanInterface } from '@/interface/study-plan.interface';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface StudyPlanCardProps {
  index: number;
  plan: StudyPlanInterface;
}

const PATTERN_URLS = [
  'https://thumb.tildacdn.com/tild6634-6561-4664-a130-666566333264/-/cover/720x720/center/center/-/format/webp/abc1.jpg',
  'https://thumb.tildacdn.com/tild3962-6533-4530-a530-316662323638/-/cover/720x720/center/center/-/format/webp/abc2.jpg',
  'https://thumb.tildacdn.com/tild3364-3365-4963-a337-303566363938/-/cover/720x720/center/center/-/format/webp/abc3.jpg',
  'https://thumb.tildacdn.com/tild6532-6233-4763-b334-323832656330/-/cover/720x720/center/center/-/format/webp/ios-bg-web.jpg',
  'https://thumb.tildacdn.com/tild3932-3465-4336-a332-336535373661/-/cover/720x720/center/center/-/format/webp/ui-new.jpg',
  'https://thumb.tildacdn.com/tild3566-3130-4332-a332-356136623034/-/cover/720x720/center/center/-/format/webp/bg15.jpg',
  'https://thumb.tildacdn.com/tild6632-3332-4537-b363-346461363164/-/cover/720x720/center/center/-/format/webp/bg17.jpg',
];

export const StudyPlanCard = ({ index, plan: { title, id, duration, format } }: StudyPlanCardProps) => {
  const patternUrl = PATTERN_URLS[index % PATTERN_URLS.length];

  return (
    <Card
      style={{ backgroundImage: `url(${patternUrl})` }}
      className="md:max-w-[360px] pt-5 pb-10 px-4 flex flex-col gap-y-4 flex-1 shadow-none bg-contain">
      <CardHeader>
        <span className="font-bold text-xl text-white">{title}</span>
      </CardHeader>
      <CardContent className="flex flex-col text-white">
        <span><strong>Формат: </strong>{format}</span>
        <span><strong>Тривалість: </strong>{duration}</span>
      </CardContent>
      <CardFooter className="p-0">
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
