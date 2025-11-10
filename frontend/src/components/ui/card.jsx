const PersonCard = ({ person }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-56 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-56 flex items-center justify-center bg-gray-100 rounded-t-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center px-2">
            {person.name}
          </h2>
        </div>
      )}

      <div className="p-4 flex-grow">
        {/* For Alumni, if there's no image, the name is shown big above */}
        {person.image && (
          <h2 className="text-xl font-semibold text-gray-900">
            {person.name}
          </h2>
        )}

        {person.contribution && (
            <p className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Contribution to group: </span>
                {person.contribution}
            </p>
        )}

        {person.title && (
          <p className="text-sm text-gray-700 mt-1">{person.title}</p>
        )}

        {person.description && (
          <p className="text-sm text-gray-600 mt-2">{person.description}</p>
        )}

        {person.coSupervisor && (
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Co-supervisor: </span>
            {person.coSupervisor}
          </p>
        )}

        {person.current && (
            // <p className="text-sm text-gray-600 mt-2">
            //     {person.current}
            // </p>
            <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Currently-At: </span>
            {person.current}
          </p>
        )}


        {person.currentAffiliation && (
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Current Affiliation: </span>
            {person.currentAffiliation}
          </p>
        )}

        {person.sponsor && (
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Sponsored by: </span>
            {person.sponsor}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;