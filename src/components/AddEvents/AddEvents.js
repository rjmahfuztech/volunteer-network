import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    }

    const url = `https://rocky-fortress-55251.herokuapp.com/addEvent`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('get response', res));
  };

  const handleImgUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '0a4177a1986a6915d8b70813ad9f689d');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="New exciting Event" ref={register} />
        <br />
        <input name="exampleRequired" type="file" onChange={handleImgUpload} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvents;