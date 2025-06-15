import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-9 gap-8 px-2 ">
        <div className="lg:w-1/2 relative max-h-80">
          <Image
            width={1000}
            height={1000}
            alt="Person image"
            src={"/assets/images/about_us/person.jpg"}
            className="w-80 h-80 object-cover  rounded-lg shadow-2xl"
          />
          <Image
            width={1000}
            height={1000}
            alt="Part image"
            src={"/assets/images/about_us/parts.jpg"}
            className="w-60 h-60 absolute object-cover -right-12 top-32 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <button className="btn primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
