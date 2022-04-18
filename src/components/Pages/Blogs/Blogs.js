import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <div>
        <h2 className="text-primary">
          ১ নং প্রশ্ন : Authentication আর Authorization এর মধ্যে পার্থক্য কি ?
        </h2>
        <h4>
          Authentication হলো কে ওয়েবসাইটে ঢুকতেছে তাকে যাচাই করা ,
          <br />
          আর Authorization হলো কোনো ওয়েবসাইটের কাছে অনুমতি চাওয়া যে অমুক ব্যক্তি
          কে এক্সেস দেয়া হবে কিনা ওই ওয়েবসাইটের মাধ্যমে ।
        </h4>
      </div>

      <div className="mt-5">
        <h2 className="text-primary">
          ২ নং প্রশ্ন : firebase কেনো ব্যবহার করা হয় ? এবং তা বাদে আর কি কি
          পদ্ধতি রয়েছে authentication ইমপ্লিমেন্ট করার ?
        </h2>
        <h4>
          এটা ইউজ করার কারন হলো এর মাধ্যমে ক্লায়েন্ট সাইডের ডাটা বেজ থেকে সরাসরি
          ডাটা এনে ব্যবহার করা যায়। এটার মধ্যমে লগিন এযাবতীয় কাজ করা হয় , আমরা
          Firebase ইউজ করি কারর তা অন্যন্য সকল মাধ্যম থেকে উত্তম সেই কারনে
        </h4>
        <h4 className="mt-5 ">
          <span># Google Authenticator</span>
          <br />
          <span># LastPass Authenticator</span>
          <br />
          <span># Microsoft Authenticator</span>
          <br />
          <span># Twilio Authy</span>
          <br />
          <span># WinAuth</span>

          <br />

          <span>Etc authentication provider</span>
        </h4>

        <h2 className="mt-5 text-primary">
          ৩নং প্রশ্ন ঃ  Firebase Authentication ছাড়া আর কি কি সার্ভিস প্রদান করে ?
        </h2>
        <h4>Firebsae authentication ছাড়া এর মাধ্যমে ক্লায়েন্ট সাইডের ডাটা বেজ থেকে সরাসরি
          ডাটা এনে ব্যবহার করা যায়। লাইভ সার্ভার এ কোড হস্ট করা যায়। ইত্যাদি ইত্যাদি কাজ করা যায় । </h4>
      </div>
    </div>
  );
};

export default Blogs;
