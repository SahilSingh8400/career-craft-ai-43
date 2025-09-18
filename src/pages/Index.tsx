import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AssessmentForm } from "@/components/AssessmentForm";
import { LoadingAnalysis } from "@/components/LoadingAnalysis";
import { ResultsDashboard } from "@/components/ResultsDashboard";

type AppState = "hero" | "assessment" | "loading" | "results";

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

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("hero");
  const [results, setResults] = useState(null);

  const handleStartAssessment = () => {
    setCurrentState("assessment");
  };

  const handleBackToHero = () => {
    setCurrentState("hero");
  };

  const handleAssessmentComplete = async (data: AssessmentData) => {
    setCurrentState("loading");
    
    // Simulate AI processing with mock data
    setTimeout(() => {
      const mockResults = {
        summary: "Based on your strong background in technology and interest in problem-solving, you're well-suited for careers that combine technical expertise with strategic thinking. Your educational foundation and diverse skill set position you for leadership roles in the tech industry.",
        careerRecommendations: [
          {
            title: "AI/ML Engineer",
            match: 92,
            description: "Design and develop machine learning models and AI systems to solve complex business problems.",
            skills: ["Python", "TensorFlow", "Data Analysis", "Statistics"],
            salary: "$120k - $180k",
            growth: "35% (Very High)",
            requirements: [
              "Bachelor's in Computer Science or related field",
              "Strong programming skills in Python/R",
              "Understanding of machine learning algorithms",
              "Experience with data preprocessing and analysis"
            ]
          },
          {
            title: "Product Manager",
            match: 87,
            description: "Lead product development from conception to launch, working with cross-functional teams.",
            skills: ["Strategy", "Communication", "Data Analysis", "Leadership"],
            salary: "$110k - $160k",
            growth: "25% (High)",
            requirements: [
              "Bachelor's degree (any field)",
              "Strong analytical and communication skills",
              "Experience with product development lifecycle",
              "Understanding of user experience principles"
            ]
          },
          {
            title: "Data Scientist",
            match: 85,
            description: "Extract insights from complex datasets to drive business decisions and strategy.",
            skills: ["Statistics", "Python", "SQL", "Visualization"],
            salary: "$100k - $150k",
            growth: "30% (Very High)",
            requirements: [
              "Master's degree preferred",
              "Strong statistical and mathematical background",
              "Programming experience in Python/R",
              "Experience with data visualization tools"
            ]
          }
        ],
        skillGaps: [
          { skill: "Machine Learning", current: 45, required: 80, priority: "high" },
          { skill: "Python Programming", current: 60, required: 85, priority: "high" },
          { skill: "Data Visualization", current: 70, required: 85, priority: "medium" },
          { skill: "Statistics", current: 55, required: 75, priority: "medium" },
          { skill: "Project Management", current: 65, required: 80, priority: "low" }
        ],
        learningPaths: [
          "Complete a Machine Learning Specialization (Coursera)",
          "Build 3-5 Python projects for portfolio",
          "Learn advanced data visualization with Tableau/Power BI",
          "Take statistics and probability courses",
          "Practice SQL for data manipulation",
          "Join AI/ML communities and attend meetups"
        ]
      };
      
      setResults(mockResults);
      setCurrentState("results");
    }, 3000);
  };

  const handleStartOver = () => {
    setCurrentState("hero");
    setResults(null);
  };

  switch (currentState) {
    case "hero":
      return <HeroSection onStartAssessment={handleStartAssessment} />;
    case "assessment":
      return <AssessmentForm onComplete={handleAssessmentComplete} onBack={handleBackToHero} />;
    case "loading":
      return <LoadingAnalysis />;
    case "results":
      return results ? <ResultsDashboard results={results} onStartOver={handleStartOver} /> : null;
    default:
      return <HeroSection onStartAssessment={handleStartAssessment} />;
  }
};

export default Index;
