export default function Footer() {
  return (
    <div className="py-10 bg-[#f2cd87]/30 font-semibold">
      <footer>
        <div className="flex flex-wrap gap-12 justify-evenly text-xs bottom-0 ">
          <p>&copy; 2023 Asad Siddiqui. All rights reserved.</p>
          <ul>
            {/* <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li> */}
            <li className="hover:underline text-black/60 ">
              <a href="mailto:asads@hey.com?subject=Inquiry&body=Hello Asad, we should connect!">
                Let's get in touch
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
