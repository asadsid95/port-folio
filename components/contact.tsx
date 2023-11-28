export default function Contact() {
  return (
    <div className="flex gap-5 justify-center items-start my-4">
      <div className="text-sm lg:text-xl font-bold">
        <p>Contact me!</p>
      </div>
      <form className=" flex flex-col justify-between items-end gap-4 ">
        <div className="flex gap-3 ">
          <label>Name</label>
          <input name="name" className="bg-gray-200 rounded-sm"></input>
        </div>
        <div className="flex gap-3 ">
          <label>Email</label>
          <input name="email" className="bg-gray-200 rounded-sm"></input>
        </div>
        <div className="flex gap-3 ">
          <label>Message</label>
          <input name="message" className="bg-gray-200 rounded-sm"></input>
        </div>
        <button className="bg-blue-400 rounded-sm p-1">Submit</button>
      </form>
    </div>
  );
}
