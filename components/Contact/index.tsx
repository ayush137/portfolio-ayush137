import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import addData from "@/service/addData";

const Contact = () => {
  const initialState = { email: "", subject: "", message: "" };
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await addData("enquiries", data?.email, data);
    setLoading(false);
  };

  return (
    <section id="contact" className="mt-[50px] w-full">
      <h2
        className="lexend text-[30px] mb-6 text-white capitalize w-fit m-auto"
        data-aos="fade-up"
      >
        Contact for Code Adventures
      </h2>
      <p className="mb-8 hidden sm:block font-light text-center text-gray-300 sm:text-xl">
        Ready to embark on a coding journey? Have a project in mind? Let&apos;s
        explore the possibilities together. How can I assist you?
      </p>
      <div className={`${styles["card-layout"]}  p-[20px] mb-[30px]`}>
        <div className="flex justify-between w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-8  min-w-[100%] md:min-w-[40vw]"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-[#40E0D0]">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm  border   text-sm rounded-lg block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 border-primary-500 shadow-sm-light"
                placeholder="name@mail.com"
                required
                value={data?.email}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, email: e?.target?.value || "" };
                  });
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-[#40E0D0]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={data?.subject}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, subject: e?.target?.value || "" };
                  });
                }}
                className="shadow-sm  border   text-sm rounded-lg block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 border-primary-500 shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-[#40E0D0]">
                Your message
              </label>
              <textarea
                id="message"
                value={data?.message}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, message: e?.target?.value || "" };
                  });
                }}
                rows={6}
                className="shadow-sm  border   text-sm rounded-lg block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 border-primary-500 shadow-sm-light"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className={`py-3 rounded-sm ${
                !loading
                  ? "bg-[#288c82] px-5"
                  : "bg-[#215e58] w-[141.39px] h-[48px] pl-[3.8rem]"
              } hover:bg-[#215e58]`}
            >
              {loading ? (
                <span className={` block ${styles["loader"]}`} />
              ) : (
                "Send message"
              )}
            </button>
          </form>
          <div className="w-[2px] bg-gray-500 hidden md:block" />
          <div className="w-[400px] relative hidden md:block ">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-ab-4acfd.appspot.com/o/assets%2FIMG20230923112831.jpg?alt=media&token=210e327a-63a9-4d68-92fb-2882bcf2cd1f&_gl=1*7dq04u*_ga*OTk5ODIzNTIwLjE2OTQzMzk4MzM.*_ga_CW55HF8NVT*MTY5Njc2NDU5NS43LjEuMTY5Njc2NjY0MC4zOC4wLjA."
              }
              className="object-cover"
              alt="ayush-bhadoriya"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
