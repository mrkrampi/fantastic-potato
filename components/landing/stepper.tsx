export const Stepper = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="relative bg-white flex justify-center h-[280px] w-0.5">
          <div className="h-4 w-4 rounded-lg bg-white absolute"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-mobile-stepper-1 absolute transform-gpu"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-mobile-stepper-2 absolute transform-gpu"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-mobile-stepper-3 absolute transform-gpu"/>
          <div className="text-white absolute flex flex-col left-[30px] w-[200px] translate-y-[-4px]">
            <span className="font-bold w-full text-lg">
              13 років
            </span>
            <span className="font-light mt-1">
              в ІТ освіті
            </span>
          </div>
          <div className="text-white absolute flex flex-col translate-y-[81px] left-[30px] w-[200px]">
            <span className="font-bold text-lg">
              38 000
            </span>
            <span className="font-light mt-1">
              випускників
            </span>
          </div>
          <div className="text-white absolute flex flex-col translate-y-[176px] left-[30px] w-[200px]">
            <span className="font-bold text-lg">
              Формат
            </span>
            <span className="font-light mt-1">
              онлайн
            </span>
          </div>
          <div className="text-white absolute flex flex-col translate-y-[266px] left-[30px] w-[200px]">
            <span className="font-bold text-lg">
              Можливість
            </span>
            <span className="font-light mt-1">
              спробувати безкоштовно
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full">
        <div className="relative h-0.5 w-full bg-white flex items-center">
          <div className="h-4 w-4 rounded-lg bg-white"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-stepper-1 absolute transform-gpu"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-stepper-2 absolute transform-gpu"/>
          <div className="h-4 w-4 rounded-lg bg-white animate-stepper-3 absolute transform-gpu"/>
          <div className="text-white top-10 absolute flex flex-col">
            <span className="font-bold text-xl">
              13 років
            </span>
            <span className="font-light mt-1">
              в ІТ освіті
            </span>
          </div>
          <div className="text-white top-10 absolute flex flex-col translate-x-[10vw]">
            <span className="font-bold text-xl">
              38 000
            </span>
            <span className="font-light mt-1">
              випускників
            </span>
          </div>
          <div className="text-white top-10 absolute flex flex-col translate-x-[20vw]">
            <span className="font-bold text-xl">
              Формат
            </span>
            <span className="font-light mt-1">
              онлайн
            </span>
          </div>
          <div className="text-white top-10 absolute flex flex-col translate-x-[30vw]">
            <span className="font-bold text-xl">
              Можливість
            </span>
            <span className="font-light mt-1">
              спробувати безкоштовно
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
