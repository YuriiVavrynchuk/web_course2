import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import PrinterList from "../components/Cards/PrinterList";
import Heading from "../components/Heading/Heading";
import ListingTitle from "../components/Menu/ListingTitle";
import { GlobalContext } from "../context/GlobalState";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { printers, isLoading } = useContext(GlobalContext);

  const firstPrinter = printers[0];

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {printers.length > 0 ? <Heading printer={firstPrinter} /> : ""}
      <div className="my-6 flex justify-between">
        <ListingTitle />
      </div>
      <PrinterList />
    </Wrapper>
  );
};

export default Home;
