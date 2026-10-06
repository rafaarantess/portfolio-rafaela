export function SiteFooter({ locale = "pt" }: { locale?: "pt" | "en" }) {
  return <footer className="premiumFooter"><span>© 2026 Rafaela Arantes</span><span>Rio de Janeiro · {locale === "pt" ? "Brasil" : "Brazil"}</span><a href="mailto:rafaaranteswork@gmail.com">rafaaranteswork@gmail.com</a></footer>;
}
