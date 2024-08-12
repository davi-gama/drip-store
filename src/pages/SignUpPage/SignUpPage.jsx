import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { SectionSignUp } from "../../components/SectionSignUp/SectionSignUp";
import "./SignUpPage.css";

export function SignUpPage() {
  return (
    <div className="sp-wrapper">
      <Layout children={<Section children={<SectionSignUp />} />} />
    </div>
  );
}
