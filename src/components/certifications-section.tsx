import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const certifications = [
  { name: "ISTQB Certified Tester, Foundation Level", issuer: "ISTQB", link: "#" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", link: "#" },
  { name: "Certified Selenium Professional", issuer: "Dev-Training", link: "#"},
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Validating my expertise and commitment to quality.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.name} className="flex flex-col text-center items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Award className="h-16 w-16 text-primary mb-4" />
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2 flex-grow">
                <Badge variant="outline">{cert.issuer}</Badge>
              </CardContent>
              <Button asChild variant="link" className="mt-4">
                <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                  Verify <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
