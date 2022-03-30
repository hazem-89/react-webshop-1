export default function Contact() {
  return (
    <div className="flex flex-col justify-center text-center mt-24">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div>
        <p className="mt-10 p-6 text-xl border text-white m-5 bg-gray-800 rounded-lg text-center shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed
          numquam accusantium ad sunt voluptate quidem minus labore delectus rem
          eos voluptatibus earum necessitatibus, mollitia eius quam nam nobis
          tenetur!
        </p>
      </div>
      <label
        htmlFor="email-adress-icon"
        className="block  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your Email
      </label>
      <div className="relative m-4 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 hover:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-adress-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@shoe.com"
        />
      </div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-90"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 m-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
      ></textarea>
      <fieldset className="m-4">
        <legend className="sr-only">Checkbox variants</legend>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-1"
            aria-describedby="checkbox-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked
          />
          <label
            htmlFor="checkbox-1"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline hover:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-2"
            aria-describedby="checkbox-2"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-2"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I want to get promotional offers
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-3"
            aria-describedby="checkbox-3"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-3"
            className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I am 18 years or older
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="international-shipping-disabled"
            aria-describedby="international-shipping-disabled"
            type="checkbox"
            className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            disabled
          />
          <label
            htmlFor="international-shipping-disabled"
            className="ml-3 text-sm font-medium text-gray-300 dark:text-gray-500"
          >
            Eligible for international shipping (disabled)
          </label>
        </div>
      </fieldset>
      <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 m-4">
        <button
          className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="small-modal"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
