import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import Link from "next/link";

function slug() {
  const [allArticle, setAllArticle] = useState([]);
  const router = useRouter();
  // console.log(router)


  useEffect(() => {
    if (router.isReady) {
      async function getArticle() {
        try {
          const res = await axios.get(
            `http://localhost:1337/api/categories/${router.query.slug}?populate=*`
          );
          setAllArticle(res.data.data.attributes);
        } catch (error) {
          console.log(error);
        }
      }
      getArticle();
    }
  }, [router.isReady]);

  return (
    <>
      {console.log(allArticle?.image?.data?.attributes?.url)}
      <div className='grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3'>
        {
          allArticle?.articles?.data.map((element) => {
            return (
              <>
                <div key={element.id}>
                  <Link href={`/blog/${element.attributes.slug}`}>
                  <Card
                    image={`http://localhost:1337${allArticle?.image?.data?.attributes?.url}`}
                    title={element.attributes.title}
                    description={element.attributes.description}
                  />
                  </Link>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
}

export default slug;
