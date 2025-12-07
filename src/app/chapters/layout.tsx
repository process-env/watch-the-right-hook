import { BookLayout } from "@/components/layout";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BookLayout>{children}</BookLayout>;
}
