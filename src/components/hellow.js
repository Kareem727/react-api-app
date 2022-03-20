import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Hellow = (props) => {
  const token = "563492ad6f91700001000001c4f8b66bbb93484b909869982c94635e";

  // const {id} = useParams();
  let content = null;

  const url = `https://swapi.dev/api/people/1`;
  const url2 = "https://api.pexels.com/v1/curated?per_page=1";
  const [product, setProduct] = useState({
    loading: false,
    data: null,
  });

  const [imagee, setImagee] = useState({
    loading: false,
    data: null,
  });
  useEffect(() => {
    setImagee({
      loading: true,
      data: null,
    });
    axios
      .get(url2, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setImagee({
          loading: false,
          data: response.data,
        });
      });
  }, [url2]);

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
    });
    axios.get(url).then((response) => {
      setProduct({
        loading: false,
        data: response.data,
      });
    });
  }, [url]);

  if(imagee.loading){
content =
<Loading/>
}

  if (product.data && imagee.data) {
    content = (
      <div>
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={imagee.data.photos[0].src.original}
          ></img>
        </div>
        <div>
          <h1>{product.data.name}</h1>
        </div>

        <div>
          <h1>{product.data.height}</h1>
        </div>

        <div>
          <h1>{product.data.mass}</h1>
        </div>

        <div>
          <h1>{product.data.eye_color}</h1>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Hellow;
