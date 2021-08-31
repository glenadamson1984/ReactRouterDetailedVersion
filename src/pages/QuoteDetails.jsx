import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const params = useParams();
  const id = params.quoteId;
  const routeMatch = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === id);

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={routeMatch.path}>
        <div className={"centered"}>
          <Link to={`${routeMatch.url}/comments`} exact>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
