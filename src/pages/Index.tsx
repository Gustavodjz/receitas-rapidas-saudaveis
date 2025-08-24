import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star, Users } from "lucide-react";
import heroDishes from "@/assets/hero-dishes.jpg";
import happyWomanKitchen from "@/assets/happy-woman-kitchen.jpg";
import recipeShowcase from "@/assets/recipe-showcase.jpg";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                🔥 Oferta Limitada
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Emagreça de forma{' '}
                <span className="text-yellow-300">rápida e saborosa</span>: 15 Receitas Relâmpago
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Perder barriga em apenas <strong>10 minutos por dia</strong> nunca foi tão delicioso!
              </p>
              <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex">
                <Button 
                  variant="cta" 
                  size="xl" 
                  onClick={scrollToCTA}
                  className="w-full lg:w-auto"
                >
                  Quero meu ebook agora por apenas R$37
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroDishes} 
                alt="Pratos saudáveis e coloridos para emagrecimento"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subheadline Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-6">
            Diga adeus às dietas complicadas
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra receitas simples, rápidas e deliciosas que cabem na sua rotina. 
            Sem complicação, sem estresse, só resultados!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Por que escolher as Receitas Relâmpago?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Prontas em até 10 minutos",
                description: "Receitas super rápidas que cabem na sua rotina corrida"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Ingredientes fáceis de encontrar",
                description: "Todos os ingredientes você encontra em qualquer mercado"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Zero complicação",
                description: "Receitas simples que qualquer pessoa consegue fazer"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Para mulheres ocupadas",
                description: "Perfeito para quem tem pouco tempo mas quer se cuidar"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Emagrecimento saudável",
                description: "Foco em nutrir o corpo enquanto perde peso"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Resultados visíveis",
                description: "Resultados que você pode ver em poucas semanas"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-strong transition-all duration-300 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Middle */}
      <section className="py-16 bg-gradient-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Transforme sua alimentação hoje mesmo!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não perca mais tempo com dietas complicadas. Comece agora sua jornada rumo ao corpo dos seus sonhos!
          </p>
          <Button 
            variant="cta-secondary" 
            size="xl"
            onClick={scrollToCTA}
            className="bg-white text-primary hover:bg-white/90 hover:text-primary"
          >
            Quero meu ebook agora por apenas R$37
          </Button>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Veja o que nossas clientes estão falando
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carla, 38 anos",
                text: "Perdi 5kg em 3 semanas só comendo essas receitas rápidas! Não acreditava que seria tão fácil.",
                rating: 5
              },
              {
                name: "Juliana, 42 anos", 
                text: "Finalmente consegui manter uma rotina saudável sem gastar horas na cozinha. Amei cada receita!",
                rating: 5
              },
              {
                name: "Ana Paula, 35 anos",
                text: "As receitas são deliciosas e realmente funcionam! Minha barriga diminuiu muito em pouco tempo.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={recipeShowcase} 
                alt="Exemplo de receitas do ebook"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                15 Receitas que vão revolucionar sua alimentação
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Saladas coloridas e nutritivas",
                  "Pratos com proteínas magras",
                  "Smoothies poderosos para o café da manhã",
                  "Lanches saudáveis para qualquer hora",
                  "Sopas reconfortantes e emagrecedoras"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-success" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="lg" onClick={scrollToCTA}>
                Quero começar agora!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-warning text-warning-foreground text-lg px-6 py-2">
              ⏰ Oferta por Tempo Limitado
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Transforme seu corpo em apenas 10 minutos por dia!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Por apenas <span className="line-through text-white/60">R$97</span>{' '}
              <span className="text-yellow-300 font-bold text-3xl">R$37</span>
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div>
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-success" />
                  <h3 className="font-bold mb-2">15 Receitas Exclusivas</h3>
                  <p className="text-sm text-white/80">Todas testadas e aprovadas</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3 text-warning" />
                  <h3 className="font-bold mb-2">Preparo em 10min</h3>
                  <p className="text-sm text-white/80">Perfeito para sua rotina</p>
                </div>
                <div>
                  <Star className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h3 className="font-bold mb-2">Garantia 7 dias</h3>
                  <p className="text-sm text-white/80">100% de satisfação</p>
                </div>
              </div>
            </div>
            <Button 
              variant="cta" 
              size="xl"
              className="text-2xl py-6 px-12 bg-white text-primary hover:bg-white/90 hover:text-primary shadow-glow"
            >
              🔥 QUERO MEU EBOOK AGORA POR R$37
            </Button>
            <p className="text-white/70 mt-6 text-sm">
              💳 Pagamento 100% seguro • 📱 Acesso imediato • 🔒 Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-success/5 border-t border-success/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Garantia de 7 dias ou seu dinheiro de volta!
            </h2>
            <p className="text-lg text-muted-foreground">
              Se você não amar as receitas e não ver resultados, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem complicação!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;