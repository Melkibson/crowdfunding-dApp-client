import { createCampaign, dashboard, payment, profile } from '../assets';

export const navlinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: createCampaign,
        link: '/create-campaign',
    },
    {
        name: 'payment',
        imgUrl: payment,
        link: '/payment',
        disabled: true,
    },
    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
    },
];