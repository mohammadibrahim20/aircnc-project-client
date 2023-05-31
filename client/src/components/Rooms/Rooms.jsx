import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";
import Container from "../Shared/Container";
import Card from "./Card";
const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (category) {
          const filter = data.filter((room) => room.category === category);
          // console.log(filter)
          setRooms(filter);
        } else {
          setRooms(data);
        }
      });
  }, [category]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room, i) => (
            <Card key={i} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="no Rooms available in This Category"
            subtitle="Please select other categories"
            center={true}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
