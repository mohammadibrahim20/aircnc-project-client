import React from "react";
import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";
import Container from "../../components/Shared/Container";

const RoomDetails = () => {
  console.log("hi");
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
              src="https://www.cdnjustlearn.com/article/Tivoli-a-city-where-art-history-and-nature-meet.jpg"
              alt="Header image"
            />
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-7 md:gap-6 mt-6">
            <RoomInfo />
            <div className="mb-10 order-first md:order-last md:col-span-3">
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
