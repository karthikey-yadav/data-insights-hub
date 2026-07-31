import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

const FRAMEWORK_STEPS = ["Ask", "Prepare", "Process", "Analyze", "Share", "Act"];

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: "Live" | "In progress" | "Planned";
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Superstore Sales Analysis",
    description:
      "Regional sales, profit, and category performance for a retail superstore, worked through SQL and an interactive dashboard.",
    stack: ["SQL", "TanStack Start", "Recharts"],
    status: "Live",
    href: "https://github.com/karthikey-yadav/sales-navigator",
  },
  {
    title: "India Waste & Plastic Pollution Insights",
    description:
      "State-wise view of municipal solid waste and plastic processing gaps across India, with trend and priority analysis.",
    stack: ["TanStack Start", "React", "Recharts"],
    status: "Live",
    href: "https://github.com/karthikey-yadav/India-waste_insights",
  },
  {
    title: "Third Project",
    description: "Next case study — slot reserved for the third portfolio project.",
    stack: [],
    status: "Planned",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12">
          <p className="text-sm font-medium text-muted-foreground">Karthikeyan Yadav</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Data Insights Hub
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A small portfolio of data analytics case studies, each worked through Google's Ask
            &rarr; Prepare &rarr; Process &rarr; Analyze &rarr; Share &rarr; Act framework.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {FRAMEWORK_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <Badge variant="secondary">{step}</Badge>
                {i < FRAMEWORK_STEPS.length - 1 && (
                  <span className="text-muted-foreground">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge
                    variant={project.status === "Live" ? "default" : "outline"}
                    className="shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              {project.stack.length > 0 && (
                <CardContent className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              )}
              <CardFooter className="mt-auto">
                {project.href ? (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                ) : (
                  <span className="text-sm text-muted-foreground">Coming soon</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
