import { Card, CardContent } from "@/components/ui/card";
import { Brain, Sparkles, TrendingUp, Target } from "lucide-react";

export const LoadingAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-gradient-card border-border/20 shadow-card">
        <CardContent className="pt-12 pb-12 text-center">
          {/* Animated Brain Icon */}
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Analyzing Your Profile
          </h2>
          
          <p className="text-foreground/70 mb-8">
            Our AI is processing your information to generate personalized career recommendations...
          </p>

          {/* Progress Steps */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">Analyzing your education and skills</span>
            </div>
            
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-primary animate-pulse rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">Matching career opportunities</span>
            </div>
            
            <div className="flex items-center gap-3 text-left opacity-50">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm">Generating learning pathways</span>
            </div>
          </div>

          {/* Loading Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div className="bg-gradient-primary h-2 rounded-full w-2/3 transition-all duration-1000"></div>
          </div>
          
          <p className="text-xs text-muted-foreground">
            This usually takes 10-15 seconds
          </p>
        </CardContent>
      </Card>
    </div>
  );
};