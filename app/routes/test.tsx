import Layout from "~/components/Layout";

export default function TestPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full p-2 md:p-4 gap-2 md:gap-4">
        {/* Grid Container - responsive: single column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-4 h-auto lg:h-[calc(100vh-12rem)]">
          {/* Left Column - 60% width on desktop, full width on mobile */}
          <div className="lg:col-span-3 flex flex-col gap-2 md:gap-4">
            {/* Top Left Card */}
            <div className="card bg-base-200 shadow-lg h-32 md:h-40 lg:h-1/2">
              <div className="card-body p-2 md:p-4">
                <h2 className="card-title text-sm md:text-lg">Wallets Overview</h2>
                <p className="text-xs md:text-sm">This section will display wallet information and balances.</p>
                <div className="card-actions justify-end mt-1 md:mt-2">
                  <button className="btn btn-primary btn-xs md:btn-sm">View Details</button>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="card bg-base-200 shadow-lg h-32 md:h-40 lg:h-1/2">
              <div className="card-body p-2 md:p-4">
                <h2 className="card-title text-sm md:text-lg">Recent Transactions</h2>
                <p className="text-xs md:text-sm">Transaction history and recent activity will be shown here.</p>
                <div className="card-actions justify-end mt-1 md:mt-2">
                  <button className="btn btn-secondary btn-xs md:btn-sm">View All</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% width on desktop, full width on mobile */}
          <div className="lg:col-span-2 flex flex-col gap-2 md:gap-4">
            {/* Top Right Card */}
            <div className="card bg-base-200 shadow-lg h-32 md:h-40 lg:h-1/2">
              <div className="card-body p-2 md:p-4">
                <h2 className="card-title text-sm md:text-lg">Quick Actions</h2>
                <p className="text-xs md:text-sm">Send and receive actions will be available here.</p>
                <div className="card-actions justify-center mt-1 md:mt-2">
                  <button className="btn btn-accent btn-xs md:btn-sm">Send</button>
                  <button className="btn btn-accent btn-outline btn-xs md:btn-sm">Receive</button>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="card bg-base-200 shadow-lg h-32 md:h-40 lg:h-1/2">
              <div className="card-body p-2 md:p-4">
                <h2 className="card-title text-sm md:text-lg">Statistics</h2>
                <p className="text-xs md:text-sm">Charts and statistics will be displayed in this section.</p>
                <div className="stats stats-vertical w-full mt-1 md:mt-2">
                  <div className="stat p-1 md:p-2">
                    <div className="stat-title text-xs">Total Balance</div>
                    <div className="stat-value text-primary text-sm md:text-lg">0 KRO</div>
                  </div>
                  <div className="stat p-1 md:p-2">
                    <div className="stat-title text-xs">Transactions</div>
                    <div className="stat-value text-secondary text-sm md:text-lg">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
