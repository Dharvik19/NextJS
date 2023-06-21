import {useRouter} from 'next/router'
//our-domain.com/news/something-important
function DetsilPage(){
    const router = useRouter();

   const newsId =  router.query.newsid;
    return (
    <h1>The Detail Page</h1>
    )
}
export default DetsilPage;