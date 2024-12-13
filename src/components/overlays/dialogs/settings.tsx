"use client";

import { FadeIn } from "@/components/ui/(custom)/fade-in";
import { ModeToggle } from "@/components/ui/(custom)/mode-toggle";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";

export const SettingsDialog = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="">
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Settings</h2>
        </DialogHeader>

        <FadeIn direction="right">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label>Theme</Label>
              <span className="text-[0.8rem] text-muted-foreground">Customize how this app looks on your device</span>
            </div>
            <ModeToggle />
          </div>
        </FadeIn>
      </DialogContent>
    </Dialog>
  );
};
