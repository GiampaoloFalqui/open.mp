import React from "react";
import Head from "next/head";
import Link from "next/link";

import { HeadContent } from "../components/HeadContent";
import Wordmark from "../components/icons/Wordmark";
import Discord from "../components/icons/Discord";
import Forum from "../components/icons/Forum";

const Index = () => (
  <div className="container">
    <HeadContent />

    <main>
      <header className="header">
        <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
      </header>
      <section className="content">
        <h1>Open Multiplayer</h1>
        <p>
          An upcoming multiplayer mod for <em>Grand Theft Auto: San Andreas</em> that will be fully backwards compatible
          with the existing multiplayer mod <em>San Andreas Multiplayer.</em>
        </p>
        <br />
        <p>
          This means <strong>the existing SA:MP client and all existing SA:MP scripts will work with open.mp</strong>{" "}
          and, in addition to this, many bugs will also be fixed within the server software without the need for hacks
          and workarounds.
        </p>
        <p>
          If you're wondering when the public release is planned or how you can help contribute to the project, please
          see <a href="https://www.burgershot.gg/showthread.php?tid=99">this forum thread</a> for more information.
        </p>
        <h1><a href="/faq">FAQ</a></h1>
        <hr />
        <p>
          <span className="icon">
            <a href="https://discordapp.com/invite/hURGKHJ">
              <Discord />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.burgershot.gg">
              <Forum />
            </a>
          </span>
        </p>
      </section>
      <section className="questions">
        <h2 className="title">Frequently Asked Questions</h2>
        <ol>
          <li><Link href="#what-differences-there-will-be"><a>What differences there will be?</a></Link></li>
          <li><Link href="#when-will-it-be-released"><a>When will it be released?</a></Link></li>
        </ol>
        <hr />
        <section className="answers">
          <ul>
            <li>
              <a id="what-differences-there-will-be">
                <h3>What differences there will be?</h3>
              </a>
              <p>Text</p>
            </li>
            <li>
              <a id="when-will-it-be-released">
                <h3>When will it be released?</h3>
              </a>
              <p>Text</p>
            </li>
          </ul>
        </section>
      </section>
    </main>
  </div>
);

export default Index;
