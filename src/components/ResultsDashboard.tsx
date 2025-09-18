import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  BookOpen, 
  Users, 
  DollarSign, 
  Clock,
  Star,
  ArrowRight,
  RefreshCw
} from "lucide-react";

interface CareerRecommendation {
  title: string;
  match: number;
  description: string;
  skills: string[];
  salary: string;
  growth: string;
  requirements: string[];
}

interface SkillGap {
  skill: string;
  current: number;
  required: number;
  priority: "high" | "medium" | "low";
}

interface ResultsData {
  careerRecommendations: CareerRecommendation[];
  skillGaps: SkillGap[];
  learningPaths: string[];
  summary: string;
}

interface ResultsDashboardProps {
  results: ResultsData;
  onStartOver: () => void;
}

export const ResultsDashboard = ({ results, onStartOver }: ResultsDashboardProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Analysis Complete</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Your Personalized Career Report
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Based on your education, skills, and interests, here are the career paths that match your profile.
          </p>
        </div>

        {/* Summary Card */}
        <Card className="mb-8 bg-gradient-card border-border/20 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Career Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 leading-relaxed">{results.summary}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Career Recommendations */}
          <div className="xl:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              Top Career Matches
            </h2>
            
            {results.careerRecommendations.map((career, index) => (
              <Card key={index} className="bg-gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-primary-glow">{career.title}</CardTitle>
                      <CardDescription className="mt-2">{career.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success mb-1">{career.match}%</div>
                      <div className="text-sm text-muted-foreground">Match</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-success" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Salary:</span> {career.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Growth:</span> {career.growth}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-warning" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Entry Level</span>
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      {career.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Learn More About This Career
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar with Skills and Learning */}
          <div className="space-y-6">
            {/* Skill Gaps */}
            <Card className="bg-gradient-card border-border/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-warning" />
                  Skill Development
                </CardTitle>
                <CardDescription>
                  Areas to focus on for your target careers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.skillGaps.map((gap, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{gap.skill}</span>
                      <Badge variant={getPriorityBadgeVariant(gap.priority)} className="text-xs">
                        {gap.priority} priority
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Current: {gap.current}%</span>
                        <span>Target: {gap.required}%</span>
                      </div>
                      <Progress value={gap.current} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Paths */}
            <Card className="bg-gradient-card border-border/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-success" />
                  Recommended Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.learningPaths.map((path, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm">{path}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-4 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Start Learning Path
                  <BookOpen className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-gradient-card border-border/20 shadow-card">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button onClick={onStartOver} variant="outline" className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Take New Assessment
                  </Button>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Users className="w-4 h-4 mr-2" />
                    Connect with Mentors
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};