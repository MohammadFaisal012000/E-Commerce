import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      let response=await fetch(API_URL);
      let data=await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("No Data get From Here");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])

  return( 
    <div>
     {
      loading ?<Spinner/>:(
        posts.length > 0 ?
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh ]">
          {
               posts.map((post)=>(
              <Product key={post.id} post={post}></Product>
            ))
               }
        </div>
          
            
          )
        :
        (
          <div className="flex justify-center items-center">
          No Posts are Available
          </div>
        ) 
      )
     }
    </div>
  )
};

export default Home;
