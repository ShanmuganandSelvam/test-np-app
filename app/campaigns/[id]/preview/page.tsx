import CampaignPreviewClient from "./preview-client";

// This function is required for static site generation with "output: export"
export async function generateStaticParams() {
  // Define the campaign IDs that will be pre-rendered at build time
  return [
    { id: 'camp-001' },
    { id: 'camp-002' },
    { id: 'camp-003' }
  ];
}

export default function CampaignPreviewPage({ params }: { params: { id: string } }) {
  return <CampaignPreviewClient params={params} />;
}
