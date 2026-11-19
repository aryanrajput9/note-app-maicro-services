import type { ComponentType } from "react";

type StatCardProps = {
    title: string;
    count: number;
    icon: ComponentType<{ size?: number; strokeWidth?: number }>;
    color: string;
};

const StatCard = ({ title, count, icon: Icon, color }: StatCardProps) => {

    return (
        <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-4">

            {/* Icon */}
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
                <Icon size={25} strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div>
                <h3 className="text-2xl font-bold text-[#171717]">
                    {count}
                </h3>

                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                    {title}
                </p>
            </div>

        </div>
    );
};

export default StatCard;