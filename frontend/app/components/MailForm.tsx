/* eslint-disable @next/next/no-sync-scripts */
"use client";
import React from "react";

const MailchimpForm: React.FC = () => {
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
            <div className="gap-4 mb-4 ">
              <div className="mc-field-group">
                <h1 className=" mb-5  pb-4  text-center font-bold text-3xl">
                  Subscribe to My Newsletter
                </h1>
                <h3 className="text-lg pb-5">
                  Receive inspiring articles and other exclusive content from
                  myself. <br />
                  You&apos;ll never receive any spam and can always unsubscribe.{" "}
                </h3>
                {/* <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label> */}
                <input
                  type="email"
                  name="EMAIL"
                  className="required email py-3 px-4 outline-none w-96 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 mr-2"
                  id="mce-EMAIL"
                  required={true}
                  value=""
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
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <input
                  type="text"
                  name="b_efc91b873cd732a78331f7746_b4984a8359"
                  tabIndex={-1}
                  value=""
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
      <script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        type="text/javascript"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: ` 
            (function($) {
              window.fnames = new Array(); window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `,
        }}
      />
    </>
  );
};

export default MailchimpForm;