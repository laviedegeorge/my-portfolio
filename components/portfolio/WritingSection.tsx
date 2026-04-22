import { articles } from "@/lib/portfolio-data";
import Section from "./Section";
import ArticleRow from "./ArticleRow";

export default function WritingSection() {
  return (
    <Section id="writing" label="Writing / Articles">
      <div className="flex flex-col">
        {articles.map((article, i) => (
          <ArticleRow key={article.title} article={article} index={i} />
        ))}
      </div>
    </Section>
  );
}
