import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const id = params.quoteId;

  return (
    <>
      <div>QuoteDetail - {id}</div>
      <Route path={`/quotes/${id}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
