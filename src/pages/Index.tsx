import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Brain, Megaphone } from "lucide-react";

const Index = () => {
  const tips = [
    {
      title: "5 Estratégias Para Escalar Seu Negócio",
      description: "Descubra métodos comprovados para expandir sua empresa de forma sustentável e eficiente.",
      icon: TrendingUp,
    },
    {
      title: "Como Desenvolver um Mindset Empreendedor",
      description: "Aprenda a cultivar a mentalidade necessária para superar desafios e alcançar o sucesso.",
      icon: Brain,
    },
    {
      title: "Marketing Digital: Guia Completo Para Iniciantes",
      description: "Domine as principais estratégias de marketing digital para alavancar seu negócio online.",
      icon: Megaphone,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Dicas de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empreendedorismo
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore estratégias práticas e insights valiosos para impulsionar seu negócio
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Dicas de Empreendedorismo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
