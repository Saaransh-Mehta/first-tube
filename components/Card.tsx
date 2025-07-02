'use client'
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, CreditCard, DollarSign } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const FeaturesCard = () => {

  const {scrollYProgress} = useScroll();

  const opacityControl = useTransform(scrollYProgress,[0,0.5,1],[0,1,0])

  const features = [
    {
      id: 1,
      title: "Free and Open source ",
      description: "Providing free and open source education to the students around the globe",
      icon: User,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-700"
    },
    {
      id: 2,
      title: "Value",
      description: "Providing value and assured content to the students and creators",
      icon: CreditCard,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-700"
    },
    {
      id: 3,
      title: "Payments",
      description: "Easy payment method with integration of stripe and other payment gateways.",
      icon: DollarSign,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-700"
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
            <Card key={feature.id} className="border-0 h-[300px] shadow-sm  bg-gray-50 hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    feature.bgColor
                  )}>
                    <IconComponent className={cn("w-6 h-6", feature.iconColor)} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
