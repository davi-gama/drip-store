import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { SectionSignUp } from "../../components/SectionSignUp/SectionSignUp"
import "./SignUpPage.css";


export function SignUpPage() {
  return(
    <div className="su-bgcolor">
      <Layout 
      children={
        <div className="su-wrapper">
          <Section children={<SectionSignUp/>} />
      </div>
      }
      />
    </div>
  );
}
