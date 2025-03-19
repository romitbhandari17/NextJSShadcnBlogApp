"use client"
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['NextJS', 'ShadCn', 'Tailwind CSS'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div >
      <main className="m-3">
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
                <input type="search" name="query" placeholder="Search Components" required="required" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                <Button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
          </div>
        </section>
        <section>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="mt-2 text-gray-600">$10/month</p>
                <ul className="mt-4">
                  <li>Access to basic components</li>
                  <li>Email support</li>
                </ul>
                <Button className="mt-4 w-full p-2 text-white bg-primary rounded-lg">Choose Plan</Button>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="mt-2 text-gray-600">$20/month</p>
                <ul className="mt-4">
                  <li>Access to all components</li>
                  <li>Priority email support</li>
                </ul>
                <Button className="mt-4 w-full p-2 text-white bg-primary rounded-lg">Choose Plan</Button>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="mt-2 text-gray-600">Contact us</p>
                <ul className="mt-4">
                  <li>Custom solutions</li>
                  <li>Dedicated support</li>
                </ul>
                <Button className="mt-4 w-full p-2 text-white bg-primary rounded-lg">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto px-4 py-10 m-4">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg shadow-lg">
                <p className="mb-4">This service has changed my life! Highly recommend to everyone.</p>
                <h3 className="font-semibold">John Doe</h3>
                <p className="">CEO, Company A</p>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <p className="mb-4">Amazing experience! The team was very professional.</p>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="">Marketing Director, Company B</p>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <p className="mb-4">I couldnt be happier with the results. Truly exceptional!</p>
                <h3 className="font-semibold">Alice Johnson</h3>
                <p>Product Manager, Company C</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 m-4">
          <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
          <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding React Hooks</h3>
                <p className="mb-4">A deep dive into the use of hooks in React.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            <div className="border shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS for Beginners</h3>
                <p className="mb-4">Learn how to use Tailwind CSS to style your applications.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            <div className="border shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building a Blog with Next.js</h3>
                <p className="mb-4">Step-by-step guide to building a blog using Next.js.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
