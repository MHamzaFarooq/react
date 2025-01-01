import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { Options } from "@/components/options/Options";
import { Title } from "@/components/title/Title";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <Card />
      <Options />
    </>
  );
}
