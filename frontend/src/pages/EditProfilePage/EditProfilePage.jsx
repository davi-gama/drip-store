import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { SectionEditProfile } from "../../components/SectionEditProfile/SectionEditProfile";
import "./EditProfilePage.css";

export function EditProfilePage() {
  return (
    <div className="ep-bgcolor">
      <Layout
        children={
          <div className="ep-wrapper">
            <Section title="Editar Perfil" children={<SectionEditProfile />} />
          </div>
        }
      />
    </div>
  );
}
