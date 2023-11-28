import { PageConfig } from "@atsnek/jaen"
import { PageProps } from "gatsby"

const Page: React.FC<PageProps> = () => {
  return <div>LENS</div>
}

export default Page

export const pageConfig: PageConfig = {
  label: "Lens Index",
  auth: {
    isRequired: true,
  },
}
