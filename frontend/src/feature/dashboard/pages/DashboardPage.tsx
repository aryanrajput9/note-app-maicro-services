import StatsContainer from "../components/StatsContainer";
import WelcomeBanner from "../components/WelcomeBanner";



const DashboardPage = () => {

    return (
        <main className="min-h-screen bg-[#FFFDF8] p-4 sm:p-6">

            <div className="mx-auto max-w-6xl space-y-5">

                {/* Welcome Section */}
                <WelcomeBanner />

                {/* Statistics Section */}
                <StatsContainer />

            </div>

        </main>
    );
};

export default DashboardPage;