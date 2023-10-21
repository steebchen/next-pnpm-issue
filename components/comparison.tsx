import { clients, features, statuses } from '@/data/clients'

export function Comparison() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">
        Feature Comparison Table
      </h2>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                    Feature
                  </th>
                  {clients.map((client) => (
                    <th key={client.name} className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                      {client.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature) => (
                  <tr key={`tr-${feature}`}>
                    <td
                      className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                    >{feature}</td>
                    {clients.map((client) => {
                      const f = client.features.find((f) => f.name === feature)
                      return (
                        <td
                          key={`${client.name}-${feature}`}
                          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                        >
                          {statuses[f?.status || 'unknown']}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
