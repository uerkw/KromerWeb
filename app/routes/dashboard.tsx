import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "KromerWeb Dashboard" },
    { name: "description", content: "Your Kromer wallet dashboard" },
  ];
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <header className="navbar bg-base-200 border-b border-base-300">
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary w-8 h-8 text-center place-content-center">
              <span>K</span>
            </div>
            <span className="text-xl font-bold">KromerWeb</span>
          </div>
        </div>

        <div className="navbar-center">
          <div className="flex gap-2">
            <button className="btn btn-primary">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send
            </button>
            <button className="btn btn-secondary">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v14m7-7l-7 7-7-7"
                />
              </svg>
              Request
            </button>
          </div>
        </div>

        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button className="btn btn-ghost btn-circle ml-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-base-200 border-r border-base-300">
          <div className="p-4">
            {/* Total Balance */}
            <div className="card bg-base-100 shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="card-title text-sm">TOTAL BAL</h3>
                <div className="text-2xl font-bold">
                  <span className="text-primary">K</span> 0 KRO
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="menu menu-compact">
              <li>
                <a className="active">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Wallets
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Address
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Transactions
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  My Names
                </a>
              </li>
            </ul>

            <div className="divider"></div>

            <ul className="menu menu-compact">
              <li>
                <a>All Transactions</a>
              </li>
              <li>
                <a>All Names</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wallets Section */}
            <div className="lg:col-span-2">
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="card-title">Wallets</h2>
                    <button className="btn btn-primary btn-sm">
                      Add wallets
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                      <thead>
                        <tr>
                          <th>Total Balance</th>
                          <th>Names</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="text-primary font-bold">K</span> 0
                            KRO
                          </td>
                          <td>No Names</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Server MOTD */}
              <div className="card bg-base-200 shadow-sm mt-6">
                <div className="card-body">
                  <h3 className="card-title">Server MOTD</h3>
                  <p className="text-lg">Kromer is legit & cool!</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Transactions */}
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Transactions</h3>
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center text-base-content/60">
                      <div className="w-16 h-16 bg-base-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <p>NO DATA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip of the Day */}
              <div className="card bg-primary text-primary-content shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">TIP OF THE DAY</h3>
                  <p className="text-sm">
                    You can use nearly the same API as Krist for Kromer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
