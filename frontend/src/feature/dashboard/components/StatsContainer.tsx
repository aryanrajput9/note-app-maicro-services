import { FileText, Heart, Trash2 } from "lucide-react";
import StatCard from "./StatCard";



const StatsContainer = () => {

    const stats = [
        {
            id: 1,
            title: "Total Notes",
            count: 12,
            icon: FileText,
            color: "bg-amber-100 text-amber-500",
        },

        {
            id: 2,
            title: "Favorites",
            count: 3,
            icon: Heart,
            color: "bg-rose-100 text-rose-500",
        },

        {
            id: 3,
            title: "In Trash",
            count: 2,
            icon: Trash2,
            color: "bg-purple-100 text-purple-500",
        },
    ];

    return (
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {stats.map((stat) => (
                <StatCard
                    key={stat.id}
                    title={stat.title}
                    count={stat.count}
                    icon={stat.icon}
                    color={stat.color}
                />
            ))}

        </section>
    );
};

export default StatsContainer;