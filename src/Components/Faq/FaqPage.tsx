import FaqItem from "./FaqDataHandler";
import { FaqCardData } from '../../data';
import FaqQuestion from './FaqQuestion'
interface Props {
  faqs: any,
}

const Faq = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-[7rem]">
            <h2 className="text-themeColor font-bold text-4xl sm:text-6xl mb-2 text-left sm:mb-10">
        FAQ
      </h2>
      <FaqItem faqs={props.faqs}/>
    </div>
  );
};

export default Faq;
