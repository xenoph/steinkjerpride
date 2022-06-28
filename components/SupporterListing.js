import Container from "./container";

const SupporterListing = ({ supporters }) => {
  console.log(supporters[0].fields);
  return (
    <section className="py-8">
      <Container>
        <div className="border-y-2 border-gray-400 flex flex-row flex-wrap justify-evenly items-center px-4">
          <p className="p-4">Rød Tråd</p>
          <p className="p-4">Steinkjer Kino</p>
          <p className="p-4">Steinkjer Kommune</p>
          <p className="p-4">Osteloffene</p>
          <p className="p-4">Felleskjøpet</p>
          <p className="p-4">KG 33</p>
        </div>
      </Container>
    </section>
  );
};

export default SupporterListing;
