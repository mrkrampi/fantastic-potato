import { STUDY_PLANS } from '@/consts/study-plans.const';
import { StudyPlanCard } from '@/components/study-plan-card';
import { StudyPlanInterface } from '@/interface/study-plan.interface';

export const StudyPlansSection = () => {
  return (
    <section className="w-full px-8 py-20 md:py-28 md:px-20">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-bold text-4xl md:text-6xl w-[75%]">Комплексні програми навчання</h1>
        <p className="pt-14  pb-12 text-xl md:text-2xl w-[75%]">
          Опануйте нову професію за 3-6 місяців та почніть заробляти від 500$
        </p>
        <div className="flex flex-wrap pt-8 md:pt-16 gap-8 w-full">
          {
            STUDY_PLANS.map((plan: StudyPlanInterface, index: number) =>
              (
                <StudyPlanCard
                  key={plan.id}
                  index={index} plan={plan}
                />
              ))
          }
        </div>
      </div>
    </section>
  );
};
