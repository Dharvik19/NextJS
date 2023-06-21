//our-domain.com/aboutus
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ] ;
function DevDetails(){
    const router = useRouter();
    const id = router.query.developerId;
    console.log(id);
    ;
    
    
    return (
    <>
    
    <h1>The About Us Page</h1>
    <h2>{id}</h2>
    <ul>
      {details.filter((item)=>item.id === id).map((item) => (
        <li key={item.id}>
          <h2 >{item.name}</h2>
          <h2 >{item.role}</h2>
        </li>
      ))}
    </ul>

    </>


    )
}
export default DevDetails;