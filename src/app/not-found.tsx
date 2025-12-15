import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-base-100">
      <div className="text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
          404 - Seite nicht gefunden
        </h1>
        <p className="text-lg text-base-content/70 mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Zur Startseite
          </Button>
          <Button href="/#cases" variant="outline" size="lg">
            Unsere Lösungen
          </Button>
        </div>
      </div>
    </section>
  );
}
