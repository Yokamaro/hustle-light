import { TrendingUp, Brain, Megaphone } from "lucide-react";

const Index = () => {
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

      {/* Content Sections */}
      <section className="container mx-auto px-4 pb-20 md:pb-32 max-w-4xl space-y-20">
        {/* Estratégias Para Escalar */}
        <article className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              5 Estratégias Para Escalar Seu Negócio
            </h2>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Escalar um negócio exige planejamento estratégico e execução consistente. Conheça as principais estratégias que empresários de sucesso utilizam para crescer de forma sustentável.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">1. Automatize Processos Repetitivos</h3>
                <p className="text-muted-foreground">
                  Identifique tarefas que consomem tempo e podem ser automatizadas. Utilize ferramentas de gestão, CRM e automação de marketing para liberar sua equipe para atividades estratégicas. A automação reduz erros humanos e aumenta a eficiência operacional.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">2. Invista em Marketing de Conteúdo</h3>
                <p className="text-muted-foreground">
                  Crie conteúdo valioso que atraia e eduque seu público-alvo. Blogs, vídeos, podcasts e e-books estabelecem autoridade no mercado e geram leads qualificados. O marketing de conteúdo tem custo menor que publicidade tradicional e resultados duradouros.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">3. Construa Parcerias Estratégicas</h3>
                <p className="text-muted-foreground">
                  Identifique empresas complementares ao seu negócio e estabeleça parcerias win-win. Colaborações ampliam seu alcance de mercado sem grandes investimentos. Joint ventures, co-marketing e programas de afiliados são exemplos eficazes.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">4. Otimize Sua Estrutura de Custos</h3>
                <p className="text-muted-foreground">
                  Analise regularmente seus gastos e elimine desperdícios. Negocie com fornecedores, terceirize funções não-essenciais e adote tecnologias que reduzam custos operacionais. Margens saudáveis são fundamentais para crescimento sustentável.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">5. Foque na Retenção de Clientes</h3>
                <p className="text-muted-foreground">
                  Conquistar novos clientes custa até 5x mais que reter os existentes. Invista em experiência do cliente, programas de fidelidade e suporte excepcional. Clientes satisfeitos geram receita recorrente e indicações orgânicas.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Mindset Empreendedor */}
        <article className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Como Desenvolver um Mindset Empreendedor
            </h2>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O sucesso no empreendedorismo começa na mente. Desenvolver a mentalidade certa é tão importante quanto ter um bom plano de negócios. Veja como cultivar um mindset vencedor.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Abrace o Aprendizado Contínuo</h3>
                <p className="text-muted-foreground">
                  Empreendedores de sucesso são eternos estudantes. Leia livros, faça cursos, participe de eventos e aprenda com mentores. O mercado muda constantemente e você precisa evoluir junto. Dedique pelo menos 30 minutos diários para desenvolvimento pessoal e profissional.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Transforme Falhas em Aprendizados</h3>
                <p className="text-muted-foreground">
                  Não existe fracasso, apenas feedback. Cada erro é uma oportunidade de aprender e melhorar. Analise objetivamente o que deu errado, extraia lições valiosas e ajuste sua estratégia. Os maiores empreendedores falharam diversas vezes antes de alcançar o sucesso.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Cultive Resiliência e Persistência</h3>
                <p className="text-muted-foreground">
                  O caminho do empreendedorismo é repleto de desafios e rejeições. Desenvolva resistência emocional para superar obstáculos sem desistir. Celebre pequenas vitórias, mantenha o foco nos objetivos de longo prazo e cerque-se de pessoas que apoiam sua jornada.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Pense Grande, Comece Pequeno</h3>
                <p className="text-muted-foreground">
                  Tenha visão ambiciosa, mas seja pragmático na execução. Divida grandes metas em pequenos passos acionáveis. Comece com um MVP (produto mínimo viável), teste no mercado, aprenda com feedbacks e melhore continuamente. Progresso incremental gera momentum.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Assuma Responsabilidade Total</h3>
                <p className="text-muted-foreground">
                  Empreendedores bem-sucedidos não culpam circunstâncias externas. Assumem total responsabilidade pelos resultados, sejam positivos ou negativos. Essa mentalidade coloca você no controle e empodera para fazer mudanças necessárias quando algo não funciona.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Marketing Digital */}
        <article className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Megaphone className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Marketing Digital: Guia Completo Para Iniciantes
            </h2>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Marketing digital é essencial para qualquer negócio moderno. Conheça os pilares fundamentais para estabelecer presença online e atrair clientes de forma consistente.
            </p>

            <div className="space-y-8 mt-8">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Defina Seu Público-Alvo</h3>
                <p className="text-muted-foreground">
                  Antes de investir em qualquer estratégia, entenda profundamente quem é seu cliente ideal. Crie personas detalhadas: idade, profissão, desafios, objetivos e comportamento online. Quanto mais específico, melhor. Marketing genérico desperdiça recursos e gera poucos resultados.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Construa Presença nas Redes Sociais</h3>
                <p className="text-muted-foreground">
                  Escolha 2-3 plataformas onde seu público está mais ativo. Instagram, LinkedIn, Facebook, TikTok ou YouTube - cada uma tem características únicas. Publique conteúdo regularmente, interaja com seguidores e use recursos como Stories e Reels para aumentar engajamento.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Invista em SEO (Otimização para Buscadores)</h3>
                <p className="text-muted-foreground">
                  Aparecer no Google quando clientes pesquisam seus produtos/serviços gera tráfego qualificado gratuito. Pesquise palavras-chave relevantes, otimize títulos e descrições, crie conteúdo de qualidade e conquiste backlinks. SEO exige paciência, mas os resultados são duradouros.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Utilize E-mail Marketing</h3>
                <p className="text-muted-foreground">
                  E-mail marketing tem ROI médio de 42:1 - para cada R$1 investido, retorna R$42. Construa uma lista de contatos oferecendo conteúdo valioso em troca do e-mail. Envie newsletters regulares com dicas, novidades e ofertas. Segmente sua lista para mensagens mais personalizadas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Anúncios Pagos (Google Ads e Meta Ads)</h3>
                <p className="text-muted-foreground">
                  Tráfego pago acelera resultados enquanto você constrói presença orgânica. Comece com orçamento pequeno, teste diferentes anúncios e públicos. Analise métricas como CPC, CTR e conversão. Otimize campanhas continuamente. Anúncios pagos oferecem resultados rápidos e mensuráveis.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">Analise e Otimize Constantemente</h3>
                <p className="text-muted-foreground">
                  Use ferramentas como Google Analytics, Meta Business Suite e outras para monitorar performance. Identifique o que funciona e o que não funciona. Teste diferentes abordagens (testes A/B), aprenda com dados e refine suas estratégias. Marketing digital é um ciclo contínuo de melhoria.
                </p>
              </div>
            </div>
          </div>
        </article>
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
