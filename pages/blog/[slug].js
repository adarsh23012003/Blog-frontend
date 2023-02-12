import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";


function slug() {
    const [article, setArticle] = useState([]);
    const router = useRouter();

    useEffect(() => {
    if (router.isReady) {
        async function getArticle() {
        try {
            const res = await axios.get(
            `http://localhost:1337/api/articles/${router.query.slug}?populate=*`
            );
            // console.log(res.data.data);
            setArticle(res.data.data);
        } catch (error) {
            console.log(error);
        }
        }
        getArticle();
    }
    }, [router.isReady]);
  return (
    <>
      <div>
        {article.id && (
          <div className='px-40'>
            <h1 className='font-bold text-2xl pb-1'>
              {article?.attributes?.title}
            </h1>
            <Image
              src={`http://localhost:1337${article.attributes?.thumbnail?.data?.attributes?.url}`}
              width={900}
              height={900}
              alt='thumbnail'
            />
            <ReactMarkdown className='text-justify pt-4 pb-52'>
              {article.attributes?.body}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}

export default slug