import { log } from "logger";
import { PageClient } from "./PageClient";
import { Button } from "ui";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div className="px-4 mx-4">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <p className="description bg-slate-800"></p>
      <div className="p-8 m-8 bg-red-600">Hello</div>
      <div className="p-8">
        <Button label="lets goooooooo" />
      </div>

      <PageClient />
    </div>
  );
}
