import { clients, features, statuses } from '@/data/clients'

export function Raw() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Raw Info Table
      </h2>

      {clients.map((client) => (
        <>
          <h3 className="text-xl font-bold">{client.name}</h3>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                        Feature
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                        Status
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                        Docs
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border">
                        Issue
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {features.map((feature) => {
                      const f = client.features.find((f) => f.name === feature)
                      return (
                        <tr key={`raw-${client.name}-${feature}`}>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                          >
                            {feature}
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                          >
                            {statuses[f?.status || 'unknown']}
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                          >
                            {f?.docs ? <a href={f.docs}>Docs</a> : null}
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border"
                          >
                            {f?.issue ? <a href={`${client.github}/issues/${f.issue}`}>#{f.issue}</a> : null}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}
