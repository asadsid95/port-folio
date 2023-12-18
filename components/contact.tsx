import { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  gap-5 justify-center lg:items-start m-4 ">
        <div className="text-lg lg:text-4xl font-bold text-center">
          <p>Let's connect</p>
        </div>

        <div>
          <InlineWidget
            url="https://calendly.com/asadsid95/15min?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{ height: "600px" }}
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </div>
      </div>
    </>
  );
}
