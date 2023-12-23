export default function Footer() {
  return (
    <div className="py-8 bg-[#f2cd87]/30 font-semibold bottom-0  ">
      <footer>
        <div className="flex flex-wrap gap-12 justify-evenly text-xs ">
          <p>&copy; 2023 Asad Siddiqui. All rights reserved.</p>
          <ul>
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
