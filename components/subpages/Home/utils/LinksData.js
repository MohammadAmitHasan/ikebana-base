import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
const QuickLinks = [
    {
        name: 'Customer Service',
        links: [
            {
                title: 'Contact',
                link: '/'
            },
            {
                title: 'Own delivery service',
                link: '/'
            },
            {
                title: 'Delivery & Times',
                link: '/'
            },
            {
                title: 'Returns',
                link: '/'
            },
            {
                title: 'Warranty & Repair',
                link: '/'
            },
            {
                title: 'Order business',
                link: '/'
            },
            {
                title: 'Order pay',
                link: '/'
            },
            {
                title: 'Privacy Statement',
                link: '/'
            },
        ]
    },
    {
        name: 'Popular Categories',
        links: [{
            title: 'Chairs',
            link: '/'
        },
        {
            title: 'Garden',
            link: '/'
        },
        {
            title: 'Furniture',
            link: '/'
        },
        {
            title: 'Tables',
            link: '/'
        },
        {
            title: 'Lighting',
            link: '/'
        },
        {
            title: 'Accessories',
            link: '/'
        },
        {
            title: 'Cabinets',
            link: '/'
        },
        {
            title: "Children's room",
            link: '/'
        },]
    }
]

const KeepInTouchData = [
    {
        name: 'twitter',
        icon: <FaTwitter />,
        link: '/'
    },
    {
        name: 'facebook',
        icon: <FaFacebookF />,
        link: '/'
    },
    {
        name: 'instagram',
        icon: <TiSocialInstagram />,
        link: '/'
    },
    {
        name: 'pinterest',
        icon: <FaPinterest />,
        link: '/'
    },
]

export { KeepInTouchData, QuickLinks };

