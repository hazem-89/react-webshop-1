import { FaqCardData } from '../../data';
import FaqCard from './FaqCard'

interface Props {
  faqs: FaqCardData[],
}

const FaqItem = (props: Props) => {  
  const Faqs = props.faqs; 

  const FaqList = Faqs.map(Faqs => (
            <FaqCard
            key={Faqs.id}
              id={Faqs.id}
              title={Faqs.title}
              desc={Faqs.desc}
              image={Faqs.image}
            />
  ));

  return(
    <div className="flex flex-col m-auto justify-center flex-grow-1 sm:flex-row mb-4">
                {FaqList}
    </div>
  );
}

export default FaqItem;
