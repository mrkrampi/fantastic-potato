import { Header } from '@/components/header';
import { Banner } from '@/components/landing/banner';
import { StudyPlans } from '@/components/landing/study-plans';
import { CoursesList } from '@/components/landing/courses-list';
import { StudyDirection } from '@/components/landing/study-direction';
import { GetCall } from '@/components/landing/get-call';

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <Banner/>
      <div id="free-events">
        <CoursesList/>
      </div>
      <StudyDirection/>
      <StudyPlans/>
      <GetCall/>
    </main>
  );
}
