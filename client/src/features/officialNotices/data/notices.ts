import type { OfficialNotice } from '../types/officialNotice.types';

export const notices: OfficialNotice[] = [
  {
    noticeId: 1,
    category: 'IMPORTANT',
    title: 'Mid-semester exam schedule released',
    description:
      'The examination timetable for all departments has been released. Students are requested to download the timetable and prepare accordingly.',
    postedBy: 'Examination Cell',
    postedAt: 'Today, 9:15 AM',
    attachmentName: 'View Attached Timetable',
  },
  {
    noticeId: 2,
    category: 'GENERAL',
    title: 'Library timings extended during exams',
    description:
      'The Central Library will remain open from 8:00 AM to 10:00 PM during the examination period.',
    postedBy: 'Central Library',
    postedAt: 'Yesterday, 4:30 PM',
  },
  {
    noticeId: 3,
    category: 'EVENT',
    title: 'Flutter Workshop Registration Open',
    description:
      'Students interested in Flutter development can register for the upcoming Flutter workshop.',
    postedBy: 'CSE Department',
    postedAt: '2 days ago',
  },
  {
    noticeId: 4,
    category: 'URGENT',
    title: 'College closed due to heavy rainfall',
    description:
      'Classes are suspended today due to heavy rainfall. Students are advised to stay safe.',
    postedBy: 'College Administration',
    postedAt: '30 minutes ago',
  },
];
