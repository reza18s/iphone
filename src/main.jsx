import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
   dsn: "https://0fbd4281f1ad3c0c98cf20c6d319c61b@o4507158923116544.ingest.de.sentry.io/4507158928425040",
   integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.metrics.metricsAggregatorIntegration(),
      Sentry.reactRouterV6BrowserTracingIntegration({
         useEffect: React.useEffect,
      }),
      Sentry.replayIntegration(),
   ],
   // Performance Monitoring
   tracesSampleRate: 1.0, //  Capture 100% of the transactions
   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
   // Session Replay
   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
