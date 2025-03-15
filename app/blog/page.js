import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

//const files = fs.readdirSync("content", "utf-8");
export default async function Blog() {

    const blogsDirectory = path.join(process.cwd(), "app/content"); // Use absolute path
    const blogFiles = fs.readdirSync(blogsDirectory);

    //console.log(blogFiles);

    const blogs = blogFiles.map(file => {
        const filePath = path.join(blogsDirectory, file);
        //console.log('filepath=',filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { content, data } = matter(fileContent);
        //console.log(data);
        
        return data;
    });

// const blogs = [
//     {
//         title: 'Understanding React',
//         description: 'A deep dive into React and its ecosystem. You will find it awesome.',
//         slug: 'understanding-react',
//         author: 'John Doe',
//         dateCreated: '2023-10-01',
//     },
//     {
//         title: 'Next.js for Beginners',
//         description: 'Getting started with Next.js and server-side rendering.',
//         slug: 'nextjs-for-beginners',
//         author: 'Jane Smith',
//         dateCreated: '2023-09-15',
//     },
//     // Add more blog objects as needed
// ];

// export default async function Blog() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.slug} className="border shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="">{blog.description}</p>
                        <p className="text-gray-500 text-sm my-3">
                            By {blog.author} on {blog.date}
                        </p>

                        <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({ variant: "outline" })} text-blue-500 hover:bg-blue-100 rounded-lg p-2`}>
                            Click here
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};