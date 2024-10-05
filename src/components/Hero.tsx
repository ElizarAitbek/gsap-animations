import { FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex h-[110vh] flex-col items-center justify-center bg-gray-100 font-spaceGrotesk text-2xl">
      <h1 className="mb-6 text-6xl font-bold capitalize sm:text-6xl">
        Let's connect
      </h1>

      <div className="relative mb-6">
        <iframe
          src="https://giphy.com/embed/cXblnKXr2BQOaYnTni"
          width="480"
          height="398"
          className="pointer-events-none aspect-square rounded-lg shadow-lg"
        ></iframe>
      </div>

      <nav className="mt-8 flex flex-col items-center space-y-4">
        <a
          href="https://www.linkedin.com/in/elizar-aitbek"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 transition duration-300 hover:text-blue-700 hover:underline"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://t.me/elizaraitbek"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 transition duration-300 hover:text-blue-700 hover:underline"
        >
          <FaTelegram size={24} />
          <span>Telegram</span>
        </a>

        <a
          href="mailto:elizar.aitbek@gmail.com"
          className="flex cursor-pointer items-center space-x-2 text-gray-700 transition duration-300 hover:text-gray-900 hover:underline"
        >
          <FaEnvelope size={24} />
          <span>elizar.aitbek@gmail.com</span>
        </a>
      </nav>
    </div>
  );
}
