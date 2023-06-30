import React from "react";
import Doing from "./WhatIDo";
import Testimonial from "./testimonial";

function About() {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main>
        <p className="lg:text-md text-sm">
          I'm Creative Web Developer from Mangalore, India, working in MERN
          Stack. I enjoy turning complex problems into simple, beautiful and
          intuitive designs.
          <br />
          <br /> My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
        <div>
          <h1 className="text-2xl mt-8 mb-4 font-semibold">What I'm Doing</h1>
          <Doing />
        </div>
        <div>
          <h1 className="text-2xl mt-8 mb-4 font-semibold">Recommendation</h1>
          <Testimonial />
        </div>
      </main>
      <style jsx>{`
        p {
          font-weight: 200;
        }
        .service_item {
          position: relative;
          background: linear-gradient(
            to bottom right,
            hsl(0, 0%, 25%) 0%,
            hsla(0, 0%, 25%, 0) 50%
          );
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
          z-index: 1;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 18px;
        }
        .service_item::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: linear-gradient(
              to bottom right,
              hsla(240, 1%, 18%, 0.251) 0%,
              hsla(240, 2%, 11%, 0) 100%
            ),
            hsl(240, 2%, 13%);
          border-radius: inherit;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}

export default About;
