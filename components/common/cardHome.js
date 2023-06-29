import React from "react";

function CardHome({ image, title, message }) {
  return (
    <div className=" mb-10" style={{ width: "48%" }}>
      <main>
        <div className="service_item">
          <div className="h-full w-3/12 self-center">{image}</div>
          <div>
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className="font-extralight text-sm mt-1">{message}</p>
          </div>
        </div>
      </main>
      <style jsx>{`
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

export default CardHome;
