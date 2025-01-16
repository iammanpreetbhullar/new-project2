import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UserProfile() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-2xl">John Doe</CardTitle>
            <div className="text-sm text-muted-foreground">@johndoe</div>
            <div className="flex gap-2">
              <Badge>Developer</Badge>
              <Badge variant="outline">San Francisco</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer with a passion for building beautiful user interfaces
                and scalable backend systems. Love contributing to open source projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <div className="text-sm space-y-1">
                <div>Email: john.doe@example.com</div>
                <div>Website: www.johndoe.dev</div>
                <div>GitHub: @johndoe</div>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <Button>Edit Profile</Button>
              <Button variant="outline">Share Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}