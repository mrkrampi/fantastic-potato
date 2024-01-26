import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Stepper } from '@/components/landing/stepper';

export const Banner = () => {
  return (
    <section className="h-screen w-full">
      <div className="relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('https://thumb.tildacdn.com/tild6138-6137-4365-a331-306363663337/-/format/webp/DSC03505.jpg')]">
        <div className="absolute inset-0 bg-orange-400/90 px-10 md:px-20 py-12 md:py-[200px]">
          <div className="grid md:grid-cols-3 max-w-[1200px] mx-auto">
            <div className="col-span-2">
              <h1 className="text-white text-3xl md:text-5xl font-bold uppercase">
                Name It Academy
              </h1>
              <p className="text-white md:w-[65%] font-light py-8">
                Зробимо з тебе повноцінного ІТ фахівця, працевлаштуємо на твою першу роботу та покажемо як зростати далі в IT-сфері.
              </p>
              <div className="pb-28 md:hidden block">
                <Stepper/>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button
                  size="xl"
                  className="bg-emerald-500 hover:bg-emerald-500/75 uppercase md:text-lg"
                >
                  Обрати курс
                  <ChevronRightIcon className="w-4 h-4 ml-1"/>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="bg-transparent text-white uppercase md:text-lg"
                >
                  Спробувати безкоштовно
                  <ChevronRightIcon className="w-4 h-4 ml-1"/>
                </Button>
              </div>
              <div className="py-56 w-[30vw] hidden md:block">
                <Stepper/>
              </div>
            </div>
            <div className="hidden md:block relative font-bold text-3xl uppercase text-white w-[60%] justify-self-center">
              <div className="w-[100px] h-[100px] bg-emerald-400 animate-rectangle-spin absolute top-[-6%] left-[-10%]"/>
              <span className="z-10 relative">СТАРТ ТВОЄЇ ІТ КАР&apos;ЄРИ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
