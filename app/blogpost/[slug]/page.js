import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";


const blog = {
    title: "Sample Blog Title",
    description: "This is a sample description of the blog post.",
    content: "Here is the main content of the blog post. It can be multiple paragraphs long.",
    author: "John Doe",
    date: "October 1, 2023"
};

export default async function Page({ params }) {
    const { slug } = await params;
    console.log(slug)
    const filePath = path.join(process.cwd(), `app/content/${slug}.md`); // Use absolute path
    console.log(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);
    console.log(data);

    return (
        <div className="mx-auto max-w-3xl border shadow-lg m-3 p-6">
            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
            <p className="text-gray-500 mb-4 italic">{data.description}</p>
            <div className="mb-4">
                <p className="" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
            <div className="text-sm text-gray-400">
                <p>By {blog.author} on {blog.date}</p>
            </div>
        </div>
    );
}