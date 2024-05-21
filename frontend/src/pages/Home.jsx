import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      img: "https://images4.alphacoders.com/271/271158.jpg",
      title: "post",
      content: "this is the content",
    },
    {
      id: 2,
      img: "https://images4.alphacoders.com/271/271158.jpg",
      title: "post",
      content: "this is the content",
    },
    {
      id: 2,
      img: "https://images4.alphacoders.com/271/271158.jpg",
      title: "post",
      content: "this is the content",
    },
    {
      id: 2,
      img: "https://images4.alphacoders.com/271/271158.jpg",
      title: "post",
      content: "this is the content",
    },
  ];
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""></img>
            </div>
            <div className="content">
              <Link>
                <h1 className="title">{post.title}</h1>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, doloribus? Odio, vel vitae? Consectetur vel ratione
                asperiores earum minima excepturi praesentium, sint adipisci
                laborum non dolor ducimus. Necessitatibus, doloribus reiciendis.
              </p>
              <buttona className="button-readmore">Read More</buttona>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
