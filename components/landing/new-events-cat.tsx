import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const NewEventsCat = () => {
  return (
    <section className="relative px-8 py-20 md:py-24 md:px-20 bg-gray-100">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-12 items-center">
          <span className="text-2xl md:text-3xl font-light inline">
            <strong className="font-bold">Анонси</strong> безкоштовних івентів та курсів
          </span>
          <div className="flex flex-col md:grid gap-4 md:grid-cols-5 w-full md:w-auto">
            <Input type="email" placeholder="Email" className="h-[60px] col-span-3 bg-white px-4"/>
            <Button
              type="submit"
              size="xl"
              className="h-[60px] w-full md:w-auto bg-red-500 md:col-span-2"
            >
              Підписатися
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
