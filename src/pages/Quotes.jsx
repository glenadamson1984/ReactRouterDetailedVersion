import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Glen",
    text: "learning react is fun",
  },
  {
    id: "q2",
    author: "GlenAdamson",
    text: "learning react is great",
  },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
