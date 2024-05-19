"use client"
import Hero from "@/components/pagesComponents/home/header/hero/Hero"
// import { useEffect, useRef } from "react";

const HomePageData = {
    header:{
        hero:{
            title: "E-Shop",
            subtitle: "Welcome to the E-Shop where you can buy all your electronic needs",
            background: "/home/HeroBG.jpg",
            callToAction:[
                {
                    title: "Shop Now",
                    link: "/shop"
                },
                {
                    title: "Learn More",
                    link: "/about"
                }
            ]
        },
        heroBottom:[
            {
                title: "Responsive",
                description: "Customer service available 24/7",
                icon: "",
            },
            {
                title: "Secure",
                description: "Certified and trusted since 2015",
                icon: "",
            },
            {
                title: "shipping",
                description: "free, fast and reliable",
                icon: "",
            },
            {
                title: "Transparent",
                description: "Hassle free and transparent",
                icon: "",
            },
        ]

    },
    sections:{
        section_1:{
            title: "Featured Products",
            linkToPage:"/featured",
            products: [
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },

            ]
        },
        bannerSection_1:{
            title: null,
            left:{
                title:"free shipping everywhere",
                description: "free shipping on all orders",
                callToAction:[
                    {
                        title: "Shop Now",
                        link: "/shop"
                    }
                ]
            },
            right:{
                title: "Black Friday Clearance",
                description: "Up to 50% off",
                callToAction:[
                    {
                        title: "Shop Now",
                        link: "/shop"
                    }
                ]
            }
        },
        section_2:{
            title: "New Products",
            linkToPage:"/new",
            products: [
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers", 
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
            ]
        },
        bannerSection_2:{
            title: "Spring Sale",
            linkToPage:"sale",
            date:{
                from: "2022-03-01",
                to: "2022-03-31",
            },
            callToAction:[
                {
                    title: "Shop Now",
                    link: "/shop"
                }
            ],
            products: [
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
            ]
        },
        section_3:{
            title: "Top Selling Products",
            linkToPage:"/top",
            products: [
                {
                    name: "Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    type: "phone",
                    price: "₹38799",
                    rating: 4.5,
                    ratedBy: 100,
                },
            ],
            sideBanner:{
                title: "Buy One, Get One Free",
                description: "Buy any 3 products of the same type and get another free",
                image: "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                callToAction:[
                    {
                        title: "Shop Now",
                        link: "/shop"
                    }
                ]
            }
        },
        section_4:{
            title: "Frequently Asked Questions",
            description: "Frequently asked questions about our products",
            questions: [//Accordion
                {
                    question: "What is your return policy?",
                    answer: "We offer a 30-day return policy on all orders. Please contact us at the contact page for more information."
                },
                {
                    question: "How do I ship my order?",
                    answer: "We offer free shipping on all orders. Please contact us at the contact page for more information."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards. Please contact us at the contact page for more information."
                }
            ],
            callToAction:[
                {
                    title: "Ask a Question",
                    link: "/qna"
                }
            ]
        },
        section_5:{
            title:"Tech Talks",
            description: "We offer a 30-day return policy on all orders. Please contact us at the contact page for more information.",
            linkToPage:"/tech",
            Talks: [
                {
                    title:"Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    date: "2022-03-01",
                },
                {
                    title:"Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    date: "2022-03-01",
                },
                {
                    title:"Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                    image:"https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                    date: "2022-03-01",
                },
            ]
        },
        section_6:{
            title: "Our Brands",
            brands: [
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
            ]
        },
        getOurUpdatesSection: {
            title: "Get Our Updates",
            description: "Subscribe to our newsletter to stay up-to-date with our latest offers and promotions.",
            image: "https://m.media-amazon.com/images/I/71qZERyxy6L._SL1500_.jpg",
            callToAction:[
                {
                    title: "Subscribe",
                    link: "/subscribe"
                }
            ]
        }

        
    }
}



export default function Home() {
    // const mainRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     // scroll to main
    //     mainRef.current?.scrollIntoView({ behavior: "smooth" });
    // },[])
    return (
        <main className="grid grid-cols-1 gap-2 p-2" 
        // ref={mainRef}
        >
            <header>
                <Hero data={HomePageData.header.hero} />
                <div>
                    <span>responsive</span>
                    <span>secure</span>
                    <span>shipping</span>
                    <span></span>
                </div>
            </header>
            <section>sections</section>
        </main>
    );
}
