const categories = [
    { name: 'Vegetable', image: '/vegetable.png', count: '25+' },
    { name: 'Fresh Fruits', image: '/fruits.png', count: '85+' },
    { name: 'Beverages', image: '/beverages.png', count: '68+' },
    { name: 'Sea Food', image: '/seafood.png', count: '29+' },
    { name: 'Package Food', image: '/packagefood.png', count: '68+' },
    { name: 'Backery Items', image: '/bakery.png', count: '25+' }
];

const products = [
    { id: 1, name: 'Fresh Tomato', image: '/tomato.png', oldPrice: '$10.00', newPrice: '$05.00' },
    { id: 2, name: 'Organic Cabbage', image: '/cabbage.png', oldPrice: '$12.00', newPrice: '$07.00' },
    { id: 3, name: 'Yellow Orange', image: '/orange.png', oldPrice: '$15.00', newPrice: '$15.00' },
    { id: 4, name: 'Broccoli Sliced Mix', image: '/brocolli.png', oldPrice: '$10.00', newPrice: '$07.00' },
    { id: 5, name: 'Strawberry 819525', image: '/strawberry.png', oldPrice: '$25.00', newPrice: '$20.00' },
    { id: 6, name: 'Organic Carrot', image: '/carrot.png', oldPrice: '$10.00', newPrice: '$07.00' },
    { id: 7, name: 'Organic Kiwi', image: '/kiwi.png', oldPrice: '$16.00', newPrice: '$15.00' },
    { id: 8, name: 'Sweet Mango', image: '/mango.png', oldPrice: '$30.00', newPrice: '$25.00' }
];

const shopProducts = [
    { id: 1, name: 'Fresh Tomato', image: '/tomato.png', oldPrice: '$10.00', newPrice: '$05.00' },
    { id: 2, name: 'Organic Cabbage', image: '/cabbage.png', oldPrice: '$12.00', newPrice: '$07.00' },
    { id: 3, name: 'Yellow Orange', image: '/orange.png', oldPrice: '$15.00', newPrice: '$15.00' },
    { id: 4, name: 'Broccoli Sliced Mix', image: '/brocolli.png', oldPrice: '$10.00', newPrice: '$07.00' },
    { id: 5, name: 'Strawberry 819525', image: '/strawberry.png', oldPrice: '$25.00', newPrice: '$20.00' },
    { id: 6, name: 'Organic Carrot', image: '/carrot.png', oldPrice: '$10.00', newPrice: '$07.00' },
    { id: 7, name: 'Organic Kiwi', image: '/kiwi.png', oldPrice: '$16.00', newPrice: '$15.00' },
    { id: 8, name: 'Sweet Mango', image: '/mango.png', oldPrice: '$30.00', newPrice: '$25.00' },
    { id: 9, name: 'Organic Cabbage', image: '/cabbage.png', oldPrice: '$12.00', newPrice: '$07.00' },
];
const TeamMember = [
    { id: 1, name: 'Sasha White', image: '/team-1.png', designation: 'CEO and Founder'},
    { id: 2, name: 'Vilma Jarvi', image: '/team-2.png', designation: 'Co-Founder'},
    { id: 3, name: 'Rhys Hawkins', image: '/team-3.png', designation: 'Manager'},
    { id: 4, name: 'Victoria Roach', image: '/team-4.png', designation: 'Accountant'},
    { id: 5, name: 'Danial White', image: '/team-5.png', designation: 'Store Keeper'},
    { id: 6, name: 'Joshua Wilson', image: '/team-6.png', designation: 'Store Keeper'}
];
const ProductDetails = [
    { id: 1, name: 'Fresh Tomato', image: '/tomato.png', oldPrice: '$10.00', newPrice: '$05.00' },
    { id: 2, name: 'Organic Cabbage', image: '/cabbage.png', oldPrice: '$12.00', newPrice: '$07.00' },
    { id: 3, name: 'Yellow Orange', image: '/orange.png', oldPrice: '$15.00', newPrice: '$15.00' },
    { id: 4, name: 'Broccoli Sliced Mix', image: '/brocolli.png', oldPrice: '$10.00', newPrice: '$07.00' }
];

const sellItems1 = [
    { id: 1, image: '/apple-sell.png', name: 'Mix Fruits (5 kg)', oldPrice: '$25.00', newPrice: '$20.00' },
    { id: 2, image: '/mix-sell.png', name: 'Mix Fruits (5 kg)', oldPrice: '$25.00', newPrice: '$20.00' },
    { id: 3, image: '/banana-sell.png', name: 'Banana (12 Piece)', oldPrice: '$5.00', newPrice: '$4.00' },
    { id: 4, image: '/grape-sell.png', name: 'Grapes Juice (3 Bottle)', oldPrice: '$25.00', newPrice: '$15.00' }];

const sellItems2 = [
    {
        id: 1,
        image: "/chilli-sell.png",
        name: "Simla Chilli (1 kg)",
        oldPrice: "$10.00",
        newPrice: "$7.00"
    },
    {
        id: 2,
        image: "/potato-sell.png",
        name: "Organic Potato (5 kg)",
        oldPrice: "$25.00",
        newPrice: "$20.00"
    },
    {
        id: 3,
        image: "/cauliflower-sell.png",
        name: "Cauliflower (1 kg)",
        oldPrice: "$05.00",
        newPrice: "$04.00"
    },
    {
        id: 4,
        image: "/peas-sell.png",
        name: "Green Peas (1 KG)",
        oldPrice: "$05.00",
        newPrice: "$04.50"
    }
];

const sellItems3 = [
    {
        id: 1,
        image: "/mango-sell.png",
        name: "Fresh Mango (1 kg)",
        oldPrice: "$10.00",
        newPrice: "$07.00"
    },
    {
        id: 2,
        image: "/kiwi-sell.png",
        name: "Organic Kiwi (2 kg)",
        oldPrice: "$20.00",
        newPrice: "$15.00"
    },
    {
        id: 3,
        image: "/carrot-sell.png",
        name: "Farm Carrot (1 kg)",
        oldPrice: "$05.00",
        newPrice: "$04.00"
    },
    {
        id: 4,
        image: "/radish-sell.png",
        name: "Fresh Radish (5 piece)",
        oldPrice: "$10.00",
        newPrice: "$09.00"
    }
];

const logoImages = [
    "/logo_01.png",
    "/logo_02.png",
    "/logo_03.png",
    "/logo_04.png",
    "/logo_05.png",
    "/logo_06.png",
    "/logo_07.png",
    "/logo_08.png",
    "/logo_09.png",
    "/logo_10.png",
    "/logo_11.png",
    "/logo_12.png"
];

const testimonials = [
    {
        image: "/test-1.png",
        name: "Vilma Hawkins",
    },
    {
        image: "/test-2.png",
        name: "Tonny Hensley",
    },
    {
        image: "/test-3.png",
        name: "Victoria Roach",
    },
    {
        image: "/test-4.png",
        name: "Lynn O’Leeum",
    },
    {
        image: "/test-5.png",
        name: "Isabelle Ringing",
    },
    {
        image: "/test-6.png",
        name: "Chris Anthemum",
    },
    {
        image: "/test-7.png",
        name: "Allie Grater",
    },
    {
        image: "/test-8.png",
        name: "Rose Bush",
    },
    {
        image: "/test-9.png",
        name: "Jack Aranda",
    },
]
const blogs = [
    {
        image: "/blog1.png",
        name: "Reasons to Include Organic Fennel in Your Diet",
    },
    {
        image: "/blog2.png",
        name: "Healthy Snacks to Get You Through the Work Day",
    },
    {
        image: "/blog3.png",
        name: "Discover a new way to shop for fresh & healthy food!",
    },
    {
        image: "/blog4.png",
        name: "Why Online Grocery Shopping is Preferable Traditional Shopping ? ",
    },
    {
        image: "/blog5.png",
        name: "8 Major Advantages of Online Grocery Shopping",
    },
    {
        image: "/blog6.png",
        name: "Discover a new way to shop for fresh & healthy food!",
    },
    {
        image: "/blog7.png",
        name: "Ways to Save Money & Time through Online Grocery Shopping",
    },
    {
        image: "/blog8.png",
        name: "8 Must Have Tips for Online Grocery Shopping Right Now",
    },
    {
        image: "/blog9.png",
        name: "10 Most Common Challenges Faced by Online Grocery Businesses",
    },
]



export default { categories, products,shopProducts, sellItems1, sellItems2, sellItems3, logoImages, testimonials, blogs, ProductDetails, TeamMember };