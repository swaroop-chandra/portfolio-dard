import React from "react";

function Testimonial() {
  return (
    <div>
      <main>
        <div className=" testimonials_list has_scrollbar">
          <div className="content_card  p-5 lg:min-w-[calc(50%-15px)] min-w-full w-52 ms-5">
            <figure
              className="testimonials_avatar_box w-20 h-20 "
              style={{ backgroundColor: "#4e4c4d" }}
            >
              <img src="/images/emoji/avatar1.png" alt="profile" />
            </figure>
            <h1 className="ml-24 mb-5 font-semibold text-2xl capitalize">
              Gaurav
            </h1>
            <p className="line-clamp-2 font-extralight text-sm">
              Swaroop was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
          <div className="content_card  p-5 lg:min-w-[calc(50%-15px)] min-w-full w-52">
            <figure
              className="testimonials_avatar_box w-20 h-20 "
              style={{ backgroundColor: "#4e4c4d" }}
            >
              <img src="/images/emoji/avatar3.png" alt="profile" />
            </figure>
            <h1 className="ml-24 mb-5 font-semibold text-2xl capitalize">
              anjana
            </h1>
            <p className="line-clamp-2 font-extralight text-sm">
              Swaroop was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
          <div className="content_card  p-5 lg:min-w-[calc(50%-15px)] min-w-full w-52">
            <figure
              className="testimonials_avatar_box w-20 h-20 "
              style={{ backgroundColor: "#4e4c4d" }}
            >
              <img src="/images/emoji/avatar4.png" alt="profile" />
            </figure>
            <h1 className="ml-24 mb-5 font-semibold text-2xl capitalize">
              swaroop
            </h1>
            <p className="line-clamp-2 font-extralight text-sm">
              Swaroop was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
          <div className="content_card  p-5 lg:min-w-[calc(50%-15px)] min-w-full w-52">
            <figure
              className="testimonials_avatar_box w-20 h-20 "
              style={{ backgroundColor: "#4e4c4d" }}
            >
              <img src="/images/emoji/avatar5.png" alt="profile" />
            </figure>
            <h1 className="ml-24 mb-5 font-semibold text-2xl capitalize">
              Bishal
            </h1>
            <p className="line-clamp-2 font-extralight text-sm">
              Swaroop was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </main>
      <style global jsx>{`
        .content_card {
          position: relative;
          background: linear-gradient(
            to bottom right,
            hsl(0, 0%, 25%) 0%,
            hsla(0, 0%, 25%, 0) 50%
          );
          border-radius: 14px;
          box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
          cursor: pointer;
          z-index: 1;
        }
        .content_card::before {
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
        .testimonials_avatar_box {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(15px, -25px);
          background: linear-gradient(
            to bottom right,
            hsl(240, 1%, 25%) 3%,
            hsl(0, 0%, 19%) 97%
          );
          border-radius: 14px;
          box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
        }
        .testimonials_list {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 15px;
          margin: 0 -15px;
          padding: 25px 15px;
          padding-bottom: 35px;
          overflow-x: auto;
          scroll-behavior: smooth;
          overscroll-behavior-inline: contain;
          scroll-snap-type: inline mandatory;
        }

        .has_scrollbar::-webkit-scrollbar-thumb {
          background: #ffdb70;
          border-radius: 5px;
        }
        .has_scrollbar::-webkit-scrollbar-track {
          background: #2b2b2c;
          border-radius: 5px;
        }
        .has_scrollbar::-webkit-scrollbar-button {
          width: 100px;
        }
        .has_scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
      `}</style>
    </div>
  );
}

export default Testimonial;
