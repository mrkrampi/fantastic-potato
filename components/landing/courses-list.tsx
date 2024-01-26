import { COURSES } from '@/consts/courses';
import { CourseCard } from '@/components/course-card';

export const CoursesList = () => {
  return (
    <section className="w-full bg-gray-100 px-8 py-20 md:py-24 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl">Безкоштовні ІТ курси у Львові</h1>
        <div className="flex flex-wrap pt-8 md:pt-16 gap-8 w-full">
          {COURSES.map(({ imageUrl, startDate, duration, title, price, id }) =>
            (
              <CourseCard
                key={id}
                id={id}
                title={title}
                duration={duration}
                price={price}
                startDate={startDate}
                imageUrl={imageUrl}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
