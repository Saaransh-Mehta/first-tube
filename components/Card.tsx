'use client'
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UploadCloud, Wand2, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

const FeaturesCard = () => {

  const features = [
    {
      id: 1,
      title: "Seamless Uploads",
      description: "Fast and reliable video hosting. Upload your content effortlessly and manage it all in one place.",
      icon: UploadCloud,
      bgColor: "bg-blue-100 dark:bg-blue-900/40",
      iconColor: "text-blue-700 dark:text-blue-400"
    },
    {
      id: 2,
      title: "AI Script Generation",
      description: "Writer's block? Let our advanced AI generate engaging, structured video scripts in seconds.",
      icon: Wand2,
      bgColor: "bg-purple-100 dark:bg-purple-900/40",
      iconColor: "text-purple-700 dark:text-purple-400"
    },
    {
      id: 3,
      title: "Immersive Viewing",
      description: "Enjoy a YouTube-like watching experience with a dynamic, highly responsive player.",
      icon: PlayCircle,
      bgColor: "bg-pink-100 dark:bg-pink-900/40",
      iconColor: "text-pink-700 dark:text-pink-400"
    }
  ];

  return (
    <motion.div
    initial={{  y: 20 }}
    animate={{ y: 0 }}
    
    className="w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card key={feature.id} className="border border-neutral-200 dark:border-neutral-800 h-[300px] shadow-lg bg-white/50 backdrop-blur-xl dark:bg-neutral-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    feature.bgColor
                  )}>
                    <IconComponent className={cn("w-6 h-6", feature.iconColor)} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
