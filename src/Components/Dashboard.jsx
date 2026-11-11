import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

  const[user,setUser]=useState(null)
  console.log(user);

  const navigation=useNavigate()
  

  const getUserData=()=>{
    const response=JSON.parse(localStorage.getItem("user"))
    console.log(response);
    setUser(response?.name)
  }
  
  useEffect(()=>{
    getUserData()
  },[])

  const handleLogout=()=>{
    toast.success("Logout Successfully")
    localStorage.clear()
    setTimeout(()=>{
      navigation('/')
    },2000)
  }

  return (
    <div className='px-5 py-2'>
      <div className='p-5 text-center shadow rounded flex justify-between px-5'>
        <p className='text-blue-600 text-2xl font-medium'>Welcome , {user}</p>
        <button className='px-3 py-1 bg-red-600 text-white font-medium rounded hover:scale-110 duration-200' onClick={handleLogout}>Logout</button>
      </div>
      <div>
        
      </div>
      <div className='py-3  shadow my-5 hover:scale-101 px-5 duration-200'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur architecto culpa maiores, ipsum sunt cum alias deleniti, enim ullam cumque ut vero qui perferendis eum numquam sit praesentium itaque?
        Quibusdam eaque libero doloribus quidem odio repellendus esse, culpa accusamus? Corrupti esse dolor suscipit provident dolores odio, mollitia dolore consectetur perferendis laborum quisquam recusandae repudiandae ullam molestiae vitae minus praesentium?
        Labore, magni nulla, reprehenderit optio autem excepturi hic nobis veniam ad soluta iste omnis pariatur consectetur eligendi ipsum quisquam est iure, velit facere quas aperiam officia temporibus ipsam fugiat? Quis.
        Hic iusto autem veniam, ipsum nam fuga voluptatum cumque, ratione at temporibus nemo fugit placeat perferendis. Distinctio, voluptas assumenda? Expedita sunt deserunt quidem distinctio facere in sequi ratione cum fugit.
        Facere similique labore perferendis sunt enim fugit error perspiciatis quaerat vitae quasi, iure cum, voluptatibus in veniam possimus id quis aliquam. Magnam provident unde molestiae nostrum, alias quae quam maiores.
        Laudantium porro numquam corporis nobis accusamus cum, quas architecto sunt incidunt autem iure in maiores reiciendis laboriosam, magnam exercitationem quos unde hic debitis et! Tenetur quia ducimus corporis optio. Optio?
      </div>
      <div className='p-3 shadow my-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur architecto culpa maiores, ipsum sunt cum alias deleniti, enim ullam cumque ut vero qui perferendis eum numquam sit praesentium itaque?
        Quibusdam eaque libero doloribus quidem odio repellendus esse, culpa accusamus? Corrupti esse dolor suscipit provident dolores odio, mollitia dolore consectetur perferendis laborum quisquam recusandae repudiandae ullam molestiae vitae minus praesentium?
        Labore, magni nulla, reprehenderit optio autem excepturi hic nobis veniam ad soluta iste omnis pariatur consectetur eligendi ipsum quisquam est iure, velit facere quas aperiam officia temporibus ipsam fugiat? Quis.
        Hic iusto autem veniam, ipsum nam fuga voluptatum cumque, ratione at temporibus nemo fugit placeat perferendis. Distinctio, voluptas assumenda? Expedita sunt deserunt quidem distinctio facere in sequi ratione cum fugit.
        Facere similique labore perferendis sunt enim fugit error perspiciatis quaerat vitae quasi, iure cum, voluptatibus in veniam possimus id quis aliquam. Magnam provident unde molestiae nostrum, alias quae quam maiores.
        Laudantium porro numquam corporis nobis accusamus cum, quas architecto sunt incidunt autem iure in maiores reiciendis laboriosam, magnam exercitationem quos unde hic debitis et! Tenetur quia ducimus corporis optio. Optio?
      </div>
    </div>
  )
}

export default Dashboard