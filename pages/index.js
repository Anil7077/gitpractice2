import { useState } from "react";
import useFetch, { fetchData } from "@/utils/ApiCalls";
import ReactImageMagnify from 'react-image-magnify';

export default function Home() {
  const image = '/images/cont.jpg'
  const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products');
  // console.log(data);

  if (error) {
    return <h1>Error happened</h1>
  }
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      <div className="container">
        {data.data.map((item) => (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <hr />
          </div>
        ))}
      </div>

      <div className="main-container" id="content">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: image,
          },
          largeImage: {
            src: image,
            width: 500, // Adjust width based on aspect ratio
            height: 773,
          },
          enlargedImagePosition: 'beside',
          enlargedImageSize: 100, // Adjust the size of the lens
          
        }} />
      </div>
    </>
  );
}

// export async function getServerSideProps () {
//   try{
//     const data1 = await fetchData('https://fakestoreapi.com/products')
//     return {
//       props: { data1: data1.data }
//     }
//   }catch(error) {
//     console.log(error);
//     return{
//       props: {data: {}}
//     }
//   }
// }












{/* <div className="hidden lg:block bg-green-200">
<div className="container flex p-2 justify-between align-middle">
  <div className="flex justify-start">
    <img src="/images/endpoint.png" className=" w-12" />
  </div>
  <div className="flex justify-center items-center">
    <ul className="flex gap-5">
      <li>Home</li>
      <li>About us</li>
      <li>Portfolio</li>
      <li>Contact us</li>
    </ul>
  </div>
  <div className="flex justify-end">
    <input placeholder="search here" className="p-1 rounded" />
  </div>
</div>
</div>

<div className="lg:hidden relative">
<nav className="bg-gray-500 text-white p-2">
  <div className="flex justify-between items-center">
    <div>
      <img src="/images/endpoint.png" className="w-10" />
    </div>
    <div>
      {openMenu ? (
        <img
          src="/images/close.png"
          className="w-7"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <img
          src="/images/menu.png"
          className="w-10"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}
    </div>
  </div>
</nav>
{openMenu && (
  <div className="absolute bg-gray-800 text-white z-30 m-1 border-2 border-green-100 w-80">
    <ul>
      <li className="border-b-2 border-green-500">Home</li>
      <li className="border-b-2 border-green-500">About us</li>
      <li className="border-b-2 border-green-500">Portfolio</li>
      <li className="border-b-2 border-green-500">Contact</li>
    </ul>
  </div>
)}
</div>

<div class="bg-blue-500 text-white p-4 text-center">
<img src="/images/banner.jpg" className="w-full h-64 object-cover" />
</div> */}