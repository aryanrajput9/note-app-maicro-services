const WelcomeBanner = () => {
    return (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-[#FFF9E9] px-6 py-6">

            {/* Decorative Background */}
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#FFF1C8] opacity-70 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between gap-4">

                {/* Left Content */}
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl">
                        Welcome Back! <span>👋</span>
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Keep your thoughts organized with Sun NoteApp
                    </p>

                    {/* Yellow Decorative Line */}
                    <svg
                        width="115"
                        height="14"
                        viewBox="0 0 115 14"
                        className="mt-3"
                        fill="none"
                    >
                        <path
                            d="M2 11C35 -1 75 -2 112 4"
                            stroke="#FFBD00"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Right Content */}
                <div className="relative hidden sm:block">

                    <p className="rotate-[-8deg] font-serif text-xl italic leading-7 text-[#171717]">
                        Write it...
                        <br />
                        Save it...
                        <br />
                        Grow with it...
                    </p>

                    <svg
                        width="90"
                        height="15"
                        viewBox="0 0 90 15"
                        className="mt-2"
                    >
                        <path
                            d="M2 12C30 0 60 0 88 4"
                            stroke="#FFBD00"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>

                </div>

            </div>
        </section>
    );
};

export default WelcomeBanner;