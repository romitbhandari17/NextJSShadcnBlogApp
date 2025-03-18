import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from 'next/navigation';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import rehypePrettyCode from 'rehype-pretty-code';


export default async function Page({ params }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), `app/content/${slug}.md`); // Use absolute path
    
    if(!fs.existsSync(filePath)){
        notFound();
        return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);
    //console.log(data);

    var htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
        theme: 'github-dark'
      })
    .process(content);

    return (
        <div className="mx-auto max-w-3xl border shadow-lg m-3 p-6">
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            <p className="mb-4 italic">{data.description}</p>
            <div className="mb-4">
                <p className="prose" dangerouslySetInnerHTML={{ __html: String(htmlContent) }}></p>
            </div>
            <div className="text-sm">
                <p>By {data.author} on {data.date}</p>
            </div>
        </div>
    );
}