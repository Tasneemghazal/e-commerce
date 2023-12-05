import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
export default function Product() {
  const {id} = useParams();
  console.log(id);
  const getProduct = async () => {
    const  {data}  = await axios.get(

      `${import.meta.env.VITE_API_URL}/products/${id}`
    );
    console.log(data);
    return data.product;
  };
  const { data, isLoading } = useQuery("product", getProduct);
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }
  return( 
  <div className="container">
   <div className="row">
    
    <div className="col-md-4">
       {data.subImages.map((image,index) =>
       <React.Fragment key={index}>
       <ReactImageMagnify className="mt-4 product" {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: image.secure_url
        },
        largeImage: {
            src: image.secure_url, 
            width:1200,
            height: 1800
        },
        enlargedImageContainerDimensions:{
          width:200,
          height:200
        },
        enlargedImagePosition:'over',
        isHintEnabled: true
    }} />
    </React.Fragment>
       )}
        
    </div>
    <div className="col-md-8">
        <h2 className="mt-2">{data.name}</h2>
        <h2>{`$ ${data.price}`}</h2>
    </div>
   </div>
  </div>
  );
}
