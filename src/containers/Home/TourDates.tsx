const EVENTS = [
  {
    name: "Bloco Macaúba",
    city: "Patos de Minas - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Patos de Minas - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Patos de Minas - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Patrocínio - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Uberlândia - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Carmo do Paranaíba- MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
  {
    name: "Bloco Macaúba",
    city: "Patos de Minas - MG",
    ticket: "http://ingressolive.com.br/",
    date: new Date(),
  },
]

export default function TourDatesContainer() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-800 to-black min-h[50]" id="about">
      <div className="container">
        <h1 className="text-white uppercase text-4xl text-center font-semibold">
          Agenda
        </h1>

        <div className="relative overflow-x-auto sm:rounded-lg my-10 max-w-5xl mx-auto">
          <table className="w-full text-white">
            <tbody className="border-t">
              {EVENTS.length ? EVENTS.map((event) => (
                <tr key={event.name} className="border-b flex-1 flex items-center justify-around">
                  <td className="px-6 py-4 text-left flex-1">
                    <p className="font-bold whitespace">
                      {event.date.toLocaleDateString("pt-BR", {
                      year: 'numeric', month: 'short', day: '2-digit'
                      })}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center flex-1">
                    <p className="font-light whitespace">
                      {event.name}
                    </p>
                    <p className="italic text-gray-300">
                      {event.city}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right flex-1">
                    <a href={event.ticket} className="font-medium p-3 bg-white  hover:bg-gray-800 text-black hover:text-white">
                      Tickets
                    </a>
                  </td>
                </tr>
              )) : (
                <tr className="border-b flex-1 flex items-center justify-around">
                  <td colSpan={1} className="px-6 py-4 text-left flex-1">
                    <p className="font-bold whitespace">
                        Infelizmente, não encontramos nenhuma agenda de shows disponível para este momento.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>




      </div>
    </section>
  )
}