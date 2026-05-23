import { IconType } from "react-icons";

type SkillCardProps = {
    name: string;
    icon: IconType;
};

export default function SkillCard({
    name,
    icon: Icon,
}: SkillCardProps) {
    return (
        <div className="group rounded-3xl border border-black/10 bg-black/2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/4 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5">
            <div className="flex flex-col items-center gap-5">
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-emerald-600">
                    <Icon className="text-3xl text-black" />
                </div>

                <div>
                    <h3 className="font-medium tracking-tight">
                        {name}
                    </h3>
                </div>
            </div>
        </div>
    );
}