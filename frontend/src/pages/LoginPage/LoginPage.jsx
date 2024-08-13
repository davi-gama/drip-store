import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { SectionLogin } from "../../components/SectionLogin/SectionLogin";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <div className="lp-bgcolor">
      <Layout
        children={
          <div className="lp-wrapper">
            <Section children={<SectionLogin />} />
          </div>
        }
      />
    </div>
  );
}
