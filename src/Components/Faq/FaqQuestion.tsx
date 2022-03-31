const FaqQuestion = () => {
    return (
        <div>
<div className="max-w-2xl mx-auto bg-white p-16 rounded">

	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button type="button" className="flex items-center focus:ring-4 focus:ring-gray-200 justify-between p-5 w-full font-medium text-left border border-gray-200 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>When can I expect my shoes to be delivered?</span>
      <svg data-accordion-icon="" className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
			<div className="p-5 border border-gray-200 border-b-0">
				<p className="mb-2 text-gray-500 dark:text-gray-400">As we want you to have the best experience possible we ship within 1-3 business days (locally) and 7-14 business days worldwide.</p>
			</div>
		</div>
		<h2 id="accordion-collapse-heading-2">
			<button type="button" className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>My shoes doesn't fit! Can I return them for free?</span>
      <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
			<div className="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
				<p className="mb-2 text-gray-500 dark:text-gray-400">No need to worry, we have partnered up with different parcel companies to make returns free and easy, no one likes uncomfortable shoes!</p>
			</div>
		</div>
		<h2 id="accordion-collapse-heading-3">
			<button type="button" className="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>I found the same pair of shoes cheaper somewhere else!</span>
      <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
		</h2>
		<div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
				<p className="mb-2 text-gray-500 dark:text-gray-400">Our main focus is to become the best shoes reseller in the market so if you found a better deal send us an email at <a href="mailto:hello@shoes.com" className="text-blue-600 dark:text-blue-500 hover:underline">hello@shoes.com</a> and we will give you a discount!</p>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default FaqQuestion;