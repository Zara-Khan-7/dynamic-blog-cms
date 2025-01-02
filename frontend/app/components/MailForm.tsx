/* eslint-disable @next/next/no-sync-scripts */
"use client";
import React, { useState, useEffect } from "react";

const MailchimpForm: React.FC = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us13.list-manage.com/subscribe/post?u=e28cc13196802c8c4214202ab&amp;id=5024618945&amp;f_id=00b8b1e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll" className="py-16">
            <div className="gap-4 mb-4">
              <div className="mc-field-group">
                <h1 className="mb-5 pb-4 text-center font-bold text-3xl">
                  Subscribe to My Newsletter
                </h1>
                <h3 className="text-lg pb-5">
                  Receive inspiring articles and other exclusive content.{" "}
                  <br />
                  You&apos;ll never receive any spam and can always unsubscribe.
                </h3>
                <label htmlFor="mce-EMAIL" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email py-3 px-4 outline-none w-96 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 mr-2"
                  id="mce-EMAIL"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_efc91b873cd732a78331f7746_b4984a8359"
                  tabIndex={-1}
                  // value=""
                />
              </div>
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button transition duration-500 ease hover:bg-indigo-900 inline-block bg-purple-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailchimpForm;
