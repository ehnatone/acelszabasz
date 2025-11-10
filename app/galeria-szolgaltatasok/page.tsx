import ServiceGallery, {
  type ServiceGalleryGroup,
} from "@/components/Gallery/ServiceGallery";
import fs from "fs";
import path from "path";

const SERVICE_GROUPS: Array<{
  key: ServiceGalleryGroup["key"];
  title: ServiceGalleryGroup["title"];
  folders: string[];
}> = [
  { key: "kapuk", title: "Úszókapuk", folders: ["kapuk"] },
  { key: "kerites", title: "Kerítések", folders: ["kerites"] },
  { key: "lepcsok", title: "Lépcsők", folders: ["lepcsok"] },
  { key: "korlatok", title: "Korlátok", folders: ["korlatok"] },
  {
    key: "terasztetok",
    title: "Terasz- és előtetők",
    folders: ["terasztetok"],
  },
  {
    key: "tarolok",
    title: "Tárolók és Garázsok",
    folders: ["tarolok"],
  },
  {
    key: "egyeb",
    title: "Egyéb egyedi acél szerkezetek",
    folders: ["egyeb"],
  },
  
];

const GALLERY_ROOT = path.join(process.cwd(), "public", "galleria");

const getImagesForFolders = (folders: string[]): string[] => {
  return folders.reduce<string[]>((acc, folder) => {
    const folderPath = path.join(GALLERY_ROOT, folder);

    if (!fs.existsSync(folderPath)) {
      return acc;
    }

    const entries = fs.readdirSync(folderPath, { withFileTypes: true });

    const files = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, "hu", { numeric: true }))
      .map((file) => `/galleria/${folder}/${file}`);

    return acc.concat(files);
  }, []);
};

export default function ServiceGalleryPage() {
  const services: ServiceGalleryGroup[] = SERVICE_GROUPS.map((group) => ({
    key: group.key,
    title: group.title,
    images: getImagesForFolders(group.folders),
  }));

  return (
    <section
      id="galeria-szolgaltatasok"
      className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gray-100"
    >
      <div className="container max-h-[calc(100vh-6rem)] mx-auto text-center overflow-y-auto scroll-smooth">
        <h2 className="text-4xl font-bold text-red-700 py-10">Munkáim</h2>
        <ServiceGallery services={services} />
      </div>
    </section>
  );
}
