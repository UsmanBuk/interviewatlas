
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { HiringEntry } from "@/data/hiringData";

interface CompanyCardProps {
  entry: HiringEntry;
}

const CompanyCard = ({ entry }: CompanyCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{entry.company}</CardTitle>
            <CardDescription className="text-lg font-medium text-foreground">
              {entry.role}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {entry.process.length} stages
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3">{entry.overview}</p>
        <Button asChild className="w-full">
          <Link to={`/company/${entry.id}`} className="flex items-center gap-2">
            View Hiring Process <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
