const GetInvolvedCard = ({ plan, price, description, priceStyling, textList, buttonText, buttonStyling }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-10 pt-20  pb-20">
      <h2 className="text-2xl font-bold mb-2">{plan}</h2>
      <p className={`${priceStyling} pb-5`}>{price}</p>
      <p className="font-bold">{description}</p>
      <ul className="list-disc pl-3 pt-3">
        {textList.map((text, index) => (
          <li key={index}> {text}</li>
        ))}
      </ul>
      <button className={`${buttonStyling} mt-10`}>{buttonText}</button>
    </div>
  );
};

export default GetInvolvedCard;