
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Video, ExternalLink } from "lucide-react";
import { ProcessStage as ProcessStageType } from "@/data/hiringData";

interface ProcessStageProps {
  stage: ProcessStageType;
  stageNumber: number;
}

const ProcessStage = ({ stage, stageNumber }: ProcessStageProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {stageNumber}
            </span>
            {stage.stageName}
          </CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {stage.expectedDuration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{stage.description}</p>
        
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Format:</span>
          <span className="text-sm">{stage.format}</span>
        </div>

        {stage.techTask && (
          <div className="bg-muted/50 p-4 rounded-lg space-y-3">
            <h4 className="font-semibold text-primary">Technical Task Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium">Task:</span> {stage.techTask.taskName}
              </div>
              <div>
                <span className="font-medium">Platform:</span> {stage.techTask.platform}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {stage.techTask.duration}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{stage.techTask.description}</p>
            {stage.techTask.link && (
              <Button variant="outline" size="sm" asChild>
                <a 
                  href={stage.techTask.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Challenge <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProcessStage;
