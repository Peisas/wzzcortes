export default function Index() {
  const services = [
    {
      name: "Corte Degradê",
      description: "Moderno e bem finalizado.",
      time: "40 minutos",
    },
    {
      name: "Corte Social",
      description: "Clássico para qualquer ocasião.",
      time: "30 minutos",
    },
    {
      name: "Barba",
      description: "Alinhamento e acabamento profissional.",
      time: "20 minutos",
    },
    {
      name: "Corte + Barba",
      description: "Pacote completo com desconto.",
      time: "50 minutos",
    },
    {
      name: "Nevou",
      description: "Estilo ousado com descoloração.",
      time: "2 horas",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#050b18] to-[#020617] min-h-screen text-white">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#0b2a44]">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="WZ Corte"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold">WZ CORTE</span>
        </div>

        <a
          href="https://wa.me/5584999806570"
          target="_blank"
          className="bg-yellow-400 text-black px-4 py-1 rounded-md font-semibold"
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-[#0b2a44] to-[#071a2d]">
        <h1 className="text-3xl font-bold">
          Estilo que chama <span className="text-yellow-400">atenção</span>
        </h1>

        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Cortes modernos, atendimento de qualidade e visual profissional.
          Agende seu horário agora mesmo.
        </p>

        <a
          href="https://wa.me/5584999806570?text=Olá,%20gostaria%20de%20agendar%20um%20horário."
          target="_blank"
          className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Agendar Corte
        </a>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-[#0b2a44] py-14 px-4">
        <h2 className="text-center text-2xl font-bold text-yellow-400 mb-10">
          Serviços
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const message = `Olá, gostaria de agendar um ${service.name}.
Tempo do atendimento: ${service.time}.`;

            return (
              <div
                key={index}
                className="bg-[#071a2d] p-6 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold text-yellow-400">
                  {service.name}
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  {service.description}
                </p>

                <p className="mt-2 text-sm">⏱️ {service.time}</p>

                <a
                  href={`https://wa.me/5584999806570?text=${encodeURIComponent(
                    message
                  )}`}
                  target="_blank"
                  className="block text-center mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg"
                >
                  Agendar no WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 py-6 text-sm">
        © 2026 · WZ Corte · Todos os direitos reservados
      </footer>
    </div>
  );
                }
