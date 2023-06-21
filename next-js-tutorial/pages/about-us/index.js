//our-domain.com/aboutus
import {useRouter} from 'next/router'
const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ] ;
function AboutUs(){
    console.log(details)
    const router = useRouter();
    const id = router.query.index;
    return (
    <>
    
    <h1>The About Us Page</h1>
    <h2>{id}</h2>
    <ul>
      {details.map((item) => (
        <li key={item.id}>
          <a href={`about-us/${item.id}`}>{item.name}</a>
        </li>
      ))}
    </ul>

    </>


    )
}
export default AboutUs;