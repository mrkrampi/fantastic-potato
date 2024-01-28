import { Header } from '@/components/header';
import { Banner } from '@/components/landing/banner';
import { StudyPlans } from '@/components/landing/study-plans';
import { CoursesList } from '@/components/landing/courses-list';
import { StudyDirection } from '@/components/landing/study-direction';
import { GetCall } from '@/components/landing/get-call';
import { NewEventsCat } from '@/components/landing/new-events-cat';

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
      {/*<div id="mentors">*/}
      {/*  <MentorsSection/>*/}
      {/*</div>*/}
      <NewEventsCat/>
    </main>
  );
}
