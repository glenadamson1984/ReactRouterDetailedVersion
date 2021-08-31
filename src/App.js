import { Switch, Route, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetails";
import AddQuote from "./pages/AddQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact path="/" to="/quotes" />
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <AddQuote />
        </Route>
        <Route path={"*"}>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
