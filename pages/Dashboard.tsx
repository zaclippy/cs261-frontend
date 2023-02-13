import { IconCalendarMinus } from '@tabler/icons';
import { HeaderTabs } from './HeaderTabs';

export default function HomePage() {
  const user = {
    name: 'User 1',
  }; // user data
  const adminTabs: string[] = ['Dashboard', 'Milestones', 'Tasks', 'Requirements', 'Team']; // tabs data

  return (
    <>
      <HeaderTabs user={user} tabs={adminTabs} selected='Dashboard' />
      <div> Dashboard Content </div>
    </>
  );
}
