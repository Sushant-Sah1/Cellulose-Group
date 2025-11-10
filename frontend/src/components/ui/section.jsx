import PersonCard from "./card";

const Section = ({ title, people }) => {
  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      <div className="border-b-2 border-gray-300 mb-6"></div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Section;