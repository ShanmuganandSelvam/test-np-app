import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, ExternalLink } from "lucide-react";
import Link from "next/link";

export function RecentCampaigns() {
  const campaigns = [
    {
      id: "camp-001",
      name: "Summer Product Launch",
      description: "New product line promotion across digital channels",
      progress: 85,
      status: "In Progress",
      dueDate: "Aug 15, 2023",
      owner: {
        name: "Alex Morgan",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      assets: 24,
      channels: ["Programmatic Display", "LinkedIn"]
    },
    {
      id: "camp-002",
      name: "Q3 Brand Awareness",
      description: "Multi-channel brand campaign for European markets",
      progress: 100,
      status: "Completed",
      dueDate: "Jul 30, 2023",
      owner: {
        name: "Jamie Chen",
        avatar: "https://i.pravatar.cc/150?img=2"
      },
      assets: 36,
      channels: ["Programmatic Display", "LinkedIn", "Meta"]
    },
    {
      id: "camp-003",
      name: "Product Feature Highlight",
      description: "Technical feature showcase for B2B audience",
      progress: 40,
      status: "In Progress",
      dueDate: "Sep 5, 2023",
      owner: {
        name: "Taylor Kim",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      assets: 12,
      channels: ["LinkedIn", "Email"]
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Card key={campaign.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{campaign.name}</CardTitle>
              <Badge variant={campaign.status === "Completed" ? "secondary" : "default"}>
                {campaign.status}
              </Badge>
            </div>
            <CardDescription>{campaign.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Due Date</p>
                  <p className="font-medium">{campaign.dueDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Assets</p>
                  <p className="font-medium">{campaign.assets} files</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {campaign.channels.map((channel) => (
                  <Badge key={channel} variant="outline">{channel}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-3 border-t">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={campaign.owner.avatar} alt={campaign.owner.name} />
                <AvatarFallback>{campaign.owner.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{campaign.owner.name}</span>
            </div>
            <div className="flex gap-2">
              <Link href={`/campaigns/${campaign.id}`}>
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </Link>
              <Link href={`/campaigns/${campaign.id}/preview`}>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
