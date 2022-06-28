import Container from "./container";

const InfoBoxRow = () => {
  return (
    <section className="mb-12 py-8">
      <Container>
        <div className="flex flex-col items-center md:justify-between md:flex-row mx-auto">
          <div className="flex flex-col px-4 mb-12 md:mb-0">
            <h2 className="mb-2 text-xl">Tittel på denne boksen</h2>
            <p className="text-slate-700">Tekst som sier hvor kule vi er</p>
          </div>
          <div className="flex flex-col px-4 mb-12 md:mb-0">
            <h2 className="mb-2 text-xl">Tittel på denne boksen</h2>
            <p className="text-slate-700">Tekst som sier hvor kule vi er</p>
          </div>
          <div className="flex flex-col px-4 mb-12 md:mb-0">
            <h2 className="mb-2 text-xl">Tittel på denne boksen</h2>
            <p className="text-slate-700">Tekst som sier hvor kule vi er</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InfoBoxRow;
