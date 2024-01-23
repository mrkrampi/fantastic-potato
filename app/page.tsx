import { Header } from '@/components/header';
import { CourseCard } from '@/components/course-card';
import { COURSES } from '@/consts/courses';

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <section className="w-full bg-gray-100 p-4 md:p-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-bold text-4xl md:text-6xl">Безкоштовні ІТ курси у Львові</h1>
          <div className="flex flex-wrap pt-8 md:pt-16 gap-8 w-full">
            {COURSES.map(({ imageUrl, startDate, duration, title, price }, index) => {
              return (
                <CourseCard
                  key={index}
                  title={title}
                  duration={duration}
                  cost={price}
                  startDate={startDate}
                  imageUrl={imageUrl}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
