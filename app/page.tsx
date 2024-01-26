import { Header } from '@/components/header';
import { Banner } from '@/components/landing/banner';
import { StudyPlans } from '@/components/landing/study-plans';
import { CoursesList } from '@/components/landing/courses-list';

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <Banner/>
      <div id="free-events">
        <CoursesList/>
      </div>
      <StudyPlans/>
    </main>
  );
}
