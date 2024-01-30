import { Header } from '@/components/header';
import { GetCallSection } from '@/components/get-call-section';
import { BannerSection } from '@/app/_components/banner-section';
import { StudyPlansSection } from '@/app/_components/study-plans-section';
import { CoursesListSection } from '@/app/_components/courses-list-section';
import { NewEventsCatSection } from '@/app/_components/new-events-cat-section';
import { StudyDirectionSection } from '@/app/_components/study-direction-section';


export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <BannerSection/>
      <div id="free-events">
        <CoursesListSection/>
      </div>
      <StudyDirectionSection/>
      <StudyPlansSection/>
      <GetCallSection/>
      <NewEventsCatSection/>
    </main>
  );
}
