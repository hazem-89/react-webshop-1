const FaqCard = (props: {
  id: number;
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mr-4">
      <a href="#" className="flex justify-center item-center">
        <img
          className="w-[100%]"
          src={props.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-themeColor focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FaqCard;
