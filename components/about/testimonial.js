import React, { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { testimonialItems } from "../constants/testimonialList";

function Testimonial() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(data, "setData");

  return (
    <div>
      <main>
        <div className=" testimonials_list has_scrollbar">
          {testimonialItems.map((tes) => (
            <div
              className="content_card  p-5 lg:min-w-[calc(50%-15px)] ms-5 min-w-fit lg:min-w-6/12"
              onClick={() => {
                setIsOpen(true);
                setData(tes);
              }}
              key={tes.name}
            >
              <figure
                className="testimonials_avatar_box lg:w-20 lg:h-20 w-[4rem] h-[4rem]"
                style={{ backgroundColor: "#4e4c4d" }}
              >
                <img src={tes.image} alt="profile" />
              </figure>
              <h1 className="lg:ml-24 ml-20  lg:mb-5 mb-2  font-semibold lg:text-2xl text-lg capitalize">
                {tes.name}
              </h1>
              <p className="line-clamp-2 font-extralight text-sm">
                {tes.message}
              </p>
            </div>
          ))}
        </div>
        {isOpen && data && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-stone-900 opacity-75"></div>
            <div ref={modalRef} className="content_card w-full lg:w-6/12 mx-5">
              <div className="modal-close-btn" onClick={closeModal}>
                <TfiClose />
              </div>
              <div className="modal-content lg:p-8 p-4 flex lg:h-[20rem] justify-between">
                <figure
                  className="modal_avata lg:w-32 lg:h-32 w-[4rem] h-[4rem] flex"
                  style={{ backgroundColor: "#4e4c4d" }}
                >
                  <img src={data.image} alt="profile" />
                </figure>
                <div className="w-9/12 px-5">
                  <h1 className="lg:text-4xl text-2xl font-semibold">
                    {data.name}
                  </h1>
                  <p className="font-extralight text-stone-500 py-5 lg:flex justify-between lg:text-md text-md">
                    {data.date}
                    <span className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-5 w-5 fill-current ${
                            index < data.star
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1.33L12.66 6.8l5.34.78L15.55 11l1.44 4.42-4.36-2.96L10 16l-2.63 1.46L3 15.46 4.44 11 1.36 7.58l5.34-.78L10 1.33zm0 2.54L7.07 7.04l-3.2.47 2.46 2.1-.77 3.14 2.99-1.85 2.99 1.85-.77-3.14 2.46-2.1-3.2-.47L10 3.87z" />
                        </svg>
                      ))}
                    </span>
                  </p>
                  <p className="font-extralight text-xs lg:text-lg">
                    {data.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
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

        .modal_avata {
          background: linear-gradient(
            to bottom right,
            hsl(240, 1%, 25%) 3%,
            hsl(0, 0%, 19%) 97%
          );
          border-radius: 14px;
          box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
        }

        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #2b2b2c;
          border-radius: 8px;
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fcfcfc;
          font-size: 18px;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}

export default Testimonial;
