const SpotLightCard = ({ href, image, title, description, ctaText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src={image} alt={title} className="w-full mb-4 rounded-lg" />
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <Link href={href}>
        <a className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 block mt-4">
          {ctaText}
        </a>
      </Link>
    </div>
  );
};

export default SpotLightCard;
