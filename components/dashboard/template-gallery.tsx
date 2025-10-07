import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Star, StarOff } from "lucide-react";
import Image from "next/image";

export function TemplateGallery() {
  const templates = [
    {
      id: "temp-001",
      name: "Product Showcase",
      description: "Highlight product features with clean layout",
      thumbnail: "https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Display",
      featured: true,
      formats: ["Billboard", "Halfpage", "MPU"]
    },
    {
      id: "temp-002",
      name: "Corporate Announcement",
      description: "Professional template for company news",
      thumbnail: "https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "LinkedIn",
      featured: false,
      formats: ["Single Image", "Carousel"]
    },
    {
      id: "temp-003",
      name: "Seasonal Promotion",
      description: "Eye-catching design for limited-time offers",
      thumbnail: "https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Multi-channel",
      featured: true,
      formats: ["Billboard", "Halfpage", "LinkedIn"]
    },
    {
      id: "temp-004",
      name: "Technical Datasheet",
      description: "Clear presentation of technical specifications",
      thumbnail: "https://images.pexels.com/photos/5912603/pexels-photo-5912603.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "LinkedIn",
      featured: false,
      formats: ["Single Image", "Document Ad"]
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image 
              src={template.thumbnail} 
              alt={template.name}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2">
              {template.featured ? (
                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </Button>
              ) : (
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full bg-background/80">
                  <StarOff className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-lg">{template.name}</CardTitle>
            <CardDescription className="line-clamp-2">{template.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge>{template.category}</Badge>
              {template.formats.slice(0, 2).map((format) => (
                <Badge key={format} variant="outline">{format}</Badge>
              ))}
              {template.formats.length > 2 && (
                <Badge variant="outline">+{template.formats.length - 2} more</Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              Use Template
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
