import dayjs from "../utils/dayjs";

export const newDashboardSideNavUrls = [
    {
        name: 'Dashboard',
        icon: '/assets/images/dashboard.svg',
        activeIcon: '/assets/images/dashboard-actv.svg',
        route: 'user-dashboard'
    },

    {
        name: 'Book an Appointment',
        icon: '/assets/images/appoitnment.svg',
        activeIcon: '/assets/images/appoitnment-actv.svg',
        route: 'therapist-list'
    },

    {
        name: 'Content',
        icon: '/assets/images/content.svg',
        activeIcon: '/assets/images/content-actv.svg',
        route: 'content-library'
    },

    // {
    //     name: 'Communities',
    //     icon: '/assets/images/content.svg',
    //     activeIcon: '/assets/images/content-actv.svg',
    //     route: 'testcommunities'
    // },

    {
        name: 'Wellness Plan',
        icon: '/assets/images/wellnessplan.svg',
        activeIcon: '/assets/images/wellnessplan-actv.svg',
        route: 'user-dashboard/wellness-plan'
    },

    {
        name: 'My Bookings',
        icon: '/assets/images/booking.svg',
        activeIcon: '/assets/images/booking-actv.svg',
        route: 'mybooking'
    },

    {
        name: 'Chat with Therapists',
        icon: '/assets/images/chat.svg',
        activeIcon: '/assets/images/chat-actv.svg',
        route: 'chat-screen'
    },

    {
        name: 'My Therapists',
        icon: '/assets/images/therapist.svg',
        activeIcon: '/assets/images/therapist-actv.svg',
        route: 'my-therapists'
    },

    {
        name: 'Notes or Reports',
        icon: '/assets/images/notes.svg',
        activeIcon: '/assets/images/notes-actv.svg',
        route: 'notes-reports-assessment'
    },

    {
        name: 'My Assessments',
        icon: '/assets/images/assessments.svg',
        activeIcon: '/assets/images/assessments-actv.svg',
        route: 'notes-reports-assessment/assessments'
    },
    {
        name: 'Past Invoices',
        icon: '/assets/images/invoice.svg',
        activeIcon: '/assets/images/invoice-actv.svg',
        route: 'past-invoices'
    },
    {
        name: ' Packages',
        icon: '/assets/images/package-icon.svg',
        activeIcon: '/assets/images/package-icon-actv.svg',
        route: 'packages'
    },
]

export const getDay = (date, comparedDate) => {
    const formatDate = dayjs(date).tz('Asia/Kolkata').format('YYYY-MM-DD');
    const formatComparedDate = dayjs(comparedDate).tz('Asia/Kolkata').format('YYYY-MM-DD');
    return dayjs(formatComparedDate).diff(dayjs(formatDate), 'day') >= 0 ? dayjs(formatComparedDate).diff(dayjs(formatDate), 'day') + 1 : dayjs(formatComparedDate).diff(dayjs(formatDate), 'day');
};


export const typeBasedIcon = (type) => {
    if (type === 'Text') return '/assets/images/blog-play.svg';
    if (type === 'Video') return '/assets/images/video-play.svg';
    if (type === 'Audio') return '/assets/images/audio-play.svg';
    if (type === 'EmpoweringQuestionnaire') return '/assets/images/questionnaire-play.svg';
    if (type === 'Questionnaire') return '/assets/images/questionnaire-play.svg';
    if (type === 'FlashCard') return '/assets/images/flashcard-play.svg';
}

export const discoveMoreColors = [
    { label: "Purple", value: "purple" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" }
]


export const convertSecondsToHHMMSS = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0'),
        m = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(seconds % 60).toString().padStart(2, '0');

    return h + ':' + m + ':' + s;
}

export const converToRoute = (base, query) => {
    const baseRoute = base
    let queryString = ''
    if (query && Object.keys(query).length) {
        Object.keys(query).forEach(item => {
            if (queryString) {
                queryString += `&${item}=${query[item]}`
            } else {
                queryString += `${item}=${query[item]}`
            }

        })
        return `${baseRoute}?${queryString}`
    }
    return baseRoute;
}
export const shortingStringBeforeSpace = (str, maxLen, separator = ' ') => {
    if (str.length <= maxLen) return str;
    return `${str.substr(0, str.lastIndexOf(separator, maxLen))} ...`;
}

export const dayNames = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" }

]
export const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const groupBy = prop => data => {
    return data.reduce((dict, item) => {
        const { [prop]: _, ...rest } = item;
        dict[item[prop]] = [...(dict[item[prop]] || []), rest];
        return dict;
    }, {});
};


export  const getTypeOfTherapy = (scheduleType) => {
    const typeOfTherapy = {
        SESSION: 'Individual',
        CHAT: 'Individual',
        GROUP_SESSION: 'Group',
        COUPLE_SESSION: 'Couple'
    }
    return typeOfTherapy[scheduleType]
}

export const redirectPackage = (initiator, packageId) => {
    if (initiator === 'therapist' || initiator === 'affiliate') return `packages/user-detail?packageId=${packageId}`
    return `/select-therapist?packageId=${packageId}`
}

export const brandLoggingOptions={
    PERSONAL_INFO:'PersonalInfo',
    PATIENT_ID:'PatientId',
    STUDENT_ID:'StudentId'
}

export const RavinScore = {
    10: [(42,95),   (38.5,90), (33,75), (23.50,50),(15,25), (12,10),   (11,5), (-100,5)],
    11: [(46,95),   (44,90),   (37,75), (29,50),   (17,25), (12,10),   (11,5), (-100,5)],
    12: [(47,95),   (44,90),   (39,75), (31,50),   (18,25), (13.5,10), (11,5), (-100,5)],
    13: [(49,95),   (47,90),   (41,75), (34,50),   (21,25), (14,10),   (12,5), (-100,5)],
    14: [(52,95),   (50,90),   (45,75), (39,50),   (29,25), (18,10),   (13,5), (-100,5)],
    15: [(55,95),   (52,90),   (46,75), (41,50),   (31,25), (19,10),   (14.5,5), (-100,5)],
    16: [(55,95),   (52.5,90), (47,75),(42,50),    (34,25), (22,10),   (17,5), (-100,5)],
    17: [(55.5,95), (53,90),  (49.5,75),(45,50),   (38,25), (29.5,10), (22,5), (-100,5)],
    18: [(54,95),   (49,90),   (45,75), (40,50),   (35,25), (25.5,10), (19.5,5), (-100,5)],
    

}