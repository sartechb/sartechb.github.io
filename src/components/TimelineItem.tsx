import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateRange } from "@/lib/date-utils";
import {
  BriefcaseIcon,
  CalendarIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location: {
    city: string;
    state: string;
  };
  duration: {
    start: string;
    end: string;
  };
  description: string;
  iconType: "work" | "education";
  isLast?: boolean;
  isCurrent?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  location,
  duration,
  description,
  iconType,
  isLast = false,
  isCurrent = false,
}: TimelineItemProps) {
  const icon =
    iconType === "work" ? (
      <BriefcaseIcon size={24} />
    ) : (
      <GraduationCapIcon size={24} />
    );

  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline line and icon */}
      <div className="relative flex flex-col items-center">
        {/* Icon circle */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
            isCurrent
              ? "border-primary bg-primary text-white animate-pulse"
              : "border-border bg-background"
          }`}
        >
          {icon}
        </div>

        {/* Vertical line */}
        {!isLast && <div className="absolute top-12 h-full w-0.5 bg-border" />}
      </div>

      {/* Content card */}
      <div className="flex-1">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">{subtitle}</div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={16} />
                    <span>{formatDateRange(duration.start, duration.end)}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPinIcon size={16} />
                    <span>
                      {location.city}, {location.state}
                    </span>
                  </div>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
