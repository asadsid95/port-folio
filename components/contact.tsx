import { useState } from "react";

export default function Contact() {
  const [emailInfo, setEmailInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setEmailInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const submittedForm = new FormData(e.target);
    const refinedData = Object.fromEntries(submittedForm.entries());

    const res = await fetch("/api", {
      body: JSON.stringify(emailInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
  }

  return (
    <div className="flex gap-5 justify-center items-start my-4">
      <div className="text-sm lg:text-xl font-bold">
        <p>Contact me!</p>
      </div>
      <form
        className=" flex flex-col justify-between items-end gap-4 "
        onSubmit={handleSubmit}
      >
        <div className="flex gap-3 ">
          <label>Name</label>
          <input
            name="name"
            className="bg-gray-200 rounded-sm"
            value={emailInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3 ">
          <label>Email</label>
          <input
            name="email"
            className="bg-gray-200 rounded-sm"
            value={emailInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-3 ">
          <label>Message</label>
          <input
            name="message"
            className="bg-gray-200 rounded-sm"
            value={emailInfo.message}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-400 rounded-sm p-1">Submit</button>
      </form>
    </div>
  );
}
