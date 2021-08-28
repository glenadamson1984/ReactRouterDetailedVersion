import { Switch, Route, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetails";
import AddQuote from "./pages/AddQuote";
import Layout from "./components/layout/Layout";

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
      </Switch>
    </Layout>
  );
}

export default App;
