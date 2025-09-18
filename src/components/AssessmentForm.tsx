import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface AssessmentData {
  currentEducation: string;
  fieldOfStudy: string;
  completedDegrees: string[];
  skills: string;
  interests: string;
  careerPreferences: string;
  workEnvironment: string[];
  experience: string;
}

interface AssessmentFormProps {
  onComplete: (data: AssessmentData) => void;
  onBack: () => void;
}

export const AssessmentForm = ({ onComplete, onBack }: AssessmentFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<AssessmentData>({
    currentEducation: "",
    fieldOfStudy: "",
    completedDegrees: [],
    skills: "",
    interests: "",
    careerPreferences: "",
    workEnvironment: [],
    experience: "",
  });

  const steps = [
    {
      title: "Education Background",
      description: "Tell us about your educational journey",
    },
    {
      title: "Skills & Interests",
      description: "What are you passionate about?",
    },
    {
      title: "Career Preferences",
      description: "What kind of work environment suits you?",
    },
    {
      title: "Experience & Goals",
      description: "Share your experience and aspirations",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const updateFormData = (field: keyof AssessmentData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWorkEnvironmentChange = (value: string, checked: boolean) => {
    const current = formData.workEnvironment;
    if (checked) {
      updateFormData("workEnvironment", [...current, value]);
    } else {
      updateFormData("workEnvironment", current.filter(item => item !== value));
    }
  };

  const handleDegreeChange = (value: string, checked: boolean) => {
    const current = formData.completedDegrees;
    if (checked) {
      updateFormData("completedDegrees", [...current, value]);
    } else {
      updateFormData("completedDegrees", current.filter(item => item !== value));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="currentEducation">Current Education Level</Label>
              <Select value={formData.currentEducation} onValueChange={(value) => updateFormData("currentEducation", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your current education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate/Master's</SelectItem>
                  <SelectItem value="phd">PhD/Doctorate</SelectItem>
                  <SelectItem value="professional">Professional Certification</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fieldOfStudy">Field of Study</Label>
              <Input
                id="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={(e) => updateFormData("fieldOfStudy", e.target.value)}
                placeholder="e.g., Computer Science, Business, Engineering..."
                className="mt-2"
              />
            </div>

            <div>
              <Label>Completed Degrees/Certifications</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {["Bachelor's Degree", "Master's Degree", "PhD", "Professional Certificate", "Trade School", "Online Courses"].map((degree) => (
                  <div key={degree} className="flex items-center space-x-2">
                    <Checkbox
                      id={degree}
                      checked={formData.completedDegrees.includes(degree)}
                      onCheckedChange={(checked) => handleDegreeChange(degree, checked === true)}
                    />
                    <Label htmlFor={degree} className="text-sm">{degree}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="skills">Current Skills</Label>
              <Textarea
                id="skills"
                value={formData.skills}
                onChange={(e) => updateFormData("skills", e.target.value)}
                placeholder="List your technical and soft skills (e.g., Python programming, project management, public speaking...)"
                className="mt-2 min-h-[120px]"
              />
            </div>

            <div>
              <Label htmlFor="interests">Interests & Passions</Label>
              <Textarea
                id="interests"
                value={formData.interests}
                onChange={(e) => updateFormData("interests", e.target.value)}
                placeholder="What topics, activities, or fields genuinely interest you? (e.g., artificial intelligence, sustainable energy, creative writing...)"
                className="mt-2 min-h-[120px]"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="careerPreferences">Career Goals & Preferences</Label>
              <Textarea
                id="careerPreferences"
                value={formData.careerPreferences}
                onChange={(e) => updateFormData("careerPreferences", e.target.value)}
                placeholder="Describe your ideal career path, industry preferences, and long-term goals..."
                className="mt-2 min-h-[120px]"
              />
            </div>

            <div>
              <Label>Preferred Work Environment</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {["Remote Work", "Office Environment", "Hybrid", "Travel Required", "Team Collaboration", "Independent Work", "Startup Culture", "Corporate Structure"].map((env) => (
                  <div key={env} className="flex items-center space-x-2">
                    <Checkbox
                      id={env}
                      checked={formData.workEnvironment.includes(env)}
                      onCheckedChange={(checked) => handleWorkEnvironmentChange(env, checked === true)}
                    />
                    <Label htmlFor={env} className="text-sm">{env}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="experience">Work Experience & Projects</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => updateFormData("experience", e.target.value)}
                placeholder="Share relevant work experience, internships, projects, or volunteer work that might influence your career path..."
                className="mt-2 min-h-[150px]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-gradient-card border-border/20 shadow-card">
        <CardHeader className="text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {steps[currentStep].title}
          </CardTitle>
          <CardDescription className="text-foreground/70">
            {steps[currentStep].description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  Generate Analysis
                  <CheckCircle className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};